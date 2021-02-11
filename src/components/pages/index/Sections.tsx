import { Button } from "components/pages/index/Button"
import { Content } from "components/pages/index/Content"
import { List, ListItem } from "components/pages/index/List"
import { TradeCard, TradeCardProps } from "components/pages/index/TradeCard"
import Image from "next/image"
import { IconType } from "react-icons"
import { IoIosCheckmarkCircle } from "react-icons/io"

export const Sections = () => {
  const checkmarkIcon: [IconType, string] = [IoIosCheckmarkCircle, "checkmark"]

  const tradeCards: TradeCardProps[] = [
    {
      item: "Leggings",
      player: "Stevemmmmm",
      trade: "Does anyone have a Gamble 2 Executioner 2?"
    },
    {
      item: "Leggings",
      player: "Haberno",
      trade: "Im looking for Moctezuma pants!"
    }
  ]

  return (
    <div>
      <Content>
        <section className="flex flex-row justify-center space-x-10">
          <div className="max-w-lg">
            <h1 className="text-3xl text-coolGray-800 font-semibold">
              Intelligent Trade Searching
            </h1>

            <p className="my-4 max-w-xl text-coolGray-600 leading-6">
              The days of making your way around discord servers are over.
              Easily search for trades through an easy to use search bar to find
              your next trade. Search by...
            </p>

            <List>
              <ListItem icon={checkmarkIcon}>Multiple enchants</ListItem>
              <ListItem icon={checkmarkIcon}>Player UUID or username</ListItem>
              <ListItem icon={checkmarkIcon}>Item UUID</ListItem>
              <ListItem icon={checkmarkIcon}>Pants color</ListItem>
            </List>

            <Button href="/login" white>
              Search for your next trade
            </Button>
          </div>

          <div className="w-64 h-64 relative">
            <Image
              src="/images/index/search.svg"
              layout="fill"
              alt="Searching"
            />
          </div>
        </section>
      </Content>

      <section className="my-10">
        <h1 className="font-bold text-3xl text-center">
          Realtime Market Streaming
        </h1>

        <div className="flex flex-row justify-center overflow-hidden">
          {tradeCards.map(props => (
            <TradeCard {...props} key={props.player} />
          ))}
        </div>
      </section>
    </div>
  )
}
