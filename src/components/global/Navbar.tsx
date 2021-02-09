import { Children } from "utils/children"
import Link from "next/link"

interface NavbarButtonProps extends Children {
    href: string
    inverted?: boolean
}

const NavbarButton = ({ href, children, inverted }: NavbarButtonProps) => {
    const normalStyles =
        "border-gray-600 bg-white text-black hover:bg-black hover:text-white"
    const invertedStyles = "border-black bg-black text-white hover:bg-gray-900"

    return (
        <Link href={href}>
            <a
                className={`py-2 px-6 border rounded-sm transition ${
                    inverted ? invertedStyles : normalStyles
                }`}
            >
                {children}
            </a>
        </Link>
    )
}

const NavbarItem = ({ children }: Children) => {
    return <li>{children}</li>
}

const Container = ({ children }: Children) => {
    return <div className="flex flex-row space-x-5">{children}</div>
}

export const Navbar = () => {
    return (
        <nav className="border-b h-16 bg-white border-gray-200">
            <ul className="flex flex-row flex-wrap items-center content-center justify-between h-full mx-5 space-x-5">
                <Container>
                    {/* <NavbarItem>Mystic Searcher</NavbarItem>
                    <NavbarItem>Hey</NavbarItem> */}
                </Container>

                <Container>
                    <NavbarItem>
                        <NavbarButton href="/login">Log In</NavbarButton>
                    </NavbarItem>
                    <NavbarItem>
                        <NavbarButton href="/signup" inverted>
                            Sign Up
                        </NavbarButton>
                    </NavbarItem>
                </Container>
            </ul>
        </nav>
    )
}
