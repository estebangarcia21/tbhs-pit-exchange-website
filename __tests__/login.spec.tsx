import { render, fireEvent } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"
import Login from "pages/login"

describe("login page", () => {
    it("has an email field", () => {
        const { getByLabelText } = render(
            <MockedProvider mocks={[]}>
                <Login />
            </MockedProvider>
        )

        const email = getByLabelText(/email/i)

        expect(email).toBeInTheDocument()
    })

    it("has a password field", () => {
        const { getByLabelText } = render(
            <MockedProvider mocks={[]}>
                <Login />
            </MockedProvider>
        )

        const password = getByLabelText(/password/i)

        expect(password).toBeInTheDocument()
    })

    it("sends a login request on submit", () => {
        // jest.mock("utils/server-client", () => ({
        //     serverClient: {
        //         request: jest.fn()
        //     }
        // }))
        // const { getByText, getByLabelText } = render(<Login />)
        // const email = getByLabelText(/email/i)
        // const password = getByLabelText(/password/i)
        // const submitButton = getByText(/login/i, { selector: "button" })
        // fireEvent.change(email, { target: { value: "example@email.com" } })
        // fireEvent.change(password, { target: { value: "123456" } })
        // fireEvent.click(submitButton, { button: 1 })
    })
})
