import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { RiCloseLine } from "react-icons/ri"
import { animated, useTransition } from "react-spring"
import NavbarView from "./navbar-view"

export default function MobileView({ items: Items }: NavbarView) {
  const [isActive, setActive] = useState(false)

  const transitions = useTransition(isActive, null, {
    from: {
      transform: "scale(0.95)",
      opacity: 0.5
    },
    enter: {
      transform: "scale(1)",
      opacity: 1
    },
    leave: {
      transform: "scale(0.95)",
      opacity: 0
    },
    config: {
      clamp: true,
      mass: 1,
      tension: 300,
      friction: 25
    }
  })

  return (
    <>
      <AiOutlineMenu
        className="text-3xl cursor-pointer md:hidden ml-auto"
        onClick={() => setActive(true)}
      />

      {transitions.map(
        ({ item, props }) =>
          item && (
            <div className="md:hidden absolute w-full h-72 p-6 left-0 top-0 z-50">
              <animated.div
                style={props}
                className="bg-white shadow-lg rounded-md border p-5 transform origin-top-right"
              >
                <RiCloseLine
                  className="absolute top-5 right-5 text-2xl cursor-pointer"
                  onClick={() => setActive(false)}
                >
                  Go Back
                </RiCloseLine>

                <ul className="space-y-5">
                  <Items />
                </ul>
              </animated.div>
            </div>
          )
      )}
    </>
  )
}
