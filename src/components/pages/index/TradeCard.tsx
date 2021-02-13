import Image from "next/image"
import { RefObject } from "react"
import { animated, useSpring } from "react-spring"

export interface TradeCardData {
  player: string
  trade: string
  item: "Leggings" | "Sword" | "Bow"
}

interface TradeCardProps extends TradeCardData {
  cardRef: RefObject<any> | ((node?: Element) => void)
}

const TradeCard = ({ player, trade, item, cardRef }: TradeCardProps) => {
  const images = {
    Leggings: "/minecraft/items/aqua-pants.png",
    Sword: "/minecraft/items/gold-sword.png",
    Bow: "/minecraft/items/bow.png"
  }

  const animation = useSpring({
    from: {
      transform: "translateX(0rem)"
    },
    to: {
      transform: "translateX(-80rem)"
    },
    config: {
      duration: 25000
    }
  })

  return (
    <div ref={cardRef}>
      <animated.div className="shadow-lg" style={animation}>
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
      </animated.div>
    </div>
  )
}

export default TradeCard
