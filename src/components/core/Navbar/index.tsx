import NextLink from "next/link"
import Children from "utils/children"

interface LinkProps extends Children {
  href: string
}

const Link = ({ href, children }: LinkProps) => {
  return (
    <li>
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
    </li>
  )
}

const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-row">
        <Link href="/mystic-searcher">Mystic Searcher</Link>
        <Link href="/realtime">Real Time Market</Link>
      </ul>
    </nav>
  )
}

export default Navbar
