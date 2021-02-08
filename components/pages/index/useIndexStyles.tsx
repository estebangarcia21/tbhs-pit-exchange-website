import { Children } from "utils/children"

const Section = ({ children }: Children) => {
    return <section className="mb-5">{children}</section>
}

const Title = ({ children }: Children) => {
    return <h1 className="text-4xl font-bold text-gray-900">{children}</h1>
}

const Subtitle = ({ children }: Children) => {
    return <p className="text-xl text-gray-600 font-medium my-2">{children}</p>
}

const SectionHalfContainer = ({ children }: Children) => {
    return <div className="w-1/2">{children}</div>
}

export const useIndexStyles = () => ({
    Section,
    Title,
    Subtitle,
    SectionHalfContainer,
})
