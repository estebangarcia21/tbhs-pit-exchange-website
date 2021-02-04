import { Children } from "utils/children";
import Link from "next/link";

interface SectionProps extends Children {
    title: string;
}

const Section = ({ title, children }: SectionProps) => {
    return (
        <ul className="flex flex-col mb-5 sm:mx-10">
            <li className="text-lg font-bold">{title}</li>

            {children}
        </ul>
    );
};

interface ItemProps extends Children {
    href: string;
}

const Item = ({ href, children }: ItemProps) => {
    return (
        <Link href={href}>
            <a className="text-gray-600 w-max transition hover:text-blue-600">
                {children}
            </a>
        </Link>
    );
};

export const Footer = () => {
    return (
        <footer className="w-full h-80 p-10 bg-gray-50 border-t border-gray-200">
            <ul className="flex flex-col sm:flex-row sm:justify-center">
                <Section title="Support">
                    <Item href="/">Contact Support</Item>
                </Section>
                <Section title="Privacy">
                    <Item href="/">Cookie Policy</Item>
                </Section>

                <Section title="Information">
                    <Item href="/">About</Item>
                </Section>
            </ul>
        </footer>
    );
};
