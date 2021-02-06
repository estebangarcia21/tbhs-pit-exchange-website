import { IconType } from "react-icons/lib";
import { Children } from "utils/children";

interface InfoCard extends Children {
    title: string;
    icon: IconType;
}

export const InfoCard = ({ icon: Icon, title, children }: InfoCard) => {
    return (
        <div className="w-80 m-5">
            <Icon className="text-3xl text-rose-500" />

            <h2 className="my-1 tracking-wide font-semibold text-2xl text-gray-900">
                {title}
            </h2>

            <p className="text-gray-700 leading-7">{children}</p>
        </div>
    );
};
