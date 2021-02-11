import { render } from "@testing-library/react"
import { TextSection } from "./TextSection"

describe("TextSection", () => {
  it("renders the children", () => {
    const { getByText } = render(
      <TextSection title="Title" img={["/", "alt"]}>
        Hello World!
      </TextSection>
    )

    const text = getByText("Hello World!")

    expect(text).toBeInTheDocument()
  })

  it("renders the title", () => {
    const { getByText } = render(
      <TextSection title="Title" img={["/", "alt"]}>
        Hello World!
      </TextSection>
    )

    const title = getByText("Title")

    expect(title).toBeInTheDocument()
  })

  it("renders the image", () => {
    const { getByAltText } = render(
      <TextSection title="Title" img={["/", "alt"]}>
        Hello World!
      </TextSection>
    )

    const img = getByAltText("alt")

    expect(img).toBeInTheDocument()
  })

  it("is not aligned to the right if alignRight is equal to false", () => {
    const { getByAltText } = render(
      <TextSection title="Title" img={["/", "alt"]}>
        Hello World!
      </TextSection>
    )

    const img = getByAltText("alt")

    expect(img).toHaveClass("ml-12")
    expect(img.parentElement).toHaveClass("text-left flex-row items-center")
  })

  it("is aligned to the right if alignRight is equal to true", () => {
    const { getByAltText } = render(
      <TextSection title="Title" img={["/", "alt"]} alignRight>
        Hello World!
      </TextSection>
    )

    const img = getByAltText("alt")

    expect(img).toHaveClass("mr-12")
    expect(img.parentElement).toHaveClass("lg:text-right flex-row-reverse")
  })
})
