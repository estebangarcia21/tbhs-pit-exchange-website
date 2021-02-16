import Content from "components/pages/index/Content"
import NextLink from "next/link"
import React from "react"
import Children from "utils/children"
import DesktopView from "./views/Desktop"
import MobileView from "./views/mobile"

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

const NavElements = () => {
  return (
    <>
      <Link href="/mystic-searcher">Mystic Searcher</Link>
      <Link href="/mystic-searcher">Purchase</Link>
      <Link href="/realtime">Real Time Market</Link>
    </>
  )
}

const Navbar = () => {
  const viewProps = { items: NavElements }

  return (
    <Content noYPadding className="bg-white border-b shadow-sm mb-8 md:mb-16">
      <nav className="h-20 flex flex-row items-center">
        <DesktopView {...viewProps} />
        <MobileView {...viewProps} />
      </nav>
    </Content>
  )
}

export default Navbar
