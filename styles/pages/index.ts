import { composeClassName } from "@App/utils/tailwind-css";

const header = composeClassName("font-bold text-5xl");
const text = composeClassName("text-gray-600");

export const useIndexStyles = () => ({
    header: header(),
    text: text("text-lg"),
    auctionText: text("text-base md:wrap-text-30 md:text-left md:ml-12"),
});
