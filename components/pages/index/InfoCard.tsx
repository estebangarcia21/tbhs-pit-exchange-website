import { IconType } from "react-icons/lib";
import { Children } from "utils/children";

interface InfoCard extends Children {
    title: string;
    icon: IconType;
}

export const InfoCard = ({ icon: Icon, title, children }: InfoCard) => {
    return (
        <div className="sm:flex-grow-0 sm:w-80 py-5 flex-grow">
            <Icon className="text-3xl text-rose-500" />

            <h2 className="my-1 tracking-wide font-medium text-2xl text-coolGray-800">
                {title}
            </h2>

            <p className="text-coolGray-600 leading-7">{children}</p>
        </div>
    );
};

export const VerticalDivider = () => {
    return (
        <div className="hidden lg:block w-0.5 border-r h-auto border-dashed border-gray-300" />
    );
};
