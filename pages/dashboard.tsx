import { useDashboardCharts } from "@App/components/pages/dashboard/useDashboardCharts";
import Head from "next/head";
import Image from "next/image";

const Dashboard = () => {
    const { NetValueChart } = useDashboardCharts();

    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>

            <main>
                <div className="flex flex-row">
                    <aside className="w-72 min-h-screen sticky top-0 bg-dark-blue-gray">
                        <div className="flex flex-col">
                            <img
                                className="rounded-full w-24 h-24 my-5 mx-auto"
                                src="/images/pfp.jpg"
                            />

                            <h1 className="font-semibold text-white text-center">
                                Stevemmmmm
                            </h1>

                            <div></div>
                        </div>
                    </aside>

                    <div className="flex flex-col w-full min-h-screen bg-gray-100">
                        <header className="w-full h-56 bg-white p-12 relative">
                            <h1 className="font-bold text-4xl">
                                Weekly Summary
                            </h1>

                            <h2 className="mt-1">
                                A summary of your weekly trading
                                accomplishments.
                            </h2>

                            <div className="absolute bottom-0">
                                <div className="flex flex-row space-x-10">
                                    <div className="w-max cursor-pointer">
                                        <h1 className="mb-2 px-2 font-medium">
                                            Overall
                                        </h1>

                                        <div className="h-0.5 bg-cyan-500" />
                                    </div>

                                    <div className="w-max cursor-pointer">
                                        <h1 className="mb-2 px-2 font-medium text-gray-500">
                                            Trades In
                                        </h1>

                                        <div className="h-0.5 bg-cyan-500 hidden" />
                                    </div>

                                    <div className="w-max cursor-pointer">
                                        <h1 className="mb-2 px-2 font-medium text-gray-500">
                                            Trades Out
                                        </h1>

                                        <div className="h-0.5 bg-cyan-500 hidden" />
                                    </div>
                                </div>
                            </div>
                        </header>

                        <div>
                            <div className="my-5">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
