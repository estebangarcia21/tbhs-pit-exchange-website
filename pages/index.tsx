import { InformationCard } from "components/pages/index/InformationCard";
import { Navbar } from "components/global/Navbar";
import { useIndexCharts } from "components/pages/index/useIndexCharts";
import { useIndexStyles } from "components/pages/index/useIndexStyles";
import {
    Query,
    UserAmountDocument,
    UserAmountQuery,
} from "generated/graphql-types";
import { serverClient } from "utils/server-client";
import Head from "next/head";
import { useQuery } from "react-query";
import { GetStaticProps } from "next";
import { Footer } from "components/global/Footer";
import { Content, MainContent } from "components/global/Layout";

interface PageProps {
    userAmount: Pick<Query, "userAmount">;
}

const Index = ({ userAmount }: PageProps) => {
    const { Section, Title, Subtitle, SectionHalfContainer } = useIndexStyles();
    const { NetValueChart } = useIndexCharts();

    const { data } = useQuery<UserAmountQuery>("userAmount", getUserAmount, {
        initialData: userAmount,
    });

    return (
        <div>
            <Head>
                <title>The Blue Hats Market</title>
            </Head>

            <Content>
                <Navbar />

                <MainContent>
                    <div className="dark:bg-gray-900 px-5 py-12">
                        <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-6">
                            <h1 className="font-extrabold text-5xl md:text-6xl text-gray-900">
                                Trade For What You Want.
                            </h1>

                            <Subtitle>
                                Join the website that{" "}
                                <span className="text-green-600">
                                    {data.userAmount}
                                </span>{" "}
                                players from The Hypixel Pit are using to trade
                                with through a{" "}
                                <span className="text-blue-600">
                                    simple and intuitive
                                </span>{" "}
                                dashboard.
                            </Subtitle>

                            <div className="my-8 flex flex-row flex-wrap justify-evenly xl:justify-between">
                                <InformationCard
                                    title="Make Trades Easily"
                                    gradientVariants="from-lightBlue-400 to-indigo-500"
                                >
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Qui vero numquam
                                    perspiciatis libero odit. Random Stuff.
                                </InformationCard>

                                <InformationCard
                                    title="Monitor Your Net Income"
                                    gradientVariants="from-green-400 to-cyan-500"
                                >
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Qui vero numquam
                                    perspiciatis libero odit. Random Stuff.
                                </InformationCard>

                                <InformationCard
                                    title="Manage Your Sales"
                                    gradientVariants="from-orange-400 to-pink-500"
                                >
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Qui vero numquam
                                    perspiciatis libero odit. Random Stuff.
                                </InformationCard>
                            </div>

                            <Title>Find Oppurtinites to Sell Your Items</Title>

                            <Section>
                                <div className="flex flex-row">
                                    <SectionHalfContainer>
                                        <Subtitle>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Possimus blanditiis tempore nihil
                                            adipisci? Dolorem similique
                                            voluptate dolores est, facilis, esse
                                            voluptatum veritatis qui fuga
                                            expedita animi harum tempora,
                                            repellendus natus!
                                        </Subtitle>
                                    </SectionHalfContainer>

                                    <SectionHalfContainer>
                                        <Subtitle>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Possimus blanditiis tempore nihil
                                            adipisci? Dolorem similique
                                            voluptate dolores est, facilis, esse
                                            voluptatum veritatis qui fuga
                                            expedita animi harum tempora,
                                            repellendus natus!
                                        </Subtitle>
                                    </SectionHalfContainer>
                                </div>
                            </Section>

                            <Title>Visualize Your Results</Title>

                            <Section>
                                <Subtitle>
                                    Visualize your trades with easy to
                                    understand graphs to fully understand your
                                    trade history.
                                </Subtitle>
                            </Section>

                            <div className="my-6">
                                <NetValueChart />
                            </div>
                        </div>
                    </div>
                </MainContent>

                <Footer />
            </Content>
        </div>
    );
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    const userAmount = await getUserAmount();

    return {
        props: {
            userAmount,
        },
        revalidate: 3,
    };
};

const getUserAmount = async () =>
    await serverClient.request<UserAmountQuery>(UserAmountDocument);

export default Index;
