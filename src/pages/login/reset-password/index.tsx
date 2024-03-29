import { useApolloClient } from "@apollo/client"
import {
  emailValidationRule,
  noErrors,
  requiredFieldValidation,
  Form
} from "components/lib/Form"
import {
  ResetPasswordDocument,
  ResetPasswordMutation,
  ResetPasswordMutationVariables
} from "generated/graphql-types"
import Head from "next/head"
import { useState } from "react"
import { useForm } from "react-hook-form"

interface FormInputs {
  email: string
}

const ForgotPassword = () => {
  const client = useApolloClient()

  const { handleSubmit, register, errors } = useForm<FormInputs>()
  const [submitResult, setSubmitResult] = useState<ResetPasswordMutation>()

  const onSubmit = async ({ email }: FormInputs) => {
    const { data } = await client.mutate<
      ResetPasswordMutation,
      ResetPasswordMutationVariables
    >({
      mutation: ResetPasswordDocument,
      variables: {
        email
      }
    })

    setSubmitResult(data)
  }

  return (
    <div>
      <Head>
        <title>Reset Password</title>
      </Head>

      <main>
        <div className="mx-auto max-w-xl">
          <Form title="Reset Password" handleSubmit={handleSubmit(onSubmit)}>
            <span>
              Enter your email that you used to register. We will send you an
              email with a link to reset your password.
            </span>

            <Form.Input
              htmlFor="email"
              inRef={register({
                ...requiredFieldValidation,
                pattern: emailValidationRule
              })}
            >
              Email
            </Form.Input>

            {submitResult?.resetPassword.successful && noErrors(errors) ? (
              <span className="text-xs text-green-700">
                Success! Check your email for further instructions.
              </span>
            ) : (
              submitResult &&
              submitResult.resetPassword.successful && (
                <span className="text-xs text-red-500">
                  * {submitResult?.resetPassword.errorMessage}
                </span>
              )
            )}

            {errors.email && (
              <span className="text-xs text-red-500">
                * {errors.email.message}
              </span>
            )}

            <Form.Button type="submit">Send Reset Email</Form.Button>
          </Form>
        </div>
      </main>
    </div>
  )
}

export default ForgotPassword
