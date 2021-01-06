import Image from "next/image";
import Link from "next/link";

interface TabProps {
    name: string;
    icon: string;
    href: string;
}

export const Tab = ({ icon, href, name }: TabProps) => {
    return (
        <Link href={href}>
            <div className="flex -mb-px mr-8">
                <a
                    href="#"
                    className="no-underline text-black opacity-50 md:text-grey-dark md:opacity-100 flex items-center py-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"
                >
                    <span className="h-6 w-6 fill-current mr-2">
                        <Image src={icon} width="100%" height="100%" alt="" />
                    </span>{" "}
                    {name}
                </a>
            </div>
        </Link>
    );
};
