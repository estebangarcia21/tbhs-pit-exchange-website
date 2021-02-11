import { render } from "@testing-library/react"
import { BiDollarCircle } from "react-icons/bi"
import InfoCard from "."

describe("InfoCard", () => {
  it("renders the title", () => {
    const { getByText } = render(
      <InfoCard title="Card Title" icon={[BiDollarCircle, "Aria Text"]}>
        Hello World!
      </InfoCard>
    )

    const title = getByText("Card Title")

    expect(title).toBeInTheDocument()
  })

  it("renders the children", () => {
    const { getByText } = render(
      <InfoCard title="Card Title" icon={[BiDollarCircle, "Aria Text"]}>
        Hello World!
      </InfoCard>
    )

    const text = getByText("Hello World!")

    expect(text).toBeInTheDocument()
  })

  it("renders two icons", () => {
    const { getAllByLabelText } = render(
      <InfoCard title="Card Title" icon={[BiDollarCircle, "Aria Text"]}>
        Hello World!
      </InfoCard>
    )

    const icons = getAllByLabelText("Aria Text")

    expect(icons.length).toBe(2)
  })
})
