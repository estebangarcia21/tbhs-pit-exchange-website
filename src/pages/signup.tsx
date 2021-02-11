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
  RegisterUserDocument,
  RegisterUserMutation,
  RegisterUserMutationVariables
} from "generated/graphql-types"
import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"
import { useForm } from "react-hook-form"

interface FormInputs {
  email: string
  password: string
  confirmPassword: string
}

const Signup = () => {
  const router = useRouter()
  const client = useApolloClient()

  const { register, handleSubmit, errors, watch } = useForm<FormInputs>()
  const [loginResponse, setLoginResponse] = useState<RegisterUserMutation>()

  const onSubmit = async ({ email, password }: FormInputs) => {
    const { data } = await client.mutate<
      RegisterUserMutation,
      RegisterUserMutationVariables
    >({
      mutation: RegisterUserDocument,
      variables: {
        email,
        password
      }
    })

    if (data.registerUser.successful) {
      router.push("/dashboard")
    } else {
      setLoginResponse(data)
    }
  }

  return (
    <div>
      <Head>
        <title>Sign Up</title>
      </Head>

      <Navbar />

      <div className="mx-auto max-w-xl">
        <StandardForm title="Sign Up" handleSubmit={handleSubmit(onSubmit)}>
          <StandardForm.Input
            htmlFor="email"
            inRef={register({
              ...requiredFieldValidation,
              pattern: emailValidationRule
            })}
          >
            Email
          </StandardForm.Input>

          {loginResponse?.registerUser.error.object === "email" &&
            noErrors(errors) && (
              <span className="text-xs text-red-500">
                * {loginResponse?.registerUser.error.message}
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

          {loginResponse?.registerUser.error.object === "password" &&
            noErrors(errors) && (
              <span className="text-xs text-red-500">
                * {loginResponse?.registerUser.error.message}
              </span>
            )}

          {errors.password ? (
            <span className="text-xs text-red-500">
              * {errors.password.message}
            </span>
          ) : (
            !loginResponse && (
              <span className="text-xs text-gray-600">
                Must be between 4 and 32 characters long
              </span>
            )
          )}

          <StandardForm.Input
            htmlFor="confirmPassword"
            type="password"
            inRef={register({
              ...requiredFieldValidation,
              ...passwordValidation,
              validate: value =>
                value === watch("password") || "Password do not match"
            })}
          >
            Confirm Password
          </StandardForm.Input>

          {errors.confirmPassword && (
            <span className="text-xs text-red-500">
              * {errors.confirmPassword.message}
            </span>
          )}

          <StandardForm.Button type="submit">Sign Up</StandardForm.Button>
        </StandardForm>
      </div>
    </div>
  )
}

export default Signup
