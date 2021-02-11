import { render } from "@testing-library/react"
import { StandardForm, noErrors } from "./StandardForm"

describe("Standard Form", () => {
  it("renders the form title", () => {
    const { getByText } = render(
      <StandardForm title="Title" handleSubmit={jest.fn()}>
        Content
      </StandardForm>
    )

    const title = getByText(/title/i)

    expect(title).toBeInTheDocument()
  })

  it("creates an accessible input field", () => {
    const { getByLabelText } = render(
      <StandardForm title="Title" handleSubmit={jest.fn()}>
        <StandardForm.Input htmlFor="email" inRef={undefined} type="text">
          Email
        </StandardForm.Input>
      </StandardForm>
    )

    const input = getByLabelText(/email/i, { selector: "input" })

    expect(input).toBeInTheDocument()
  })

  describe("Button", () => {
    it("creates a normal button by default", () => {
      const { getByText } = render(
        <StandardForm title="Title" handleSubmit={jest.fn()}>
          <StandardForm.Button>Button</StandardForm.Button>
        </StandardForm>
      )

      const button = getByText(/button/i)

      expect(button).toHaveAttribute("type", "button")
    })

    it("creates a button with the specified type", () => {
      const { getByText } = render(
        <StandardForm title="Title" handleSubmit={jest.fn()}>
          <StandardForm.Button type="submit">Button</StandardForm.Button>
        </StandardForm>
      )

      const button = getByText(/button/i)

      expect(button).toHaveAttribute("type", "submit")
    })
  })

  describe("Error", () => {
    it("shows an error message if the error is not undefined", () => {
      const { getByText } = render(
        <StandardForm title="Title" handleSubmit={jest.fn()}>
          <StandardForm.Error
            error={{ type: "maxLength", message: "My Error" }}
          />
        </StandardForm>
      )

      const error = getByText(/my error/i)

      expect(error).toBeInTheDocument()
    })

    it("calculuates if there are errors on a react hook form", () => {
      interface FormInputs {
        email: string
        password: string
      }

      expect(
        noErrors<FormInputs>({ email: null, password: null })
      ).toBeTruthy()

      expect(
        noErrors<FormInputs>({
          email: {
            type: "max"
          },
          password: null
        })
      ).toBeFalsy()

      expect(
        noErrors<FormInputs>({
          email: {
            type: "max"
          },
          password: {
            type: "max"
          }
        })
      ).toBeFalsy()
    })
  })
})
