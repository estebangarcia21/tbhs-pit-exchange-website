import { usePWVSpring } from "@play-when-visible/react-spring";
import { MutableRefObject, useRef } from "react";
import { ReactSpringHook, useChain, useSpring } from "react-spring";

export const useIndexAnimations = () => {
    const createEntryAnimation = (ref: MutableRefObject<ReactSpringHook>) =>
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

    const createXAxisEntranceOptions = (sign: "-" | "+") => {
        const parsedSign = sign == "+" ? "" : sign;

        return {
            animation: {
                from: {
                    opacity: 0,
                    transform: `translateX(${parsedSign}100px)`,
                },
                to: {
                    opacity: 1,
                    transform: "translateX(0px)",
                },
                onlyOnce: true,
            },
            onlyOnce: true,
        };
    };

    const [auctionsEntryAnimationRef, auctionsEntryAnimation] = usePWVSpring(
        createXAxisEntranceOptions("-")
    );

    const [
        auctionTextEntryAnimationRef,
        auctionTextEntryAnimation,
    ] = usePWVSpring(createXAxisEntranceOptions("+"));

    const titleAnimationRef = useRef();
    const paragraphAnimationRef = useRef();

    useChain(
        [
            { current: titleAnimationRef.current },
            { current: paragraphAnimationRef.current },
        ],
        [0, 0.3]
    );

    return {
        createEntryAnimation,
        titleAnimationRef,
        paragraphAnimationRef,
        auctionTextEntryAnimationRef,
        auctionTextEntryAnimation,
        auctionsEntryAnimationRef,
        auctionsEntryAnimation,
    };
};
