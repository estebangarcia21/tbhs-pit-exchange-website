import Image from "next/image"

export interface TradeCardProps {
  player: string
  trade: string
  item: "Leggings" | "Sword" | "Bow"
}

const TradeCard = ({ player, trade, item }: TradeCardProps) => {
  const images = {
    Leggings: "/images/index/search.svg"
  }

  return (
    <figure className="bg-white flex flex-row min-w-72 h-20 rounded-md shadow-lg border border-coolGray-100 p-2">
      <div className="w-1/3 relative">
        <Image src={images[item]} layout="fill" alt={item} />
      </div>

      <div className="w-2/3">
        <h1 className="text-black text-sm font-medium">{player}</h1>
        <p className="text-coolGray-600 text-xs">{trade}</p>
      </div>
    </figure>
  )
}

export default TradeCard
