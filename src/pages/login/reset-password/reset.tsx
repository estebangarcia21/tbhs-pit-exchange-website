import {
  passwordValidation,
  requiredFieldValidation,
  Form
} from "components/core/Form"
import Head from "next/head"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"

interface FormInputs {
  password: string
  confirmPassword: string
}

const Reset = () => {
  const { handleSubmit, register, errors } = useForm<FormInputs>()

  const router = useRouter()
  const { token } = router.query

  const onSubmit = ({ password, confirmPassword }: FormInputs) => {}

  return (
    <div>
      <Head>
        <title>Reset Password</title>
      </Head>

      <main>
        <div className="mx-auto max-w-xl">
          <Form title="Reset Password" handleSubmit={handleSubmit(onSubmit)}>
            <Form.Input
              htmlFor="password"
              type="password"
              inRef={register({
                ...requiredFieldValidation,
                ...passwordValidation
              })}
            >
              New Password
            </Form.Input>

            {errors.password && (
              <span className="text-xs text-red-500">
                * {errors.password.message}
              </span>
            )}

            <Form.Input
              htmlFor="confirmPassword"
              type="password"
              inRef={register({
                ...requiredFieldValidation,
                ...passwordValidation
              })}
            >
              Confirm Password
            </Form.Input>

            {errors.confirmPassword && (
              <span className="text-xs text-red-500">
                * {errors.confirmPassword.message}
              </span>
            )}

            <Form.Button type="submit">Reset Password</Form.Button>
          </Form>
        </div>
      </main>
    </div>
  )
}

export default Reset
