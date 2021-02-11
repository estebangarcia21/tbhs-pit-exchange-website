import { useApolloClient } from "@apollo/client"
import {
  emailValidationRule,
  noErrors,
  passwordValidation,
  requiredFieldValidation,
  StandardForm
} from "components/forms/StandardForm"
import { Navbar } from "components/global/Navbar"
import {
  LoginDocument,
  LoginMutation,
  LoginMutationVariables
} from "generated/graphql-types"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { useForm } from "react-hook-form"

interface FormInputs {
  email: string
  password: string
}

const Login = () => {
  const router = useRouter()
  const client = useApolloClient()

  const { register, handleSubmit, errors } = useForm<FormInputs>()
  const [loginResponse, setLoginResponse] = useState<LoginMutation>()

  const onSubmit = async ({ email, password }: FormInputs) => {
    const { data } = await client.mutate<LoginMutation, LoginMutationVariables>(
      {
        mutation: LoginDocument,
        variables: {
          email,
          password
        }
      }
    )

    if (data.login.successful) {
      router.push("/dashboard")
    } else {
      setLoginResponse(data)
    }
  }

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>

      <Navbar />

      <div className="mx-auto max-w-xl">
        <StandardForm title="Login" handleSubmit={handleSubmit(onSubmit)}>
          <StandardForm.Input
            htmlFor="email"
            inRef={register({
              ...requiredFieldValidation,
              pattern: emailValidationRule
            })}
          >
            Email
          </StandardForm.Input>

          {loginResponse?.login.error.object === "email" &&
            noErrors(errors) && (
              <span className="text-xs text-red-500">
                * {loginResponse?.login.error.message}
              </span>
            )}

          <StandardForm.Error error={errors.email} />

          <StandardForm.Input
            htmlFor="password"
            type="password"
            inRef={register({
              ...requiredFieldValidation,
              ...passwordValidation
            })}
          >
            Password
          </StandardForm.Input>

          {loginResponse?.login.error.object === "password" &&
            noErrors(errors) && (
              <span className="text-xs text-red-500">
                * {loginResponse?.login.error.message}
              </span>
            )}

          {errors.password && (
            <span className="text-xs text-red-500">
              * {errors.password.message}
            </span>
          )}

          <StandardForm.Button type="submit">Login</StandardForm.Button>
        </StandardForm>

        <div className="flex flex-row justify-center">
          <Link href="/login/reset-password">
            <a className="text-gray-500 transition hover:text-gray-600">
              Forgot Password?
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
