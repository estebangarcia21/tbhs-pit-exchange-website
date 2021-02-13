import Index from "pages/index"
import { render } from "@testing-library/react"

describe("Index page", () => {
  it("has the standard footer", () => {
    const { getByTestId } = render(<Index />)

    const footer = getByTestId("std-footer")
    expect(footer).toBeInTheDocument()
  })

  describe("login button", () => {
    it("exists", () => {
      const { getByText } = render(<Index />)

      const loginButton = getByText(/log in/i, { selector: "a" })
      expect(loginButton).toBeInTheDocument()
    })

    it("redirects the user to the login page", () => {
      const { getByText } = render(<Index />)

      const loginButton = getByText(/log in/i, { selector: "a" })
      expect(loginButton).toHaveAttribute("href", "/login")
    })

    it("is white", () => {
      const { getByText } = render(<Index />)

      const loginButton = getByText(/log in/i, { selector: "a" })
      expect(loginButton).toHaveClass("bg-white")
    })
  })

  describe("sign up button", () => {
    it("exists", () => {
      const { getByText } = render(<Index />)

      const signupButton = getByText(/sign up/i, { selector: "a" })
      expect(signupButton).toBeInTheDocument()
    })

    it("redirects the user to the sign up page", () => {
      const { getByText } = render(<Index />)

      const signupButton = getByText(/sign up/i, { selector: "a" })
      expect(signupButton).toHaveAttribute("href", "/signup")
    })

    it("is teal", () => {
      const { getByText } = render(<Index />)

      const signupButton = getByText(/sign up/i, { selector: "a" })
      expect(signupButton).toHaveClass("bg-coolGray-800")
    })
  })
})
