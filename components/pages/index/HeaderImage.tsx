interface HeaderImageProps {
    img: string
    position: string
}

export const HeaderImage = ({ img, position }: HeaderImageProps) => {
    return (
        <img
            src={img}
            className={`absolute z-0 hidden lg:block w-96 ${position}`}
        />
    )
}
