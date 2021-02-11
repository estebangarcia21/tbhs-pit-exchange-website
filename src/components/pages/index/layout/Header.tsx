import { HeaderSquares } from "components/pages/index/header-circles/HeaderSquares"
import { Button } from "components/pages/index/button/Button"
import { Content } from "components/pages/index/content/Content"
import { VerticalDivider } from "components/pages/index/Dividers"
import { InfoCard } from "components/pages/index/info-card/InfoCard"
import { AiFillDollarCircle } from "react-icons/ai"
import { BsFillEyeFill } from "react-icons/bs"
import { IoIosCheckmarkCircle } from "react-icons/io"

export const Header = () => {
  return (
    <>
      <HeaderSquares position="top-80 left-12" />
      <HeaderSquares position="top-24 right-12" />3
      <Content>
        <header className="px-4 md:px-0 overflow-hidden">
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
              Easily make trades by searching for open trades or by offering for
              an item that a player has. Utilize a powerful search tool to find
              your next trade.
            </InfoCard>

            <VerticalDivider />

            <InfoCard title="Repeat" icon={[IoIosCheckmarkCircle, "Repeating"]}>
              The Pit Exchange takes care of all your trading business in one
              place. Trade without the burden of having to search through
              countless discord servers.
            </InfoCard>
          </div>
        </header>
      </Content>
    </>
  )
}
