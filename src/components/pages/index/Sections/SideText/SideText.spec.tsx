import { render } from "@testing-library/react"
import SideText from "."

describe("SideText", () => {
  it("renders the title", () => {
    const { getByText } = render(<SideText title="Title">Content</SideText>)

    const sideText = getByText(/title/i)

    expect(sideText).toBeInTheDocument()
  })

  it("renders the children", () => {
    const { getByText } = render(<SideText title="Title">Content</SideText>)

    const sideText = getByText(/content/i)

    expect(sideText).toBeInTheDocument()
  })
})
