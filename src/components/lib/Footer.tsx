import Content from "components/pages/index/Content"
import Link from "next/link"
import React from "react"
import Children from "utils/children"

export default function Footer() {
  return (
    <Content className="bg-white shadow-inner">
      <footer
        data-testid="std-footer"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center min-h-64 py-6"
      >
        <div className="pr-6 lg:pr-0 mb-6">
          <h1 className="font-semibold text-2xl text-grayBlue mr-10">
            The Pit Exchange
          </h1>

          <h2 className="text-transparentBlue text-sm">
            &copy; Stevemmmmm 2020 - {new Date().getFullYear()}
          </h2>
        </div>

        <Section title="Community">
          <Item href="/support">Support</Item>
          <Item href="/community-guidelines">Community Guidelines</Item>
          <Item href="/social-media">Discord</Item>
        </Section>

        <Section title="Legal" odd>
          <Item href="/account-security">Account Security</Item>
          <Item href="/cookie-policy">Cookie Policy</Item>
          <Item href="/donate">Donations</Item>
        </Section>

        <Section title="Company">
          <Item href="/company/stevemmmmm">Stevemmmmm</Item>
          <Item href="/company/the-blue-hats">The Blue Hats</Item>
          <Item href="/terms-of-service">Terms of Service</Item>
        </Section>
      </footer>
    </Content>
  )
}

interface SectionProps extends Children {
  title: string
  odd?: boolean
}

interface ItemProps extends Children {
  href: string
}

function Section({ title, odd, children }: SectionProps) {
  return (
    <ul
      className={`flex flex-col space-y-1 ${
        odd ?? "sm:border-l sm:px-6"
      } lg:border-l lg:px-6 border-gray-200 border-dashed h-auto pb-6`}
    >
      <li className="text-md text-grayBlue font-semibold">{title}</li>

      {children}
    </ul>
  )
}

function Item({ href, children }: ItemProps) {
  return (
    <li>
      <Link href={href}>
        <a className="text-sm text-transparentBlue cursor-pointer transition hover:text-indigo-500">
          {children}
        </a>
      </Link>
    </li>
  )
}
