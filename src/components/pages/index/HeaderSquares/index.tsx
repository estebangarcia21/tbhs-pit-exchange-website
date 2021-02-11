import Image from "next/image"

interface HeaderImageProps {
  position: string
}

const HeaderSquares = ({ position }: HeaderImageProps) => {
  return (
    <div className={`absolute z-0 hidden lg:block w-96 h-96 ${position}`}>
      <Image
        src="/images/index/squares.svg"
        layout="fill"
        alt="Squares in a grid pattern"
      />
    </div>
  )
}

export default HeaderSquares
