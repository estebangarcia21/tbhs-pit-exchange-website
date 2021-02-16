import Children from "utils/children"

interface SideTextProps extends Children {
  title: string
}

export default function SideText({ children, title }: SideTextProps) {
  return (
    <div className="pr-7 lg:border-l lg:pl-6 border-gray-200 border-dashed">
      <h1 className="font-semibold text-grayBlue">{title}</h1>
      <p className="mt-1 text-transparentBlue">{children}</p>
    </div>
  )
}
