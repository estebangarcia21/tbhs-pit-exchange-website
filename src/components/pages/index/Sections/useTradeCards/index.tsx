import TradeCard, { TradeCardData } from "components/pages/index/TradeCard"
import { useState } from "react"
import { useInView, InView } from "react-intersection-observer"

export interface ObservableCard {
  ref: (node?: Element) => void
  inView: boolean
  card: TradeCardData
}

const TradeCards = ({ cards }: { cards: TradeCardData[] }) => {
  const [oCards, setObservableCards] = useState(cards)

  return (
    <>
      {oCards.map(card => (
        <InView
          initialInView
          trackVisibility
          onChange={(inView, _) => {
            console.log(inView)
            console.log(inView)
            if (inView) return

            const newCards = oCards
            newCards.push(newCards[0])
            newCards.splice(1)

            setObservableCards(oCards)
          }}
          key={card.trade}
        >
          {({ ref }) => <TradeCard {...card} cardRef={ref} />}
        </InView>
      ))}
    </>
  )
}

export default TradeCards
