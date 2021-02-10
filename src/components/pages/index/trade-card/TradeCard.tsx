import Image from "next/image"

interface TradeCardProps {
    player: string
    trade: string
    item: "Leggings" | "Sword" | "Bow"
}

export const TradeCard = ({ player, trade, item }: TradeCardProps) => {
    const images = {
        Leggings: "/images/index/search.svg"
    }

    return (
        <figure className="flex flex-row w-72 h-20 rounded-md shadow-lg border border-coolGray-100 p-2 m-5">
            <div className="w-1/3 relative">
                <Image src={images[item]} layout="fill" alt={item} />
            </div>

            <div className="w-2/3">
                <h1 className="text-sm font-semibold">{player}</h1>
                <p className="text-coolGray-500 text-xs">{trade}</p>
            </div>
        </figure>
    )
}
