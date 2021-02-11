import Link from "next/link"
import { HiChevronRight } from "react-icons/hi"
import Children from "utils/children"

interface ButtonProps extends Children {
  href: string
  white?: boolean
}

const Button = ({ children, href, white }: ButtonProps) => {
  const styles = white
    ? "text-gray-800 border border-gray-300 bg-white hover:bg-gray-100"
    : "bg-coolGray-800 text-white hover:bg-coolGray-700"

  return (
    <Link href={href}>
      <a
        className={`${styles} flex flex-row w-max items-center relative text-center py-1.5 px-6 mt-5 text-sm rounded-3xl font-semibold cursor-pointer text-black transition`}
      >
        {children} <HiChevronRight className="-mr-1" />
      </a>
    </Link>
  )
}

export default Button
