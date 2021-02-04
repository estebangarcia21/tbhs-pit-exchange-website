import { Children } from "utils/children";

export const Content = ({ children }: Children) => {
    return <div className="flex flex-col min-h-screen">{children}</div>;
};

export const MainContent = ({ children }: Children) => {
    return <main className="flex-grow">{children}</main>;
};
