import Link from "next/link";
import { Children } from "utils/children";

interface ButtonProps extends Children {
    href: string;
    white?: boolean;
}

export const Button = ({ children, href, white }: ButtonProps) => {
    const styles = white
        ? "border border-gray-300 bg-white hover:bg-gray-100"
        : "bg-rose-500 text-white hover:bg-rose-600";

    return (
        <Link href={href}>
            <a
                className={`${styles} py-2 mt-5 sm:mx-3.5 w-full sm:w-36 text-lg rounded-3xl font-semibold cursor-pointer text-black transition`}
            >
                {children}
            </a>
        </Link>
    );
};
