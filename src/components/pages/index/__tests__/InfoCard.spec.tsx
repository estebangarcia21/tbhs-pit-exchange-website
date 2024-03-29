import { render } from "@testing-library/react"
import { BiDollarCircle } from "react-icons/bi"
import InfoCard from "../InfoCard"

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

  it("spans no columns if spanColumns is false", () => {
    const { getByText } = render(
      <InfoCard title="Card Title" icon={[BiDollarCircle, "Alt Text"]}>
        Hello World!
      </InfoCard>
    )

    const container = getByText("Hello World!").parentElement

    expect(container).not.toHaveClass("md:col-span-2")
  })

  it("spans two columns if spanColumns is true", () => {
    const { getByText } = render(
      <InfoCard
        title="Card Title"
        spanColumns
        icon={[BiDollarCircle, "Alt Text"]}
      >
        Hello World!
      </InfoCard>
    )

    const container = getByText("Hello World!").parentElement

    expect(container).toHaveClass("md:col-span-2")
  })
})
