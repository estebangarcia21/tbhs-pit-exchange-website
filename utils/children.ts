export interface Children {
    children: React.ReactNode;
}

export const withChildren = <T extends unknown = {}>(
    component: (props: T & Children) => JSX.Element
) => component;
