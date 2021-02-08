interface HeaderImageProps {
    position: string
}

export const HeaderCircles = ({ position }: HeaderImageProps) => {
    return (
        <img
            src="/images/index/circles.svg"
            className={`absolute z-0 hidden lg:block w-96 ${position}`}
        />
    )
}
