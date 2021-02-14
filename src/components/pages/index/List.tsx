import { IconType } from "react-icons"
import Children from "utils/children"
import tw from "twin.macro"

export const List = tw.ul`text-coolGray-600 my-3 space-y-2`
export const ListItem = tw.ul`flex flex-row items-center text-transparentBlue`

interface ListItemWithIconProps extends Children {
  icon: [IconType, string]
}

export const ListItemWithIcon = ({
  children,
  icon: [Icon, ariaLabel]
}: ListItemWithIconProps) => {
  return (
    <ListItem>
      <Icon className="mr-2 text-indigo-500" aria-label={ariaLabel} />{" "}
      {children}
    </ListItem>
  )
}
