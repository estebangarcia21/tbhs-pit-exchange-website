import { render } from "@testing-library/react"
import TradeCard from "."

describe("TradeCard", () => {
  it("renders the title", () => {
    const { getByText } = render(
      <TradeCard player="Stevemmmmm" trade="Moct pants" item="Leggings" />
    )

    const card = getByText(/stevemmmmm/i)

    expect(card).toBeInTheDocument()
  })

  it("renders the trade", () => {
    const { getByText } = render(
      <TradeCard player="Stevemmmmm" trade="Moct pants" item="Leggings" />
    )

    const card = getByText(/moct pants/i)

    expect(card).toBeInTheDocument()
  })

  it("renders a the item image", () => {
    const { getByAltText } = render(
      <TradeCard player="Stevemmmmm" trade="Moct pants" item="Leggings" />
    )

    const card = getByAltText(/leggings/i)

    expect(card).toBeInTheDocument()
  })
})
