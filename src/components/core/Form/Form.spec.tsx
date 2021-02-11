import { render } from "@testing-library/react"
import { Form, noErrors } from "."

describe("Standard Form", () => {
  it("renders the form title", () => {
    const { getByText } = render(
      <Form title="Title" handleSubmit={jest.fn()}>
        Content
      </Form>
    )

    const title = getByText(/title/i)

    expect(title).toBeInTheDocument()
  })

  describe("Input", () => {
    it("creates an accessible input field", () => {
      const { getByLabelText } = render(
        <Form title="Title" handleSubmit={jest.fn()}>
          <Form.Input htmlFor="email" inRef={undefined}>
            Email
          </Form.Input>
        </Form>
      )

      const input = getByLabelText(/email/i, { selector: "input" })

      expect(input).toBeInTheDocument()
    })

    it("sets text as the default input type", () => {
      const { getByLabelText } = render(
        <Form title="Title" handleSubmit={jest.fn()}>
          <Form.Input htmlFor="email" inRef={undefined}>
            Email
          </Form.Input>
        </Form>
      )

      const input = getByLabelText(/email/i, { selector: "input" })

      expect(input).toHaveAttribute("type", "text")
    })
  })

  describe("Button", () => {
    it("creates a normal button by default", () => {
      const { getByText } = render(
        <Form title="Title" handleSubmit={jest.fn()}>
          <Form.Button>Button</Form.Button>
        </Form>
      )

      const button = getByText(/button/i)

      expect(button).toHaveAttribute("type", "button")
    })

    it("creates a button with the specified type", () => {
      const { getByText } = render(
        <Form title="Title" handleSubmit={jest.fn()}>
          <Form.Button type="submit">Button</Form.Button>
        </Form>
      )

      const button = getByText(/button/i)

      expect(button).toHaveAttribute("type", "submit")
    })
  })

  describe("Error", () => {
    it("shows an error message if the error is not undefined", () => {
      const { getByText } = render(
        <Form title="Title" handleSubmit={jest.fn()}>
          <Form.Error error={{ type: "maxLength", message: "My Error" }} />
        </Form>
      )

      const error = getByText(/my error/i)

      expect(error).toBeInTheDocument()
    })

    it("shows no error message if the error is undefined", () => {
      const { queryByText } = render(
        <Form title="Title" handleSubmit={jest.fn()}>
          <Form.Error error={undefined} />
        </Form>
      )

      const error = queryByText(/my error/i)

      expect(error).toBeNull()
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
