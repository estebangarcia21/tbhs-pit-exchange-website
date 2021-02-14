import { IconType } from "react-icons"
import Children from "utils/children"

interface InfoCardProps extends Children {
  title: string
  icon: [IconType, string]
  spanColumns?: boolean
}

export const InfoCard = ({
  icon: [Icon, ariaLabel],
  title,
  children,
  spanColumns
}: InfoCardProps) => {
  return (
    <div
      className={`relative flex-grow md:m-5 xl:m-0 sm:flex-grow-0 py-5 ${
        spanColumns && "md:col-span-2 lg:col-span-1"
      }`}
    >
      <Icon
        className="text-3xl text-indigo-600 z-50 relative"
        role="img"
        aria-label={ariaLabel}
      />
      <Icon
        className="absolute top-6 left-1 z-0 opacity-20 text-3xl text-lightBlue-500"
        role="img"
        aria-label={ariaLabel}
      />

      <h2 className="my-1 font-medium text-2xl text-grayBlue">{title}</h2>

      <p className="leading-7 text-transparentBlue">{children}</p>
    </div>
  )
}

export default InfoCard
