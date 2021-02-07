import { Children } from "utils/children";

interface TextSectionProps extends Children {
    title: string;
    imgPath: string;
    alignRight?: boolean;
}

export const TextSection = ({
    title,
    imgPath,
    alignRight,
    children,
}: TextSectionProps) => {
    return (
        <div
            className={`lg:flex lg:space-x-12 justify-evenly ${
                alignRight
                    ? "lg:text-right flex-row-reverse"
                    : "text-left flex-row items-center"
            }`}
        >
            <div className="lg:w-1/2">
                <h3 className="font-medium text-3xl md:text-4xl">{title}</h3>

                <p className="my-4 leading-8">{children}</p>
            </div>

            <img src={imgPath} className="hidden lg:block lg:w-1/2 h-64" />
        </div>
    );
};

export const Divider = () => {
    return (
        <div className="my-12 border-b border-dashed border-white opacity-10" />
    );
};
