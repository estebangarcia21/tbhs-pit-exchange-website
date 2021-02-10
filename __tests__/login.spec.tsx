import { MockedProvider, MockedResponse } from "@apollo/client/testing"
import { fireEvent, render, waitFor } from "@testing-library/react"
import {
    LoginDocument,
    LoginMutation,
    LoginMutationVariables
} from "generated/graphql-types"
import Login from "pages/login"

jest.mock("next/link", () => ({ children }) => children)

describe("login page", () => {
    it("has an email field", () => {
        const { getByLabelText } = render(
            <MockedProvider>
                <Login />
            </MockedProvider>
        )

        const email = getByLabelText(/email/i)

        expect(email).toBeInTheDocument()
    })

    it("has a password field", () => {
        const { getByLabelText } = render(
            <MockedProvider>
                <Login />
            </MockedProvider>
        )

        const password = getByLabelText(/password/i)

        expect(password).toBeInTheDocument()
    })

    it("redirects to the dashboard on successful login", async () => {
        const mockedResponses: MockedResponse[] = [
            {
                request: {
                    query: LoginDocument,
                    variables: {
                        email: "example@email.com",
                        password: "123456"
                    } as LoginMutationVariables
                },
                result: {
                    data: {
                        login: {
                            successful: true
                        }
                    } as LoginMutation
                }
            }
        ]

        const useRouter = jest.spyOn(require("next/router"), "useRouter")
        const routerPush = jest.fn()

        useRouter.mockImplementation(() => ({
            push: routerPush
        }))

        const { getByText, getByLabelText } = render(
            <MockedProvider mocks={mockedResponses}>
                <Login />
            </MockedProvider>
        )

        const email = getByLabelText(/email/i)
        const password = getByLabelText(/password/i)
        const submitButton = getByText(/login/i, { selector: "button" })

        fireEvent.change(email, { target: { value: "example@email.com" } })
        fireEvent.change(password, { target: { value: "123456" } })
        fireEvent.click(submitButton)

        await waitFor(() => {
            expect(routerPush).toHaveBeenCalledWith("/dashboard")
        })
    })

    it("does not redirect to the dashboard on incorrect login and displays the error message", async () => {
        const mockedResponses: MockedResponse[] = [
            {
                request: {
                    query: LoginDocument,
                    variables: {
                        email: "example@email.com",
                        password: "123456"
                    } as LoginMutationVariables
                },
                result: {
                    data: {
                        login: {
                            successful: false,
                            error: {
                                object: "email",
                                message: "Incorrect email."
                            }
                        }
                    } as LoginMutation
                }
            }
        ]

        const useRouter = jest.spyOn(require("next/router"), "useRouter")
        const routerPush = jest.fn()

        useRouter.mockImplementation(() => ({
            push: routerPush
        }))

        const { getByText, getByLabelText } = render(
            <MockedProvider mocks={mockedResponses}>
                <Login />
            </MockedProvider>
        )

        const email = getByLabelText(/email/i)
        const password = getByLabelText(/password/i)
        const submitButton = getByText(/login/i, { selector: "button" })

        fireEvent.change(email, { target: { value: "example@email.com" } })
        fireEvent.change(password, { target: { value: "123456" } })
        fireEvent.click(submitButton)

        await waitFor(() => {
            expect(routerPush).not.toHaveBeenCalledWith("/dashboard")

            const errorMessage = getByText(/incorrect email./i)

            expect(errorMessage).toBeInTheDocument()
        })
    })
})
