import { useApolloClient } from "@apollo/client"
import {
  emailValidationRule,
  noErrors,
  passwordValidation,
  requiredFieldValidation,
  Form
} from "components/lib/Form"
import Navbar from "components/lib/Navbar"
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
        <Form title="Sign Up" handleSubmit={handleSubmit(onSubmit)}>
          <Form.Input
            htmlFor="email"
            inRef={register({
              ...requiredFieldValidation,
              pattern: emailValidationRule
            })}
          >
            Email
          </Form.Input>

          {loginResponse?.registerUser.error.object === "email" &&
            noErrors(errors) && (
              <span className="text-xs text-red-500">
                * {loginResponse?.registerUser.error.message}
              </span>
            )}

          <Form.Error error={errors.email} />

          <Form.Input
            htmlFor="password"
            type="password"
            inRef={register({
              ...requiredFieldValidation,
              ...passwordValidation
            })}
          >
            Password
          </Form.Input>

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

          <Form.Input
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
          </Form.Input>

          {errors.confirmPassword && (
            <span className="text-xs text-red-500">
              * {errors.confirmPassword.message}
            </span>
          )}

          <Form.Button type="submit">Sign Up</Form.Button>
        </Form>
      </div>
    </div>
  )
}

export default Signup
