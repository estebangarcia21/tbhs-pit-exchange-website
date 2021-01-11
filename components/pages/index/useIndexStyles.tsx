import { withChildren } from "@App/utils/children";

const Section = withChildren(({ children }) => {
    return <section className="mb-5">{children}</section>;
});

const Title = withChildren(({ children }) => {
    return <h1 className="text-4xl font-bold text-gray-900">{children}</h1>;
});

const Subtitle = withChildren(({ children }) => {
    return <p className="text-xl text-gray-600 font-medium my-2">{children}</p>;
});

export const useIndexStyles = () => ({
    Section,
    Title,
    Subtitle,
});
