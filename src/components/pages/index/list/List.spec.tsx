import { render } from "@testing-library/react"
import { BiDollarCircle } from "react-icons/bi"
import { List, ListItem } from "./List"

describe("List", () => {
    it("renders its content", () => {
        const { getByText } = render(<List>Content</List>)

        const list = getByText(/content/i)

        expect(list).toBeInTheDocument()
    })

    it("renders a list item with the specified icon", () => {
        const { getByText, getByLabelText } = render(
            <List>
                <ListItem icon={[BiDollarCircle, "dollar"]}>
                    Renders object
                </ListItem>
            </List>
        )

        const listItemByLabelText = getByLabelText(/dollar/i)
        const listItemByText = getByText(/renders object/i)

        expect(listItemByLabelText).toBeInTheDocument()
        expect(listItemByText).toBeInTheDocument()
    })
})
