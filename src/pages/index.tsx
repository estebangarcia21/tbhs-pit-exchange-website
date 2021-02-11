import { Footer } from "components/global/footer/Footer"
import { Button } from "components/pages/index/button/Button"
import { Content } from "components/pages/index/content/Content"
import { VerticalDivider } from "components/pages/index/Dividers"
import { HeaderSquares } from "components/pages/index/header-circles/HeaderSquares"
import { InfoCard } from "components/pages/index/info-card/InfoCard"
import { List, ListItem } from "components/pages/index/list/List"
import {
  TradeCard,
  TradeCardProps
} from "components/pages/index/trade-card/TradeCard"
import Head from "next/head"
import Image from "next/image"
import React from "react"
import { IconType } from "react-icons"
import { AiFillDollarCircle } from "react-icons/ai"
import { BsFillEyeFill } from "react-icons/bs"
import { IoIosCheckmarkCircle } from "react-icons/io"

const Index = () => {
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
      <Head>
        <title>The Pit Exchange</title>
      </Head>

      <main>
        <HeaderSquares position="top-80 left-12" />
        <HeaderSquares position="top-24 right-12" />

        <Content>
          <div className="px-4 md:px-0 overflow-hidden">
            <div className="flex flex-row items-center mt-14">
              <div className="text-left text-coolGray-800 md:text-left max-w-xl lg:w-1/2">
                <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">
                  Connecting the{" "}
                  <span className="text-indigo-500">Hypixel Pit's Economy</span>
                </h1>

                <h2 className="mt-5 font-semibold text-md sm:text-xl font-base text-coolGray-700">
                  The Pit Exchange is a trading service for the community of the
                  Hypixel Pit
                </h2>

                <div className="flex flex-row flex-wrap space-x-7">
                  <Button href="/signup">Sign Up</Button>
                  <Button href="/login" white>
                    Log In
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block lg:w-1/2 ml-16"></div>
            </div>

            <div className="my-12 flex flex-row mx-auto xl:justify-between flex-wrap max-w-3xl xl:max-w-none">
              <InfoCard
                title="Watch"
                icon={[BsFillEyeFill, "Watching for trades"]}
              >
                Watch for trade requests and offers in realtime. Maximize your
                potential profit by monitoring the market from a simple and
                intutive dashboard.
              </InfoCard>

              <VerticalDivider />

              <InfoCard
                title="Trade"
                icon={[AiFillDollarCircle, "Gaining money"]}
              >
                Easily make trades by searching for open trades or by offering
                for an item that a player has. Utilize a powerful search tool to
                find your next trade.
              </InfoCard>

              <VerticalDivider />

              <InfoCard
                title="Repeat"
                icon={[IoIosCheckmarkCircle, "Repeating"]}
              >
                The Pit Exchange takes care of all your trading business in one
                place. Trade without the burden of having to search through
                countless discord servers.
              </InfoCard>
            </div>
          </div>
        </Content>

        <div className="bg-white mt-10">
          {/* <div className="bg-gradient-to-br from-lightBlue-50 via-rose-50 to-orange-50 mt-10"> */}
          <Content>
            <div className="flex flex-row justify-center space-x-10">
              <div className="max-w-lg">
                <h1 className="text-3xl text-coolGray-800 font-semibold">
                  Intelligent Trade Searching
                </h1>

                <p className="my-4 max-w-xl text-coolGray-600 leading-6">
                  The days of making your way around discord servers are over.
                  Easily search for trades through an easy to use search bar to
                  find your next trade. Search by...
                </p>

                <List>
                  <ListItem icon={checkmarkIcon}>Multiple enchants</ListItem>
                  <ListItem icon={checkmarkIcon}>
                    Player UUID or username
                  </ListItem>
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
            </div>
          </Content>
        </div>

        <div className="my-10">
          <h1 className="font-bold text-3xl text-center">
            Realtime Market Streaming
          </h1>

          <div className="flex flex-row justify-center overflow-hidden">
            {tradeCards.map(props => (
              <TradeCard {...props} />
            ))}
          </div>
        </div>

        <Footer />
      </main>
    </div>
  )
}

export default Index
