import Button from "components/pages/index/Button"
import Content from "components/pages/index/Content"
import HeaderSquares from "components/pages/index/HeaderSquares"
import InfoCard from "components/pages/index/InfoCard"
import Image from "next/image"
import { AiFillDollarCircle } from "react-icons/ai"
import { IoIosCheckmarkCircle, IoMdLock } from "react-icons/io"

const Header = () => {
  return (
    <header className="my-16">
      <HeaderSquares position="top-60 left-12" />
      <HeaderSquares position="top-36 right-12" />

      <Content noYPadding className="overflow-hidden">
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

          <div className="hidden lg:block lg:w-1/2 ml-16">
            <div className="relative w-full h-64">
              <Image
                src="/images/index/dashboard.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-2 xl:gap-x-5">
          <InfoCard title="Secure Trading" icon={[IoMdLock, "Gaining money"]}>
            The Pit Exchange verifies that you are not trading with a scammer by
            checking all players across an always up-to-date scammer database.
          </InfoCard>

          <InfoCard
            title="Instant Price Estimates"
            icon={[AiFillDollarCircle, "Watching for trades"]}
          >
            Receive price estimates before you make a trade to ensure that you
            always make the right decision for maximum profit.
          </InfoCard>

          <InfoCard
            title="Verified Middlemen"
            icon={[IoIosCheckmarkCircle, "Checkmark"]}
            spanColumns
          >
            The Pit Exchange verifies the most trusted members of the community
            to middleman through a thorough review process.
          </InfoCard>
        </div>
      </Content>
    </header>
  )
}

export default Header
