import { IconType } from "react-icons"
import { Children } from "utils/children"

interface InfoCard extends Children {
  title: string
  icon: [IconType, string]
}

export const InfoCard = ({
  icon: [Icon, ariaLabel],
  title,
  children
}: InfoCard) => {
  return (
    <div className="relative flex-grow md:m-5 xl:m-0 sm:flex-grow-0 sm:w-80 py-5">
      <Icon
        className="text-3xl text-indigo-600 z-50 relative"
        role="img"
        aria-label={ariaLabel}
      />
      <Icon
        className="absolute top-6 left-1 z-0 opacity-50 text-3xl text-lightBlue-500"
        role="img"
        aria-label={ariaLabel}
      />

      <h2 className="my-1 tracking-wide font-medium text-2xl text-coolGray-800">
        {title}
      </h2>

      <p className="text-coolGray-600 leading-7">{children}</p>
    </div>
  )
}
