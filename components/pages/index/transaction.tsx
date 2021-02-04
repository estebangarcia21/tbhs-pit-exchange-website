import { Children } from "utils/children";

interface TransactionProps {
    provider: string;
    amount: number;
    currency: "FP" | "GM";
    imgPath?: string;
}

const Text = ({ children }: Children) => {
    return (
        <div className="w-1/2 px-4">
            <div className="text-right">{children}</div>
        </div>
    );
};

export const Transaction = ({
    imgPath,
    amount,
    currency,
    provider,
}: TransactionProps) => {
    return (
        <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
            <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                <span className="text-lg">{provider}</span>
            </div>

            <div className="hidden md:flex lg:hidden xl:flex w-/4 px-4 items-center">
                Stevemmmmm &rarr; ecoleriverside7
            </div>

            <div className="flex w-3/5 md:w/12">
                <Text>Traded away 64 FP for 1 Fresh Sword.</Text>

                <Text>
                    {currency}${amount.toFixed(2)}
                </Text>
            </div>
        </div>
    );
};
