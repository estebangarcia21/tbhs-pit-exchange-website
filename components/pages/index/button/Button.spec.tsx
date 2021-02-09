import { render } from "@testing-library/react"
import { Button } from "./Button"

describe("Button", () => {
    it("renders a button with the child text", () => {
        const { getByText } = render(<Button href="/">Hello World!</Button>)

        const text = getByText("Hello World!", { selector: "a" })

        expect(text).toBeInTheDocument
        expect(text.textContent).toBe("Hello World!")
    })

    it("is teal if the white prop is equal to false", () => {
        const { getByText } = render(<Button href="/">Hello World!</Button>)

        const tealButton = getByText("Hello World!")

        expect(tealButton).toHaveClass("bg-teal-500")
    })

    it("is white if the white is equal to true true", () => {
        const { getByText } = render(
            <Button href="/" white>
                Hello World!
            </Button>
        )

        const whiteButton = getByText("Hello World!")

        expect(whiteButton).toHaveClass("bg-white")
    })
})
