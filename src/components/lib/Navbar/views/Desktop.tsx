import NavbarView from "./navbar-view"

export default function DesktopView({ items: Items }: NavbarView) {
  return (
    <ul className="hidden md:flex flex-row justify-between items-center h-full w-full max-w-lg">
      <Items />
    </ul>
  )
}
