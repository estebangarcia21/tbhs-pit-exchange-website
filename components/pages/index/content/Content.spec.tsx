import { render } from "@testing-library/react"
import { Content } from "./Content"

describe("Content", () => {
    it("renders its children", () => {
        const { getByText } = render(<Content>Hello World!</Content>)

        const content = getByText("Hello World!")

        expect(content).toBeInTheDocument()
    })

    it("has x padding if noXPadding is equal to false", () => {
        const { getByText } = render(<Content>Hello World!</Content>)

        const content = getByText("Hello World!")

        expect(content).toHaveClass("px-4 md:px-16")
    })

    it("has no x padding if noXPadding is equal to true", () => {
        const { getByText } = render(<Content noXPadding>Hello World!</Content>)

        const content = getByText("Hello World!")

        expect(content).not.toHaveClass("px-4 md:px-16")
    })
})
