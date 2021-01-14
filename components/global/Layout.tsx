import { withChildren } from "@App/utils/children";

export const Content = withChildren(({ children }) => {
    return <div className="flex flex-col min-h-screen">{children}</div>;
});

export const MainContent = withChildren(({ children }) => {
    return <main className="flex-grow">{children}</main>;
});
