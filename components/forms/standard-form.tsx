import { Children } from "@App/utils/children";
import Link from "next/link";

const focusable = (classValues: string) =>
    `${classValues} focus:outline-none focus:ring transition focus:border-blue-200`;

interface StandardFormProps {
    title: string;
}

export const StandardForm = ({
    title,
    children,
}: StandardFormProps & Children) => {
    return (
        <form className="flex flex-col shadow px-10 py-8 w-full max-w-sm mb-2 rounded-md bg-white text-black">
            <h1 className="text-4xl font-extrabold mb-2">{title}</h1>

            {children}
        </form>
    );
};

interface InputProps {
    htmlFor: string;
    type?: "text" | "password";
}

StandardForm.Input = ({
    htmlFor,
    type = "text",
    children,
}: InputProps & Children) => {
    return (
        <>
            {/* <label htmlFor={htmlFor} className="text-l font-medium">
                {children}
            </label> */}
            <input
                id={htmlFor}
                className={focusable(
                    "border border-gray-300 rounded-sm my-2 py-2 px-3.5"
                )}
                placeholder={children.toString()}
                type={type}
            />
        </>
    );
};

interface ButtonProps {
    href: string;
    type?: "button" | "submit" | "reset";
}

StandardForm.Button = ({
    href,
    type = "button",
    children,
}: ButtonProps & Children) => {
    return (
        <Link href={href}>
            <button
                type={type}
                className={focusable(
                    "bg-black rounded-sm mt-4 px-4 py-2.5 text-white text-center cursor-pointer hover:bg-gray-900"
                )}
            >
                {children}
            </button>
        </Link>
    );
};
