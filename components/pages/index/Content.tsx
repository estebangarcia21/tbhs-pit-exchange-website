import { Children } from "utils/children";

export const Content = ({ children }: Children) => {
    return (
        <div className="mx-auto max-w-7xl px-4 py-2 md:px-16 md:py-12">
            {children}
        </div>
    );
};
