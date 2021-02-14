import Children from "utils/children"

export const Header = ({ children }: Children) => {
  return <h1 className="text-3xl font-semibold text-grayBlue">{children}</h1>
}

export const Text = ({ children }: Children) => {
  return <p className="my-2 leading-7 text-transparentBlue">{children}</p>
}
