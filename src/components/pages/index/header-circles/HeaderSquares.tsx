interface HeaderImageProps {
    position: string
}

export const HeaderSquares = ({ position }: HeaderImageProps) => {
    return (
        <img
            src="/images/index/squares.svg"
            className={`absolute z-0 hidden lg:block w-96 ${position}`}
            alt="Squares in a grid pattern"
        />
    )
}
