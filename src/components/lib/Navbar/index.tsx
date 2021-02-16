import Content from "components/pages/index/Content"
import NextLink from "next/link"
import React from "react"
import Children from "utils/children"
import DesktopView from "./views/Desktop"
import MobileView from "./views/Mobile"

export default function Navbar() {
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

interface LinkProps extends Children {
  href: string
}

function Link({ href, children }: LinkProps) {
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

function NavElements() {
  return (
    <>
      <Link href="/mystic-searcher">Mystic Searcher</Link>
      <Link href="/mystic-searcher">Purchase</Link>
      <Link href="/realtime">Real Time Market</Link>
    </>
  )
}
