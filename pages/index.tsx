import { InformationCard } from "@App/components/pages/index/InformationCard";
import { Navbar } from "@App/components/pages/index/Navbar";
import { useIndexCharts } from "@App/components/pages/index/useIndexCharts";
import { useIndexStyles } from "@App/components/pages/index/useIndexStyles";
import {
    UserAmountDocument,
    UserAmountQuery,
} from "@App/generated/graphql-types";
import { serverClient } from "@App/utils/server-client";
import Head from "next/head";
import { useQuery } from "react-query";

const Index2 = ({ data: initialData }) => {
    const { Section, Title, Subtitle } = useIndexStyles();
    const { NetValueChart } = useIndexCharts();

    const { data } = useQuery<UserAmountQuery>("userAmount", getUserAmount, {
        initialData: initialData.userAmount,
    });

    return (
        <div>
            <Head>
                <title>The Blue Hats Market</title>
            </Head>

            <main className="dark:bg-gray-900">
                <Navbar />

                <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-6">
                    <h1 className="font-extrabold text-5xl md:text-6xl text-gray-900 mt-12">
                        Trade For What You Want.
                    </h1>

                    <Subtitle>
                        Join the website that{" "}
                        <span className="text-green-600">
                            {data.userAmount}
                        </span>{" "}
                        players from The Hypixel Pit are using to trade with
                        through a{" "}
                        <span className="text-blue-600">
                            simple and intuitive
                        </span>{" "}
                        dashboard.
                    </Subtitle>

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

                    <Title>Find Oppurtinites to Sell Your Items</Title>

                    <Section>
                        <div className="flex flex-row">
                            <div className="w-1/2">
                                <Subtitle>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Possimus blanditiis
                                    tempore nihil adipisci? Dolorem similique
                                    voluptate dolores est, facilis, esse
                                    voluptatum veritatis qui fuga expedita animi
                                    harum tempora, repellendus natus!
                                </Subtitle>
                            </div>
                        </div>
                    </Section>

                    <Section>
                        <Title>Visualize Your Results</Title>

                        <Subtitle>
                            Visualize your trades with easy to understand graphs
                            to fully understand your trade history.
                        </Subtitle>
                    </Section>

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
    await serverClient.request<UserAmountQuery>(UserAmountDocument);

export default Index2;
