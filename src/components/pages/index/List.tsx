import { IconType } from "react-icons"
import twc from "tailwindcss-components"
import Children from "utils/children"

export const List = twc.ul`text-coolGray-600 my-3 space-y-2`
export const ListItem = twc.li`flex flex-row items-center text-transparentBlue`

interface ListItemWithIconProps extends Children {
  icon: [IconType, string]
}

export const ListItemWithIcon = ({
  children,
  icon: [Icon, ariaLabel]
}: ListItemWithIconProps) => {
  return (
    <ListItem>
      <Icon className="mr-2 text-indigo-600" aria-label={ariaLabel} />{" "}
      {children}
    </ListItem>
  )
}
