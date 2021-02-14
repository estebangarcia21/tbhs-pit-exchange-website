import { render } from "@testing-library/react"
import { BiDollarCircle } from "react-icons/bi"
import { List, ListItemWithIcon } from "../List"

describe("List", () => {
  it("renders its content", () => {
    const { getByText } = render(<List>Content</List>)

    const list = getByText(/content/i)

    expect(list).toBeInTheDocument()
  })

  it("renders a list item with the specified icon", () => {
    const { getByText, getByLabelText } = render(
      <List>
        <ListItemWithIcon icon={[BiDollarCircle, "dollar"]}>
          Renders object
        </ListItemWithIcon>
      </List>
    )

    const listItemByLabelText = getByLabelText(/dollar/i)
    const listItemByText = getByText(/renders object/i)

    expect(listItemByLabelText).toBeInTheDocument()
    expect(listItemByText).toBeInTheDocument()
  })
})
