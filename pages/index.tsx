import { InformationCard } from "@App/components/pages/index/InformationCard";
import { Navbar } from "@App/components/pages/index/Navbar";
import { useIndexCharts } from "@App/components/pages/index/useIndexCharts";
import {
    UserAmountDocument,
    UserAmountQuery,
} from "@App/generated/graphql-types";
import { API_URL } from "@App/utils/constants";
import request from "graphql-request";
import Head from "next/head";
import { useQuery } from "react-query";

const Index2 = ({ data: initialData }) => {
    const { NetValueChart } = useIndexCharts();

    const { data } = useQuery<UserAmountQuery>("userAmount", getUserAmount, {
        initialData: initialData.userAmount,
    });

    return (
        <div>
            <Head>
                <title>The Blue Hats Market</title>
            </Head>

            <main>
                <Navbar />

                <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-6">
                    <h1 className="font-extrabold text-5xl md:text-6xl text-gray-900 mt-12">
                        Trade For What You Want.
                    </h1>

                    <h2 className="text-xl text-gray-600 font-medium my-2">
                        Join the market that{" "}
                        <span className="text-green-600">
                            {data.userAmount}
                        </span>{" "}
                        players are trading with through a{" "}
                        <span className="text-blue-600">
                            simple and intuitive
                        </span>{" "}
                        dashboard.
                    </h2>

                    <div className="my-8 flex flex-row flex-wrap justify-center xl:justify-between">
                        <InformationCard
                            title="Keep Track of Your Trades"
                            gradientVariants="from-lightBlue-400 to-indigo-500"
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Qui vero numquam perspiciatis libero odit.
                            Random Stuff.
                        </InformationCard>

                        <InformationCard
                            title="Monitor Your Net Income"
                            gradientVariants="from-green-400 to-cyan-500"
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Qui vero numquam perspiciatis libero odit.
                            Random Stuff.
                        </InformationCard>

                        <InformationCard
                            title="Manage Your Sales"
                            gradientVariants="from-orange-400 to-pink-500"
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Qui vero numquam perspiciatis libero odit.
                            Random Stuff.
                        </InformationCard>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900">
                        Visualize Your Data
                    </h1>

                    <h2 className="text-xl text-gray-600 font-medium my-2">
                        Visualize your trades with easy to understand graphs to
                        fully understand your trade history.
                    </h2>

                    <div className="my-6 mb-24">
                        <NetValueChart />
                    </div>
                </div>
            </main>
        </div>
    );
};

export const getStaticProps = async () => {
    const userAmount = await getUserAmount();

    return {
        props: {
            data: {
                userAmount,
            },
        },
        revalidate: 1,
    };
};

const getUserAmount = async () =>
    await request<UserAmountQuery>(API_URL, UserAmountDocument);

export default Index2;
