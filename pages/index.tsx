import { StandardForm } from "@App/components/lib/forms/standard-form";
import Head from "next/head";
import { MutableRefObject, useRef } from "react";
import { animated, useChain, useSpring } from "react-spring";

const Index = () => {
    const createEntryAnimation = (ref: MutableRefObject<undefined>) =>
        useSpring({
            from: {
                opacity: 0,
                transform: "translateX(-100px)",
            },
            to: {
                opacity: 1,
                transform: "translateX(0px)",
            },
            ref,
        });

    const titleAnimationRef = useRef();
    const paragraphAnimationRef = useRef();

    useChain([titleAnimationRef, paragraphAnimationRef], [0, 0.35]);

    return (
        <div>
            <Head>
                <title>The Blue Hats Market</title>
            </Head>

            <main>
                <div className="flex flex-row flex-wrap justify-evenly p-12">
                    <div className="flex flex-col h-auto justify-center mb-8 mr-5">
                        <animated.h1
                            style={createEntryAnimation(titleAnimationRef)}
                            className="text-7xl font-extrabold pb-4"
                        >
                            The Global <br /> Pit Market
                        </animated.h1>

                        <animated.p
                            style={createEntryAnimation(paragraphAnimationRef)}
                            className="max-w-md"
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
            </main>
        </div>
    );
};

export default Index;
