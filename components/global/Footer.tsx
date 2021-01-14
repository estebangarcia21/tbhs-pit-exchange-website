import { withChildren } from "@App/utils/children";
import Link from "next/link";

const Section = withChildren<{ title: string }>(({ title, children }) => {
    return (
        <ul className="flex flex-col mb-5 sm:mx-10">
            <li className="text-lg font-bold">{title}</li>

            {children}
        </ul>
    );
});

const Item = withChildren<{ href: string }>(({ href, children }) => {
    return (
        <Link href={href}>
            <a className="text-gray-600 w-max transition hover:text-blue-600">
                {children}
            </a>
        </Link>
    );
});

export const Footer = () => {
    return (
        <footer className="w-full h-80 p-10 bg-gray-50 border-t border-gray-200">
            <ul className="flex flex-col sm:flex-row sm:justify-center">
                <Section title="Support">
                    <Item href="/">Contact Support</Item>
                </Section>
                <Section title="Privacy">
                    <Item href="/">Your Data</Item>
                    <Item href="/">Cookie Policy</Item>
                </Section>

                <Section title="Information">
                    <Item href="/">About</Item>
                </Section>
            </ul>
        </footer>
    );
};
