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
                {/* <img src="/Root.svg" className="w-64 absolute right-0" /> */}

                <Content>
                    <div className="mt-14 text-left md:text-left text-coolGray-800 max-w-xl">
                        <h1 className="font-bold text-4xl lg:text-6xl">
                            Connecting the{" "}
                            <span className="text-rose-500">
                                Hypixel Pit's Economy
                            </span>
                        </h1>

                        <h2 className="mt-5 font-semibold text-xl font-base text-coolGray-700">
                            The Pit Exchange is a free to use managed trading
<<<<<<< HEAD
                            service for The Hypixel Pit created by Stevemmmmm
=======
                            service for The Hypixel Pit brought to you by
                            Stevemmmmm
>>>>>>> 2c00dcd14f04133e385df4f14c741f53358adbe5
                        </h2>

                        <div className="flex flex-col sm:flex-row justify-between space-x-7">
                            <Button href="/signup">Sign Up</Button>
                            <Button href="/login" white>
                                Log In
                            </Button>
                        </div>
                    </div>

                    <div className="my-12 flex flex-row justify-between flex-wrap">
                        <InfoCard title="Watch" icon={BsEye}>
                            Watch realtime trade requests and offerings.
                            Maximize your potential profit by monitoring the
                            market from an easy and intutive dashboard.
                        </InfoCard>

                        <VerticalDivider />

                        <InfoCard title="Trade" icon={BiDollarCircle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc auctor ultricies sapien. Nullam rhoncus
                            tortor sed iaculis gravida.
                        </InfoCard>

                        <VerticalDivider />

                        <InfoCard title="Repeat" icon={BsArrowRepeat}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc auctor ultricies sapien. Nullam rhoncus
                            tortor sed iaculis gravida.
                        </InfoCard>
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
