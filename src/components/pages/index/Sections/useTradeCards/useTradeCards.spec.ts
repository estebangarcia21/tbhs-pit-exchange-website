import { screen } from "@testing-library/react"
import useTradeCards from "."
import { TradeCardData } from "../../TradeCard"

describe("useTradeCards", () => {
  it("renders the specified cards", () => {
    const cards: TradeCardData[] = [
      {
        item: "Bow",
        player: "Stevemmmmm",
        trade: "Hello World!"
      },
      {
        item: "Bow",
        player: "Haberno",
        trade: "Hello World again!"
      }
    ]

    const observerCards = useTradeCards(cards)
  })
})
