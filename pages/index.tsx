import Image from "next/image";
import { Button } from "components/pages/index/Button";
import { Content } from "components/pages/index/Content";
import { InfoCard, VerticalDivider } from "components/pages/index/InfoCard";
import {
    HorizontalDivider,
    TextSection,
} from "components/pages/index/TextSection";
import Head from "next/head";
import { BiDollarCircle } from "react-icons/bi";
import { BsArrowRepeat, BsEye } from "react-icons/bs";
import { FaCheck, FaSearch } from "react-icons/fa";

export default function Index() {
    return (
        <div>
            <Head>
                <title>The Pit Exchange</title>
            </Head>

            <main>
                <Content>
                    <div className="px-4 md:px-0 overflow-hidden">
                        <div className="flex flex-row items-center mt-14">
                            <div className=" text-left md:text-left text-coolGray-800 max-w-xl lg:w-1/2">
                                <h1 className="font-bold text-5xl lg:text-6xl">
                                    Connecting the{" "}
                                    <span className="text-rose-500">
                                        Hypixel Pit's Economy
                                    </span>
                                </h1>

                                <h2 className="mt-5 font-semibold text-xl font-base text-coolGray-700">
                                    The Pit Exchange is a free to use managed
                                    trading service for the Hypixel Pit created
                                    by Stevemmmmm
                                </h2>

                                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-x-7">
                                    <Button href="/signup">Sign Up</Button>
                                    <Button href="/login" white>
                                        Log In
                                    </Button>
                                </div>
                            </div>

                            <div className="hidden lg:block lg:w-1/2 ml-16">
                                <img
                                    src="/Root.svg"
                                    className="border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="my-12 flex flex-row justify-between flex-wrap">
                            <InfoCard title="Watch" icon={BsEye}>
                                Watch for trade requests and offers in realtime.
                                Maximize your potential profit by monitoring the
                                market from a simple and intutive dashboard.
                            </InfoCard>

                            <VerticalDivider />

                            <InfoCard title="Trade" icon={BiDollarCircle}>
                                Easily make trades by searching for open trades
                                or by offering for an item that a player has.
                                Utilize a powerful search tool to find your next
                                trade.
                            </InfoCard>

                            <VerticalDivider />

                            <InfoCard title="Repeat" icon={BsArrowRepeat}>
                                The Pit Exchange manages all of your trading in
                                one place. Quickly create trades without the
                                burden of having to search through countless
                                discord servers.
                            </InfoCard>
                        </div>
                    </div>
                </Content>

                <div className="mt-5 px-5 py-28 bg-purpleBlue text-white transform -skew-y-6">
                    <Content>
                        <div className="transform skew-y-6">
                            <TextSection
                                title="Intelligent Trade Searching"
                                imgPath="/Root.svg"
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc auctor ultricies sapien.
                                Nullam rhoncus tortor sed iaculis gravida. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Nunc auctor ultricies sapien. Nullam
                                rhoncus tortor sed iaculis gravida. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                                Nunc auctor ultricies sapien. Nullam rhoncus
                                tortor sed iaculis gravida.
                                <ul className="ml-5 my-5 space-y-3">
                                    <li className="flex flex-row items-center">
                                        <FaCheck className="mr-3" />
                                        Search by multiple enchant names
                                    </li>
                                    <li className="flex flex-row items-center">
                                        <FaCheck className="mr-3" />
                                        Search by player name or uuid
                                    </li>
                                    <li className="flex flex-row items-center">
                                        <FaCheck className="mr-3" />
                                        Search by similar item
                                    </li>
                                </ul>
                                <button className="flex flex-row items-center justify-center py-2 w-full font-semibold rounded-3xl bg-white text-black transition hover:bg-gray-100">
                                    <FaSearch className="mr-2" /> Try Searching
                                    for Your Next Trade
                                </button>
                            </TextSection>

                            <HorizontalDivider />

                            <TextSection
                                title="Trade Logging and Monitoring"
                                imgPath="/mag.svg"
                                alignRight
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc auctor ultricies sapien.
                                Nullam rhoncus tortor sed iaculis gravida. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Nunc auctor ultricies sapien. Nullam
                                rhoncus tortor sed iaculis gravida. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                                Nunc auctor ultricies sapien. Nullam rhoncus
                                tortor sed iaculis gravida.
                            </TextSection>

                            <HorizontalDivider />

                            <TextSection
                                title="Personalized Markets"
                                imgPath="/mag.svg"
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc auctor ultricies sapien.
                                Nullam rhoncus tortor sed iaculis gravida. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Nunc auctor ultricies sapien. Nullam
                                rhoncus tortor sed iaculis gravida. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                                Nunc auctor ultricies sapien. Nullam rhoncus
                                tortor sed iaculis gravida.
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

                        <div className="w-96 h-96 shadow-lg rounded-lg p-12 mr-16">
                            <h2>Join today!</h2>
                        </div>
                    </div>
                </Content>
            </main>
        </div>
    );
}
