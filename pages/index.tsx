import { StandardForm } from "@App/components/forms/standard-form";
import { useIndexAnimations } from "@App/components/pages/index/animations";
import { useIndexStyles } from "@App/styles/pages";
import { composeClassName } from "@App/utils/tailwind-css";
import Head from "next/head";
import { animated } from "react-spring";

const Index = () => {
    const { text, auctionText, header } = useIndexStyles();

    const {
        createEntryAnimation,
        paragraphAnimationRef,
        titleAnimationRef,
        auctionTextEntryAnimation,
        auctionTextEntryAnimationRef,
        auctionsEntryAnimation,
        auctionsEntryAnimationRef,
    } = useIndexAnimations();

    return (
        <div>
            <Head>
                <title>The Blue Hats Market</title>
            </Head>

            <main>
                <div className="text-white flex flex-row flex-wrap justify-evenly p-12 bg-gradient-to-r from-indigo-500 to-blue-500">
                    <div className="flex flex-col h-auto justify-center mb-8 mr-5">
                        <animated.h1
                            style={createEntryAnimation(titleAnimationRef)}
                            className="text-7xl font-extrabold pb-4"
                        >
                            The Global <br /> Pit Market
                        </animated.h1>

                        <animated.p
                            style={createEntryAnimation(paragraphAnimationRef)}
                            className="max-w-md lg:text-lg"
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Mollitia corrupti dolore qui illum asperiores
                            molestiae deserunt sapiente, consequatur facere, at
                            numquam, necessitatibus quos cum? Ex adipisci rerum
                            quae dolor hic.
                        </animated.p>
                    </div>

                    <StandardForm title="Log In">
                        <StandardForm.Input htmlFor="email">
                            Email
                        </StandardForm.Input>

                        <StandardForm.Input type="password" htmlFor="password">
                            Password
                        </StandardForm.Input>

                        <StandardForm.Button type="submit" href="/login">
                            Login
                        </StandardForm.Button>

                        <StandardForm.Button href="/create-an-account">
                            Create an Account
                        </StandardForm.Button>
                    </StandardForm>
                </div>

                <div className="text-center pt-8 px-8 space-y-4">
                    <h1 className={header}>Buy, Sell, Profit.</h1>

                    <p className={text}>
                        Sell your items through an intuitive yet easy to use
                        dashboard where you can see real time biddings on your
                        item.
                    </p>
                </div>

                <div
                    ref={auctionsEntryAnimationRef}
                    className="flex flex-row justify-center flex-wrap m-8 space-y-8 md:space-y-0 content-center"
                >
                    <animated.div
                        style={auctionsEntryAnimation}
                        className="w-full max-w-sm shadow text-center"
                    >
                        <div className="bg-gradient-to-r text-white to-indigo-500 from-blue-600 p-4 rounded-t-sm text-xl">
                            <h1>Auctions</h1>
                        </div>

                        <div className="flex flex-row my-2 justify-between px-4">
                            <p>
                                <span className="text-red-400">MKL</span> &rarr;
                                FP$5
                            </p>

                            <p>0.152%</p>
                        </div>

                        <div className="flex flex-row my-2 justify-between px-4">
                            <p>
                                <span className="text-green-400">TBH</span>{" "}
                                &rarr; FP$12
                            </p>

                            <p>2.358%</p>
                        </div>

                        <div className="flex flex-row my-2 justify-between px-4">
                            <p>
                                <span className="text-green-400">TBH</span>{" "}
                                &rarr; FP$48
                            </p>

                            <p>1.012%</p>
                        </div>
                    </animated.div>

                    <div
                        ref={auctionTextEntryAnimationRef}
                        className="h-auto flex flex-col justify-center"
                    >
                        <animated.div style={auctionTextEntryAnimation}>
                            <p className={auctionText}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Nihil quam sit vel culpa id
                                dolores deserunt quo laboriosam eius sed qui
                                natus voluptas tenetur, quibusdam ipsa veniam!
                                Porro, quae vel.
                            </p>
                        </animated.div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Index;
