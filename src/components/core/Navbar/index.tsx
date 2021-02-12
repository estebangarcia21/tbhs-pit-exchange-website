import Content from "components/pages/index/Content"
import NextLink from "next/link"
import Children from "utils/children"

interface LinkProps extends Children {
  href: string
}

const Link = ({ href, children }: LinkProps) => {
  return (
    <li>
      <NextLink href={href}>
        <a className="text-coolGray-700 font-medium transition hover:text-coolGray-500">
          {children}
        </a>
      </NextLink>
    </li>
  )
}

const Navbar = () => {
  return (
    <Content noYPadding className="bg-coolGray-50 border-b border-gray-100">
      <nav>
        <ul className="flex flex-row justify-between items-center h-20 max-w-lg">
          <Link href="/mystic-searcher">Mystic Searcher</Link>
          <Link href="/mystic-searcher">Purchase</Link>
          <Link href="/realtime">Real Time Market</Link>
        </ul>
      </nav>
    </Content>
  )
}

export default Navbar
