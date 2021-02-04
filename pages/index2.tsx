import { Button } from "components/pages/index/Button";
import { BiDollarCircle } from "react-icons/bi";
import { BsArrowRepeat, BsEye } from "react-icons/bs";

export default function Index2() {
    return (
        <div>
            <main>
                <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
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

                    {/* <div className="flex flex-row my-10 mx-auto max-w-xl rounded p-4 border text-gray-500 border-gray-200">
                        <span>Search for your next trade</span>
                    </div> */}

                    <div className="my-12 flex flex-row justify-center flex-wrap">
                        <div className="w-80 m-5">
                            <BsEye className="text-3xl text-rose-500" />

                            <h2 className="my-1 font-semibold text-2xl text-gray-900">
                                Observe
                            </h2>

                            <p className="text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc auctor ultricies sapien.
                                Nullam rhoncus tortor sed iaculis gravida.
                            </p>
                        </div>
                        <div className="w-80 m-5">
                            <BiDollarCircle className="text-3xl text-rose-500" />

                            <h2 className="my-1 font-semibold text-2xl text-gray-900">
                                Trade
                            </h2>

                            <p className="text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc auctor ultricies sapien.
                                Nullam rhoncus tortor sed iaculis gravida.
                            </p>
                        </div>
                        <div className="w-80 m-5">
                            <BsArrowRepeat className="text-3xl text-rose-500" />

                            <h2 className="my-1 font-semibold text-2xl text-gray-900">
                                Repeat
                            </h2>

                            <p className="text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc auctor ultricies sapien.
                                Nullam rhoncus tortor sed iaculis gravida.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-5 p-5 bg-purple-blue text-white">
                    <div className="mx-auto max-w-7xl px-16 py-12">
                        <div className="flex flex-row justify-evenly">
                            <div className="w-1/2">
                                <h3 className="font-medium text-4xl">
                                    Intelligent Trade Searching
                                </h3>

                                <p className="my-4 pr-5">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nunc auctor ultricies
                                    sapien. Nullam rhoncus tortor sed iaculis
                                    gravida. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Nunc auctor
                                    ultricies sapien. Nullam rhoncus tortor sed
                                    iaculis gravida. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Nunc auctor
                                    ultricies sapien. Nullam rhoncus tortor sed
                                    iaculis gravida.
                                </p>
                            </div>
                            <img src="/mag.svg" className="w-1/2 h-56" />
                        </div>

                        <div className="my-12 bg-white border-b border-gray-100 opacity-10" />

                        <h3 className="font-medium text-4xl text-right">
                            Trade Logging and Monitoring
                        </h3>

                        <p className="my-4 w-1/2 text-right ml-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc auctor ultricies sapien. Nullam rhoncus
                            tortor sed iaculis gravida. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Nunc auctor
                            ultricies sapien. Nullam rhoncus tortor sed iaculis
                            gravida. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nunc auctor ultricies sapien.
                            Nullam rhoncus tortor sed iaculis gravida.
                        </p>

                        <div className="my-12 bg-white border-b border-gray-100 opacity-10" />

                        <h3 className="font-medium text-4xl">
                            Personalized Markets
                        </h3>

                        <p className="my-4 w-1/2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc auctor ultricies sapien. Nullam rhoncus
                            tortor sed iaculis gravida. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Nunc auctor
                            ultricies sapien. Nullam rhoncus tortor sed iaculis
                            gravida. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nunc auctor ultricies sapien.
                            Nullam rhoncus tortor sed iaculis gravida.
                        </p>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-16 py-12 flex flex-row justify-between">
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
                        <h2></h2>
                    </div>
                </div>
            </main>
        </div>
    );
}
