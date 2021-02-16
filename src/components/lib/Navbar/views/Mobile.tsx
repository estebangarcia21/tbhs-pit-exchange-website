import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { RiCloseLine } from "react-icons/ri"
import NavbarView from "./navbar-view"

export default function MobileView({ items: Items }: NavbarView) {
  const [isActive, setActive] = useState(false)

  return (
    <>
      <AiOutlineMenu
        className="text-3xl cursor-pointer md:hidden"
        onClick={() => setActive(true)}
      />

      {isActive && (
        <div className="md:hidden absolute w-full h-72 p-6 left-0 top-0 z-50">
          <div className="relative bg-white shadow-lg rounded-md border p-5">
            <RiCloseLine
              className="absolute top-5 right-5 text-2xl cursor-pointer"
              onClick={() => setActive(false)}
            >
              Go Back
            </RiCloseLine>

            <ul className="space-y-5">
              <Items />
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
