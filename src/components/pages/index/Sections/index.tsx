import Button from "components/pages/index/Button"
import Content from "components/pages/index/Content"
import { List, ListItem } from "components/pages/index/List"
import TradeCard, { TradeCardProps } from "components/pages/index/TradeCard"
import Image from "next/image"
import { IconType } from "react-icons"
import { IoIosCheckmarkCircle } from "react-icons/io"
import Children from "utils/children"
import SideText from "./SideText"

const CheckMarkListItem = ({ children }: Children) => {
  const checkmarkIcon: [IconType, string] = [IoIosCheckmarkCircle, ""]

  return <ListItem icon={checkmarkIcon}>{children}</ListItem>
}

const Sections = () => {
  const tradeCards: TradeCardProps[] = [
    {
      item: "Sword",
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
      <Content className="border-t border-coolGray-200 border-dashed py-6">
        <section className="flex flex-row space-x-10 justify-between transform">
          <div className="max-w-lg">
            <h1 className="text-3xl font-semibold text-grayBlue">
              Intelligent Trade Searching
            </h1>

            <p className="my-4 max-w-xl leading-7 text-transparentBlue">
              The days of making your way around discord servers are over.
              Easily search for trades through an easy to use search bar to find
              your next trade. Search by...
            </p>

            <List>
              <CheckMarkListItem>Multiple enchants</CheckMarkListItem>
              <CheckMarkListItem>Player UUID or username</CheckMarkListItem>
              <CheckMarkListItem>Item UUID</CheckMarkListItem>
              <CheckMarkListItem>Pants color</CheckMarkListItem>
            </List>

            <Button href="/login" white>
              Search for your next trade
            </Button>
          </div>

          <div className="relative w-1/2 h-72">
            <Image
              src="/images/index/search.png"
              layout="fill"
              objectFit="contain"
              alt="Searching for items"
            />
          </div>
        </section>
      </Content>

      <section
        className="py-20 relative z-10 mb-40"
        style={{
          backgroundColor: "#f5f6fa"
        }}
      >
        <Content>
          <h1 className="font-semibold text-4xl text-grayBlue">
            A Realtime Business Platform
          </h1>

          <p className="my-1 text-transparentBlue">
            Receive notifications when a trade or similar trade that you are
            looking for is created.
          </p>

          <div className="flex flex-row overflow-hidden space-x-5 my-4">
            {tradeCards.map(props => (
              <TradeCard {...props} key={props.player} />
            ))}
          </div>
        </Content>
      </section>

      <Content>
        <div className="flex flex-row">
          <div>
            <h1 className="font-semibold text-grayBlue text-4xl">
              A Powerful SDK
            </h1>

            <p className="my-1 text-transparentBlue">
              Utilize a powerful public-facing GraphQL API to power your next
              project.
            </p>
          </div>

          <div className="w-full max-w-2xl h-64 shadow-lg rounded-sm overflow-hidden">
            <div className="h-12 bg-indigo-500" />

            <div className="p-2">
              <code className="text-sm whitespace-pre">
                {`const api = require(@the-pit-exchange/sdk)("3203802-3200002394");\n\napi.onEvent("Trade", function(err, data) {\n\tconsole.log("Great!")\n}); `}
              </code>
            </div>
          </div>
        </div>
      </Content>

      <Content className="py-20 border-t border-coolGray-200 border-dashed">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 className="font-semibold text-grayBlue text-4xl">
              Ready to Get Started?
            </h1>

            <Button href="/signup">Sign Up for an Account</Button>
          </div>

          <div className="grid grid-cols-1 gap-y-8 md:gap-y-0 md:grid-cols-2 mt-10 lg:mt-0">
            <SideText title="Sign Up For Free">
              No special requirements are needed to sign up. However, a{" "}
              <span className="text-indigo-500">verified mineraft account</span>{" "}
              is required to be able to trade.
            </SideText>

            <SideText title="Leave Anytime">
              Leaving the Pit or unsatisfied with The Pit Exchange? Close your
              accout at anytime without consequence.
            </SideText>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default Sections
