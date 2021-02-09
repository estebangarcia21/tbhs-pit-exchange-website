import { Children } from "utils/children"

interface TextSectionProps extends Children {
    title: string
    img: [string, string]
    alignRight?: boolean
}

export const TextSection = ({
    title,
    img: [path, alt],
    alignRight,
    children,
}: TextSectionProps) => {
    return (
        <div
            className={`lg:flex justify-evenly ${
                alignRight
                    ? "lg:text-right flex-row-reverse"
                    : "text-left flex-row items-center"
            }`}
        >
            <div className="lg:w-1/2">
                <h3 className="font-medium text-3xl md:text-4xl">{title}</h3>

                <p className="my-4 leading-8">{children}</p>
            </div>

            <img
                src={path}
                className={`hidden lg:block lg:w-1/2 h-64 ${
                    alignRight ? "mr-12" : "ml-12"
                }`}
                alt={alt}
            />
        </div>
    )
}
