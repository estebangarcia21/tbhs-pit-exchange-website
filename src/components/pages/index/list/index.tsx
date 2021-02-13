import { IconType } from "react-icons"
import Children from "utils/children"

export const List = ({ children }: Children) => {
  return <ul className="text-coolGray-600 my-3 space-y-2">{children}</ul>
}

interface ListItemProps extends Children {
  icon: [IconType, string]
}

export const ListItem = ({
  children,
  icon: [Icon, ariaLabel]
}: ListItemProps) => {
  return (
    <li className="flex flex-row items-center text-transparentBlue">
      <Icon className="mr-2 text-indigo-500" aria-label={ariaLabel} />{" "}
      {children}
    </li>
  )
}
