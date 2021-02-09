import { render } from "@testing-library/react"
import { Footer } from "./Footer"

describe("Footer", () => {
    describe("community section", () => {
        it("exists", () => {
            const { getByText } = render(<Footer />)

            const header = getByText("Community")

            expect(header).toBeInTheDocument
        })

        it("has a support link", () => {
            const { getByText } = render(<Footer />)

            const { parentElement } = getByText("Community")

            expect(parentElement.children[1].textContent).toBe("Support")
        })

        it("has a community guidelines link", () => {
            const { getByText } = render(<Footer />)

            const { parentElement } = getByText("Community")

            expect(parentElement.children[2].textContent).toBe(
                "Community Guidelines"
            )
        })

        it("has a discord link", () => {
            const { getByText } = render(<Footer />)

            const { parentElement } = getByText("Community")

            expect(parentElement.children[3].textContent).toBe("Discord")
        })
    })

    describe("legal section", () => {
        it("exists", () => {
            const { getByText } = render(<Footer />)

            const header = getByText("Legal")

            expect(header).toBeInTheDocument
        })

        it("has an account security link", () => {
            const { getByText } = render(<Footer />)

            const { parentElement } = getByText("Legal")

            expect(parentElement.children[1].textContent).toBe(
                "Account Security"
            )
        })

        it("has a cookie policy link", () => {
            const { getByText } = render(<Footer />)

            const { parentElement } = getByText("Legal")

            expect(parentElement.children[2].textContent).toBe("Cookie Policy")
        })

        it("has a terms of service link", () => {
            const { getByText } = render(<Footer />)

            const { parentElement } = getByText("Legal")

            expect(parentElement.children[3].textContent).toBe("Donations")
        })
    })

    describe("company section", () => {
        it("exists", () => {
            const { getByText } = render(<Footer />)

            const header = getByText("Company")

            expect(header).toBeInTheDocument
        })

        it("has a stevemmmmm link", () => {
            const { getByText } = render(<Footer />)

            const { parentElement } = getByText("Company")

            expect(parentElement.children[1].textContent).toBe("Stevemmmmm")
        })

        it("has a the blue hats link", () => {
            const { getByText } = render(<Footer />)

            const { parentElement } = getByText("Company")

            expect(parentElement.children[2].textContent).toBe("The Blue Hats")
        })

        it("has a terms of service link", () => {
            const { getByText } = render(<Footer />)

            const { parentElement } = getByText("Company")

            expect(parentElement.children[3].textContent).toBe(
                "Terms of Service"
            )
        })
    })
})
