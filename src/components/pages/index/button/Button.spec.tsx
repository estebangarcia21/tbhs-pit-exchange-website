import { render } from "@testing-library/react"
import { Button } from "./Button"

describe("Button", () => {
    it("renders a button with the child text", () => {
        const { getByText } = render(<Button href="/">Hello World!</Button>)

        const text = getByText(/hello world!/i)

        expect(text.textContent).toBe("Hello World! ")
    })

    it("has a gray background if white is equal to false", () => {
        const { getByText } = render(<Button href="/">Hello World!</Button>)

        const tealButton = getByText(/hello world!/i)

        expect(tealButton).toHaveClass("bg-coolGray-800")
    })

    it("is has a white background if white is equal to true", () => {
        const { getByText } = render(
            <Button href="/" white>
                Hello World!
            </Button>
        )

        const whiteButton = getByText(/hello world!/i)

        expect(whiteButton).toHaveClass("bg-white")
    })

    it("has the specified href", () => {
        const { getByText } = render(<Button href="/">Hello World!</Button>)

        const tealButton = getByText(/hello world!/i, { selector: "a" })

        expect(tealButton).toHaveAttribute("href", "/")
    })
})
