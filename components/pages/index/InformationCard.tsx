import { Children } from "utils/children";

interface InformationCardProps extends Children {
    title: string;
    gradientVariants: string;
}

export const InformationCard = ({
    title,
    gradientVariants,
    children,
}: InformationCardProps) => {
    return (
        <figure className="space-x-5 w-96 mb-5 bg-white shadow-md text-gray-600 rounded-sm overflow-hidden">
            <div
                className={`h-12 text-white flex flex-col flex-wrap text-center justify-center content-center bg-gradient-to-br ${gradientVariants}`}
            >
                <h1 className="text-lg font-semibold">{title}</h1>
            </div>

            <div className="p-6">
                <p>{children}</p>
            </div>
        </figure>
    );
};
