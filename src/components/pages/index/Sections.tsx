import { Header, Text } from "components/lib/Typography"
import Button from "components/pages/index/Button"
import Content from "components/pages/index/Content"
import { List, ListItem } from "components/pages/index/List"
import Image from "next/image"
import React from "react"
import { IconType } from "react-icons"
import { IoIosCheckmarkCircle } from "react-icons/io"
import Children from "utils/children"
import Code from "./section-utils/Code"
import SideText from "./SideText"

const CheckMarkListItem = ({ children }: Children) => {
  const checkmarkIcon: [IconType, string] = [IoIosCheckmarkCircle, ""]

  return <ListItem icon={checkmarkIcon}>{children}</ListItem>
}

const Sections = () => {
  return (
    <div>
      <Content className="border-t border-coolGray-200 border-dashed">
        <section className="flex flex-row space-x-10 justify-between transform">
          <div className="w-1/2 pr-5">
            <Header>Intelligent Trade Searching</Header>

            <Text>
              The days of making your way around discord servers are over.
              Easily search for trades through an easy to use search bar to find
              your next trade. Search by...
            </Text>

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

      <section className="relative z-10 bg-grayBlueTint">
        <Content>
          <Header>A Realtime Business Platform</Header>

          <Text>
            Receive notifications when a trade or similar trade that you are
            looking for is created.
          </Text>

          <div className="mt-1"></div>
        </Content>
      </section>

      <Content>
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
    </div>
  )
}

export default Sections
