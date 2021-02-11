import { render } from "@testing-library/react"
import Navbar from "."

describe("Navbar", () => {
  it("has a mystic searcher link", () => {
    const { getByText } = render(<Navbar />)

    const navbar = getByText(/mystic searcher/i, { selector: "a" })
    expect(navbar).toHaveAttribute("href", "/mystic-searcher")
  })

  it("has a real time market link", () => {
    const { getByText } = render(<Navbar />)

    const navbar = getByText(/real time market/i, { selector: "a" })
    expect(navbar).toHaveAttribute("href", "/realtime")
  })
})
