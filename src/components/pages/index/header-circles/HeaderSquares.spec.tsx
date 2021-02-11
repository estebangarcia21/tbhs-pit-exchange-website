import { render } from "@testing-library/react"
import { HeaderSquares } from "./HeaderSquares"

describe("Header Image", () => {
  it("displays an image of squares with the specified classnames", () => {
    const { getByAltText } = render(<HeaderSquares position="left-96 top-48" />)

    const container = getByAltText("Squares in a grid pattern")

    expect(container).toHaveClass("left-96 top-48")
  })
})
