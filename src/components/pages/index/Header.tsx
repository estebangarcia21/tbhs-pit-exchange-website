import Button from "components/pages/index/Button"
import Content from "components/pages/index/Content"
import HeaderSquares from "components/pages/index/HeaderSquares"
import InfoCard from "components/pages/index/InfoCard"
import { AiFillDollarCircle } from "react-icons/ai"
import { BsFillEyeFill } from "react-icons/bs"
import { IoIosCheckmarkCircle } from "react-icons/io"

const Header = () => {
  return (
    <header className="my-16">
      <HeaderSquares position="top-60 left-12" />
      <HeaderSquares position="top-36 right-12" />

      <Content noYPadding className="px-4 md:px-0 overflow-hidden">
        <div className="flex flex-row items-center">
          <div className="max-w-xl lg:w-1/2">
            <h1 className="font-semibold text-4xl sm:text-5xl lg:text-5xl text-grayBlue">
              Connecting the <br />
              Hypixel Pit&apos;s Economy
            </h1>

            <h2 className="mt-5 font-medium text-md sm:text-xl font-base text-coolGray-700">
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

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-2 xl:gap-x-5">
          <InfoCard title="Watch" icon={[BsFillEyeFill, "Watching for trades"]}>
            Watch for trade requests and offers in realtime. Maximize your
            potential profit by monitoring the market from a simple and intutive
            dashboard.
          </InfoCard>

          <InfoCard title="Trade" icon={[AiFillDollarCircle, "Gaining money"]}>
            Easily make trades by searching for open trades or by offering for
            an item that a player has. Utilize a powerful search tool to find
            your next trade.
          </InfoCard>

          <InfoCard
            title="Repeat"
            icon={[IoIosCheckmarkCircle, "Repeating"]}
            spanColumns
          >
            The Pit Exchange takes care of all your trading business in one
            place. Trade without the burden of having to search through
            countless discord servers.
          </InfoCard>
        </div>
      </Content>
    </header>
  )
}

export default Header
