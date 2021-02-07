import { Button } from "components/pages/index/Button";
import { Content } from "components/pages/index/Content";
import { InfoCard } from "components/pages/index/InfoCard";
import { Divider, TextSection } from "components/pages/index/TextSection";
import Head from "next/head";
import { BiDollarCircle } from "react-icons/bi";
import { BsArrowRepeat, BsEye } from "react-icons/bs";
import { FaCheck, FaSearch } from "react-icons/fa";

export default function Index() {
    return (
        <div>
            <Head>
                <title>The Metropolitan</title>
            </Head>

            <nav className="h-20 bg-white flex flex-row items-center justify-center">
                <ul className="flex flex-row items-center">
                    <li>
                        <a className="font-bold cursor-pointer text-gray-500 m-5 transition hover:text-rose-500">
                            Mystic Searcher
                        </a>
                    </li>
                    <li>
                        <a className="font-bold cursor-pointer text-gray-500 m-5 transition hover:text-rose-500">
                            Donate
                        </a>
                    </li>
                    <li>
                        <a className="font-bold cursor-pointer text-gray-500 m-5 transition hover:text-rose-500">
                            Browse Trades
                        </a>
                    </li>
                </ul>
            </nav>

            <main>
                <Content>
                    <div className="text-center text-gray-900 px-4 md:px-12">
                        <h1 className="font-semibold text-4xl lg:text-6xl">
                            Connecting the{" "}
                            <span className="text-rose-500">
                                Hypixel Pit's Economy
                            </span>
                        </h1>

                        <h2 className="mt-5 text-xl font-base text-gray-500">
                            The Metropolitan is a managed trading service for
                            The Hypixel Pit
                        </h2>

                        <div className="flex flex-col-reverse sm:flex-row justify-center">
                            <Button href="/login" white>
                                Log In
                            </Button>
                            <Button href="/signup">Sign Up</Button>
                        </div>
                    </div>

                    <div className="my-12 flex flex-row justify-center flex-wrap">
                        <InfoCard title="Watch" icon={BsEye}>
                            Watch realtime trade requests and offerings.
                            Maximize your potential profit by monitoring the
                            market from an easy and intutive dashboard.
                        </InfoCard>
                        <InfoCard title="Trade" icon={BiDollarCircle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc auctor ultricies sapien. Nullam rhoncus
                            tortor sed iaculis gravida.
                        </InfoCard>
                        <InfoCard title="Repeat" icon={BsArrowRepeat}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc auctor ultricies sapien. Nullam rhoncus
                            tortor sed iaculis gravida.
                        </InfoCard>
                    </div>
                </Content>

                <div
                    className="mt-5 px-5 py-28 bg-purple-blue text-white transform -skew-y-6"
                    style={{
                        transform: "origin(100% 0)",
                    }}
                >
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

                            <Divider />

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

                            <Divider />

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
