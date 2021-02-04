import { useDashboardCharts } from "@App/components/pages/dashboard/useDashboardCharts";
import { Children } from "@App/utils/children";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type State = "Overview" | "Trades Out" | "Trades In";

const TabController = () => {
    const [state, setState] = useState<State>("Overview");

    return (
        <div>
            <Tab value={state} state={"Overview"}>
                <div></div>
            </Tab>
        </div>
    );
};

interface TabProps extends Children {
    state: State;
    value: State;
}

const Tab = ({ children, state, value }: TabProps) => {
    return state === value && <div>{children}</div>;
};

const Dashboard = () => {
    const { NetValueChart } = useDashboardCharts();

    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>

            <main>
                <div className="flex flex-row">
                    <aside className="w-72 min-h-screen sticky pt-12 pb-6 px-6 top-0 bg-gradient-to-b from-gray-50 to-gray-100 border border-r border-gray-200">
                        <div className="flex flex-col h-full">
                            <div className="rounded w-20 h-20 overflow-hidden mx-auto mb-5">
                                <Image
                                    src="https://crafatar.com/avatars/81b28f04-df15-46d4-9493-ac0a30c5c94f"
                                    width="100%"
                                    height="100%"
                                />
                            </div>

                            <h1 className="font-semibold text-black text-center">
                                batmanmovie
                            </h1>

                            <ul className="my-5">
                                <li>
                                    <h1 className="font-semibold">General ▲</h1>
                                </li>
                                <li className="text-sm cursor-pointer transition text-black hover:text-blue-600 w-max">
                                    Weekly Summary
                                </li>
                                <li className="text-sm cursor-pointer transition text-black hover:text-blue-600 w-max">
                                    Graphs
                                </li>
                                <li className="text-sm cursor-pointer transition text-black hover:text-blue-600 w-max">
                                    Economy News
                                </li>
                            </ul>

                            <div className="mt-auto">
                                <Link href="/dashboad">
                                    <a className="inline-block text-center mb-3 py-2 w-full text-black border border-black rounded-sm transition hover:bg-gray-900 hover:text-white">
                                        View Trades
                                    </a>
                                </Link>
                                <Link href="/dashboad">
                                    <a className="inline-block text-center py-2 w-full bg-black rounded-sm transition hover:bg-gray-900 text-white">
                                        Create a Trade
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </aside>

                    <div className="block">
                        <div className="flex flex-col min-h-screen bg-gray-100">
                            <header className="w-full bg-white p-12 pb-0 relative space-y-7">
                                <div>
                                    <h1 className="font-bold text-4xl text-gray-900">
                                        Weekly Summary
                                    </h1>

                                    <h2 className="mt-1 text-gray-800">
                                        A summary of your weekly trading
                                        accomplishments.
                                    </h2>
                                </div>

                                <div>
                                    <div className="flex flex-row space-x-10">
                                        <div className="w-max cursor-pointer">
                                            <h1 className="mb-2 px-2 font-medium">
                                                Overall
                                            </h1>

                                            <div className="h-0.5 bg-blue-600" />
                                        </div>

                                        <div className="w-max cursor-pointer">
                                            <h1 className="mb-2 px-2 font-medium text-gray-500">
                                                Trades In
                                            </h1>

                                            <div className="h-0.5 bg-blue-600 hidden" />
                                        </div>

                                        <div className="w-max cursor-pointer">
                                            <h1 className="mb-2 px-2 font-medium text-gray-500">
                                                Trades Out
                                            </h1>

                                            <div className="h-0.5 bg-blue-600 hidden" />
                                        </div>
                                    </div>
                                </div>
                            </header>

                            <div className="my-5">
                                <TabController />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
