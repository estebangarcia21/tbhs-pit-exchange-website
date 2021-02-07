import Link from "next/link";
import { Children } from "utils/children";

interface ButtonProps extends Children {
    href: string;
    white?: boolean;
}

export const Button = ({ children, href, white }: ButtonProps) => {
    const styles = white
        ? "text-gray-800 border border-gray-300 bg-white hover:bg-gray-100"
        : "bg-teal-500 text-white hover:bg-teal-600";

    return (
        <Link href={href}>
            <a
                className={`${styles} text-center py-2 mt-5 w-full text-lg rounded-3xl font-semibold cursor-pointer text-black transition`}
            >
                {children}
            </a>
        </Link>
    );
};
