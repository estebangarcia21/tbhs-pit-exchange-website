import { render } from "@testing-library/react"
import { HeaderCircles } from "./HeaderCircles"

describe("Header Image", () => {
    it("displays an image with the forwarded classnames", () => {
        const { getByAltText } = render(
            <HeaderCircles position="left-96 top-48" />
        )

        const container = getByAltText("Circles")

        expect(container.className).toBe(
            "absolute z-0 hidden lg:block w-96 left-96 top-48"
        )
    })
})
