import { render } from "@testing-library/react"
import Footer from "."

describe("Footer", () => {
  describe("community section", () => {
    it("exists", () => {
      const { getByText } = render(<Footer />)

      const header = getByText("Community")

      expect(header).toBeInTheDocument()
    })

    it("has a support link", () => {
      const { getByText } = render(<Footer />)

      const { parentElement } = getByText("Community")
      const link = parentElement.children[1]

      expect(link.textContent).toBe("Support")
      expect(link.firstChild).toHaveAttribute("href", "/support")
    })

    it("has a community guidelines link", () => {
      const { getByText } = render(<Footer />)

      const { parentElement } = getByText("Community")
      const link = parentElement.children[2]

      expect(link.textContent).toBe("Community Guidelines")
      expect(link.firstChild).toHaveAttribute("href", "/community-guidelines")
    })

    it("has a discord link", () => {
      const { getByText } = render(<Footer />)

      const { parentElement } = getByText("Community")
      const link = parentElement.children[3]

      expect(link.textContent).toBe("Discord")
      expect(link.firstChild).toHaveAttribute("href", "/social-media")
    })
  })

  describe("legal section", () => {
    it("exists", () => {
      const { getByText } = render(<Footer />)

      const header = getByText("Legal")

      expect(header).toBeInTheDocument()
    })

    it("has an account security link", () => {
      const { getByText } = render(<Footer />)

      const { parentElement } = getByText("Legal")
      const link = parentElement.children[1]

      expect(link.textContent).toBe("Account Security")
      expect(link.firstChild).toHaveAttribute("href", "/account-security")
    })

    it("has a cookie policy link", () => {
      const { getByText } = render(<Footer />)

      const { parentElement } = getByText("Legal")
      const link = parentElement.children[2]

      expect(link.textContent).toBe("Cookie Policy")
      expect(link.firstChild).toHaveAttribute("href", "/cookie-policy")
    })

    it("has a terms of service link", () => {
      const { getByText } = render(<Footer />)

      const { parentElement } = getByText("Legal")
      const link = parentElement.children[3]

      expect(link.textContent).toBe("Donations")
      expect(link.firstChild).toHaveAttribute("href", "/donate")
    })
  })

  describe("company section", () => {
    it("exists", () => {
      const { getByText } = render(<Footer />)

      const header = getByText("Company")

      expect(header).toBeInTheDocument()
    })

    it("has a stevemmmmm link", () => {
      const { getByText } = render(<Footer />)

      const { parentElement } = getByText("Company")
      const link = parentElement.children[1]

      expect(link.textContent).toBe("Stevemmmmm")
      expect(link.firstChild).toHaveAttribute("href", "/company/stevemmmmm")
    })

    it("has a the blue hats link", () => {
      const { getByText } = render(<Footer />)

      const { parentElement } = getByText("Company")
      const link = parentElement.children[2]

      expect(link.textContent).toBe("The Blue Hats")
      expect(link.firstChild).toHaveAttribute("href", "/company/the-blue-hats")
    })

    it("has a terms of service link", () => {
      const { getByText } = render(<Footer />)

      const { parentElement } = getByText("Company")
      const link = parentElement.children[3]

      expect(link.textContent).toBe("Terms of Service")
      expect(link.firstChild).toHaveAttribute("href", "/terms-of-service")
    })
  })
})
