import { Footer } from "components/global/footer/Footer"
import { Button } from "components/pages/index/button/Button"
import { Content } from "components/pages/index/content/Content"
import {
    HorizontalDivider,
    VerticalDivider
} from "components/pages/index/Dividers"
import { HeaderCircles } from "components/pages/index/header-circles/HeaderCircles"
import { InfoCard } from "components/pages/index/info-card/InfoCard"
import { TextSection } from "components/pages/index/text-section/TextSection"
import Head from "next/head"
import { BiDollarCircle } from "react-icons/bi"
import { BsArrowRepeat, BsEye } from "react-icons/bs"

const Index = () => {
    return (
        <div>
            <Head>
                <title>The Pit Exchange</title>
            </Head>

            <main>
                <HeaderCircles position="left-12 top-96" />
                <HeaderCircles position="right-12 top-36" />

                <Content>
                    <div className="px-4 md:px-0 overflow-hidden">
                        <div className="flex flex-row items-center mt-14">
                            <div className="text-left md:text-left text-coolGray-800 max-w-xl lg:w-1/2">
                                <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">
                                    Connecting the{" "}
                                    <span className="text-teal-500">
                                        Hypixel Pit's Economy
                                    </span>
                                </h1>

                                <h2 className="mt-5 font-semibold text-md sm:text-xl font-base text-coolGray-700">
                                    The Pit Exchange is a trading service for
                                    the community of the Hypixel Pit
                                </h2>

                                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-x-7">
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
                                icon={[BsEye, "Watching for trades"]}
                            >
                                Watch for trade requests and offers in realtime.
                                Maximize your potential profit by monitoring the
                                market from a simple and intutive dashboard.
                            </InfoCard>

                            <VerticalDivider />

                            <InfoCard
                                title="Trade"
                                icon={[BiDollarCircle, "Gaining money"]}
                            >
                                Easily make trades by searching for open trades
                                or by offering for an item that a player has.
                                Utilize a powerful search tool to find your next
                                trade.
                            </InfoCard>

                            <VerticalDivider />

                            <InfoCard
                                title="Repeat"
                                icon={[BsArrowRepeat, "Repeating"]}
                            >
                                The Pit Exchange takes care of all your trading
                                business in one place. Trade without the burden
                                of having to search through countless discord
                                servers.
                            </InfoCard>
                        </div>
                    </div>
                </Content>

                <div className="mt-5 px-5 py-28 bg-purpleBlue text-white transform -skew-y-6">
                    <Content>
                        <div className="transform skew-y-6">
                            <TextSection
                                title="Intelligent Trade Searching"
                                img={[
                                    "/images/index/search-window.svg",
                                    "Player searching for mystics"
                                ]}
                            >
                                The Pit Exchange features a strong search engine
                                that makes it easy to find the items that you
                                want to trade for. Instead of manually searching
                                through various discord servers and pit lobbies,
                                search through a single search bar by an
                                enchant, a combination of enchants, enchant
                                levels, player names, player UUIDs, item UUIDs,
                                pants color, and more.
                            </TextSection>

                            <HorizontalDivider />

                            <TextSection
                                title="Trade Logging and Monitoring"
                                img={[
                                    "/images/index/trend-graph.svg",
                                    "Graph showing a trend line"
                                ]}
                                alignRight
                            >
                                The Pit Exchange keeps track of all of your
                                previous trades while giving a total trade value
                                according to the{" "}
                                <strong>Item Value Index (IVI)</strong>. The Pit
                                Exchange also monitors your value as a player
                                compared to other pit players according to the{" "}
                                <strong>Player Value Index (PVI)</strong>. Use
                                The Pit Exchange to get insightful value
                                estimates from trades to maximize your profit
                                from trades and minimize value loss.
                            </TextSection>

                            <HorizontalDivider />

                            <TextSection
                                title="Personalized Markets"
                                img={["/mag.svg", "Checking off a todo list"]}
                            >
                                Create personilized markets to start your own
                                business in the Pit. Advertise your items, your
                                rates, and your available trading times in a
                                discoverable market. Compare your prices to
                                similar markets and use the IVI to always
                                deliver the lowest possible prices for your
                                customers while still gaining profit and
                                boosting your overall score on the PVI.
                            </TextSection>
                        </div>
                    </Content>
                </div>

                <Content>
                    <div className="px-16 py-12 flex flex-row justify-between">
                        <div>
                            <h1 className="mt-10 mb-3 font-medium text-4xl text-gray-900">
                                Ready to Get Started?
                            </h1>

                            <p>Signing up happens in three simple steps!</p>

                            <ol className="list-decimal list-inside ml-2 my-5 space-y-2">
                                <li>Sign up for a Metropolitan account</li>
                                <li>Connect your Minecraft account</li>
                                <li>Start making trades</li>
                            </ol>
                        </div>
                    </div>
                </Content>

                <Footer />
            </main>
        </div>
    )
}

export default Index
