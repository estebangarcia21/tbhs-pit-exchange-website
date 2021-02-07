import { Children } from "utils/children";

interface ContentProps extends Children {
    noXPadding?: boolean;
}

export const Content = ({ noXPadding, children }: ContentProps) => {
    return (
        <div
            className={`mx-auto max-w-7xl ${
                !noXPadding && "px-4 md:px-16"
            } py-2 md:py-12`}
        >
            {children}
        </div>
    );
};
