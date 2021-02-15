import { Header, Text } from "components/lib/Typography"
import Button from "components/pages/index/Button"
import Content from "components/pages/index/Content"
import { List, ListItemWithIcon } from "components/pages/index/List"
import Image from "next/image"
import React from "react"
import { IconType } from "react-icons"
import { IoIosCheckmarkCircle } from "react-icons/io"
import Children from "utils/children"
import Code from "./section-utils/Code"
import SideText from "./SideText"

const CheckMarkListItem = ({ children }: Children) => {
  const checkmarkIcon: [IconType, string] = [IoIosCheckmarkCircle, ""]

  return <ListItemWithIcon icon={checkmarkIcon}>{children}</ListItemWithIcon>
}

const Sections = () => {
  return (
    <>
      <Content className="border-t border-coolGray-200 border-dashed">
        <div className="flex flex-row justify-between space-x-10">
          <div className="lg:w-1/2 pr-5">
            <Header>Effortless Trade Discovery</Header>

            <Text>
              No more hassling through discord servers to find your next trade.
              Search for trades through a powerful search bar that is fully
              customizable. Search by...
            </Text>

            <List>
              <CheckMarkListItem>Multiple enchants</CheckMarkListItem>
              <CheckMarkListItem>Player UUID or username</CheckMarkListItem>
              <CheckMarkListItem>Item UUID</CheckMarkListItem>
              <CheckMarkListItem>Pants color</CheckMarkListItem>
            </List>
          </div>

          <div className="hidden lg:block relative w-1/2">
            <Image
              src="/images/index/search.svg"
              layout="fill"
              objectFit="contain"
              alt="Searching for items"
            />
          </div>
        </div>
      </Content>

      <Content className="relative z-10 bg-grayBlueTint">
        <div className="flex flex-row justify-between space-x-10">
          <div className="hidden lg:block relative w-1/2">
            <Image
              src="/images/index/growth.svg"
              layout="fill"
              objectFit="contain"
              alt="Searching for items"
            />
          </div>

          <div className="w-1/2">
            <Header>Total Player and Item Worth Caluclator</Header>

            <Text>
              View your worth as a player based on the{" "}
              <strong>Player Value Index</strong>, a measurement of a players
              value based on the contents of their inventories in the Pit.{" "}
              <br /> <br />
              The Pit Exchange uses the <strong>Item Value Index</strong> to
              give insightful price estimates before trading. The Item Value
              Index uses Machine Learning to calculate the prices of items based
              off of the prices other similar trades.
            </Text>
          </div>
        </div>
      </Content>

      <Content className="text-center">
        <Header>A Powerful API</Header>

        <Text>
          Consume a powerful public-facing GraphQL API to gain insight on the
          Pit&apos;s economy.
        </Text>

        <div className="mt-5 w-full shadow-lg rounded-sm overflow-hidden">
          <div className="h-12 bg-indigo-500" />

          <Code />
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
    </>
  )
}

export default Sections
