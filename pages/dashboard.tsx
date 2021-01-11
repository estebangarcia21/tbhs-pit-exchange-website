import { Tab } from "@App/components/pages/index/Tab";
import { Transaction } from "@App/components/pages/index/Transaction";
import { useSessionAuth } from "@App/utils/hooks/useSessionAuth";
import Head from "next/head";

const Dashboard = () => {
    useSessionAuth();

    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="font-sans bg-grey-lighter flex flex-col min-h-screen w-full">
                <div className="hidden bg-blue-dark md:block md:bg-white md:border-b">
                    <div className="container mx-auto px-4 flex">
                        <Tab icon="/icons/wing.svg" href="" name="Home" />

                        <Tab
                            icon="/icons/dollar-tag.svg"
                            href=""
                            name="Prices"
                        />
                    </div>
                </div>

                <div className="flex-grow container mx-auto sm:px-4 pt-6 pb-8 space-y-5">
                    <div className="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow">
                        <div className="border-b px-6 bg-gradient-to-r text-white from-blue-700 to-blue-600">
                            <div className="flex justify-between -mb-px">
                                <div className="lg:hidden py-4 text-lg">
                                    Price Charts
                                </div>

                                <div className="hidden lg:flex">
                                    <button
                                        type="button"
                                        className="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-6"
                                    >
                                        Fresh Pants &middot; FP$376
                                    </button>

                                    <button
                                        type="button"
                                        className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-6"
                                    >
                                        Gems &middot; GM$12
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center px-6 lg:hidden">
                            <div className="flex-grow flex-no-shrink py-6">
                                <div className="text-grey-darker mb-2">
                                    <span className="text-3xl align-top">
                                        FP
                                    </span>

                                    <span className="text-5xl">376</span>
                                </div>
                                <div className="text-green-light text-sm">
                                    &uarr; FP$36
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex">
                            <div className="w-1/3 text-center py-8">
                                <div className="border-r">
                                    <div className="text-grey-darker mb-2">
                                        <span className="text-3xl align-top">
                                            FP
                                        </span>

                                        <span className="text-5xl">376</span>
                                    </div>
                                    <div className="text-sm uppercase text-grey tracking-wide">
                                        Total Fresh Pants Value
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/3 text-center py-8">
                                <div className="border-r">
                                    <div className="text-grey-darker mb-2">
                                        <span className="text-3xl align-top">
                                            <span className="text-green-500 align-top">
                                                +
                                            </span>
                                            FP
                                        </span>
                                        <span className="text-5xl">36</span>
                                    </div>

                                    <div className="text-sm uppercase text-grey tracking-wide">
                                        Since last month
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/3 text-center py-8">
                                <div>
                                    <div className="text-grey-darker mb-2">
                                        <span className="text-3xl align-top">
                                            <span className="text-green-500 align-top">
                                                +
                                            </span>
                                        </span>
                                        <span className="text-5xl">8.379</span>
                                        <span className="text-3xl align-top">
                                            %
                                        </span>
                                    </div>

                                    <div className="text-sm uppercase text-grey tracking-wide">
                                        Since last month (%)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-6">
                        <div className="shadow my-4 p-6">
                            <h1 className="text-blue-500 text-xl">Something</h1>

                            <p className="text-black pt-5">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Doloribus sint, soluta neque
                                magni laborum voluptates enim, quo ea nulla
                                reprehenderit doloremque hic at sapiente ipsa ex
                                magnam! Velit, tempore corporis!
                            </p>
                        </div>

                        <div className="shadow my-4 p-6">
                            <h1 className="text-blue-500 text-xl">Something</h1>

                            <p className="text-black pt-5">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Doloribus sint, soluta neque
                                magni laborum voluptates enim, quo ea nulla
                                reprehenderit doloremque hic at sapiente ipsa ex
                                magnam! Velit, tempore corporis!
                            </p>
                        </div>

                        <div className="shadow my-4 p-6">
                            <h1 className="text-blue-500 text-xl">Something</h1>

                            <p className="text-black pt-5">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Doloribus sint, soluta neque
                                magni laborum voluptates enim, quo ea nulla
                                reprehenderit doloremque hic at sapiente ipsa ex
                                magnam! Velit, tempore corporis!
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
                            <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
                                <div className="border-b">
                                    <div className="flex justify-between px-6 -mb-px bg-gradient-to-r from-blue-700 to-blue-600">
                                        <h3 className="text-white py-4 font-normal text-lg">
                                            Your Transactions
                                        </h3>
                                    </div>
                                </div>

                                <Transaction
                                    amount={50}
                                    currency="FP"
                                    provider="Stevemmmmm"
                                />

                                <Transaction
                                    amount={50}
                                    currency="FP"
                                    provider="ecoleriverside7"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
