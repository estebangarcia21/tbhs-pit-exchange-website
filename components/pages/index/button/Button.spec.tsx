import Router, { NextRouter } from "next/router"
import { render, fireEvent } from "@testing-library/react"
import { Button } from "./Button"

export const mockRouter: NextRouter = {
    basePath: "",
    pathname: "/",
    route: "/",
    asPath: "/",
    query: {},
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined), // This one fixed it for me
    beforePopState: jest.fn(),
    events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
    },
    isFallback: false,
}

describe("Button", () => {
    it("renders a button with the child text", () => {
        const { getByText } = render(<Button href="/">Hello World!</Button>)

        const text = getByText("Hello World!")

        expect(text.textContent).toBe("Hello World!")
    })

    it("has a teal background if white is equal to false", () => {
        const { getByText } = render(<Button href="/">Hello World!</Button>)

        const tealButton = getByText("Hello World!")

        expect(tealButton).toHaveClass("bg-teal-500")
    })

    it("is has a white background if white is equal to true", () => {
        const { getByText } = render(
            <Button href="/" white>
                Hello World!
            </Button>
        )

        const whiteButton = getByText("Hello World!")

        expect(whiteButton).toHaveClass("bg-white")
    })

    it("has the specified href", () => {
        const { getByText } = render(
            <Button href="/" white>
                Hello World!
            </Button>
        )

        const whiteButton = getByText("Hello World!", { selector: "a" })

        expect(whiteButton).toHaveAttribute("href", "/")
    })
})
