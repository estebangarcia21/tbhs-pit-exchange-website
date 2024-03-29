import Image from "next/image"

export interface TradeCardProps {
  player: string
  trade: string
  item: "Leggings" | "Sword" | "Bow"
}

const TradeCard = ({ player, trade, item }: TradeCardProps) => {
  const images = {
    Leggings: "/minecraft/items/aqua-pants.png",
    Sword: "/minecraft/items/gold-sword.png",
    Bow: "/minecraft/items/bow.png"
  }

  return (
    <figure className="bg-white flex flex-row min-w-72 w-auto rounded-md p-2">
      <div className="w-1/3 h-12 my-auto relative">
        <Image
          src={images[item]}
          layout="fill"
          objectFit="contain"
          alt={item}
        />
      </div>

      <div className="w-2/3">
        <h1 className="text-black text-sm font-medium">{player}</h1>
        <p className="text-coolGray-600 text-xs">{trade}</p>
      </div>
    </figure>
  )
}

export default TradeCard
