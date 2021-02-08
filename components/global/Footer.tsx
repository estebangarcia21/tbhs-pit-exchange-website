import { Content } from "components/pages/index/Content";
import Link from "next/link";
import React from "react";
import { Children } from "utils/children";

interface SectionProps extends Children {
    title: string;
    odd?: boolean;
}

interface ItemProps extends Children {
    href: string;
}

const Section = ({ title, odd, children }: SectionProps) => {
    return (
        <ul
            className={`flex flex-col space-y-1 ${
                odd ? "" : "border-l"
            } lg:border-l border-gray-200 border-dashed h-auto px-6 pb-6`}
        >
            <li className="text-md font-semibold">{title}</li>

            {children}
        </ul>
    );
};

const Item = ({ href, children }: ItemProps) => {
    return (
        <li>
            <Link href={href}>
                <a className="text-sm text-coolGray-700 cursor-pointer transition hover:text-teal-600">
                    {children}
                </a>
            </Link>
        </li>
    );
};

export const Footer = () => {
    return (
        <div className="bg-grayBlueTint">
            <Content>
                <footer className="grid grid-cols-2 lg:grid-cols-4 justify-center min-h-64 py-6">
                    <div className="px-6 lg:px-0">
                        <h1 className="font-bold text-2xl mr-10">
                            The Pit Exchange
                        </h1>

                        <h2 className="text-gray-500 text-sm">
                            &copy; Stevemmmmm 2020 - {new Date().getFullYear()}
                        </h2>
                    </div>

                    <Section title="Community">
                        <Item href="/">Support</Item>
                        <Item href="/">Community Guidelines</Item>
                        <Item href="/">Discord</Item>
                    </Section>

                    <Section title="Legal" odd>
                        <Item href="/">Account Security</Item>
                        <Item href="/">Cookie Policy</Item>
                        <Item href="/">Donations</Item>
                    </Section>

                    <Section title="Company">
                        <Item href="/">Stevemmmmm</Item>
                        <Item href="/">The Blue Hats</Item>
                        <Item href="/">Terms of Service</Item>
                    </Section>
                </footer>
            </Content>
        </div>
    );
};
