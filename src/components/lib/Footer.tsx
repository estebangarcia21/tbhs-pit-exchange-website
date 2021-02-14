import Content from "components/pages/index/Content"
import Link from "next/link"
import React from "react"
import tw from "twin.macro"
import Children from "utils/children"

interface SectionProps extends Children {
  title: string
  odd?: boolean
}

const Section = ({ title, odd, children }: SectionProps) => {
  return (
    <ul
      css={[
        tw`flex flex-col space-y-1 h-auto sm:px-6 pb-6 lg:border-l border-gray-200 border-dashed`,
        !odd && tw`sm:border-l`
      ]}
    >
      <li tw="text-grayBlue font-medium">{title}</li>

      {children}
    </ul>
  )
}

interface ItemProps extends Children {
  href: string
}

const Item = ({ href, children }: ItemProps) => {
  return (
    <li>
      <Link href={href}>
        <a tw="text-sm text-transparentBlue cursor-pointer transition hover:text-indigo-500">
          {children}
        </a>
      </Link>
    </li>
  )
}

const Footer = () => {
  return (
    <Content className="bg-white shadow-inner">
      <footer
        data-testid="std-footer"
        tw="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center min-h-64 py-6"
      >
        <div tw="sm:px-6 mb-6">
          <h1 tw="font-semibold text-2xl text-grayBlue mr-10">
            The Pit Exchange
          </h1>

          <h2 tw="text-transparentBlue text-sm">
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

export default Footer
