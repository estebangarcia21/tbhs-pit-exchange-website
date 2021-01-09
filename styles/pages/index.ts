import { composeClassName } from "@App/utils/tailwind-css";

const header = composeClassName("font-bold text-5xl");
const text = composeClassName("text-gray-600");
const navButton = composeClassName(
    "px-5 p-2 border border-white rounded-sm text-white mx-3 transition hover:bg-white cursor-pointer hover:text-black"
);

export const useIndexStyles = () => ({
    header: header(),
    text: text("text-lg"),
    auctionText: text(
        "text-base text-center md:wrap-text-30 md:text-left md:ml-12"
    ),
    navButton: navButton(),
});
