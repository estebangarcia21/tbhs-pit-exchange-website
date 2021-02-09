import { render } from "@testing-library/react"
import { StandardForm } from "./StandardForm"

describe("Standard Form", () => {
    it("has leaves a form inpuit", () => {
        const { getByLabelText } = render(
            <StandardForm title="Test Form" handleSubmit={() => {}}>
                Content
            </StandardForm>
        )

        // const email = getByLabelText("email")

        // expect(email).toBeInTheDocument()
    })
})
