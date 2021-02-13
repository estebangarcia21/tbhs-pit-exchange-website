import { render } from "@testing-library/react"
import Content from "../Content"

describe("Content", () => {
  it("renders its children", () => {
    const { getByText } = render(<Content>Hello World!</Content>)

    const content = getByText(/hello world!/i)
    expect(content).toBeInTheDocument()
  })

  it("has x margin if noXMargin is equal to false", () => {
    const { getByText } = render(<Content>Hello World!</Content>)

    const content = getByText(/hello world!/i).parentElement
    expect(content).toHaveClass("mx-8 md:mx-16")
  })

  it("has no x margin if noXMargin is equal to true", () => {
    const { getByText } = render(<Content noXMargin>Hello World!</Content>)

    const content = getByText(/hello world!/i).parentElement
    expect(content).not.toHaveClass("mx-8 md:mx-16")
  })

  it("has y padding if noYPadding is equal to false", () => {
    const { getByText } = render(<Content>Hello World!</Content>)

    const content = getByText(/hello world!/i)
    expect(content).toHaveClass("py-8 md:py-12")
  })

  it("has no y padding if noYPadding is equal to true", () => {
    const { getByText } = render(<Content noYPadding>Hello World!</Content>)

    const content = getByText(/hello world!/i)
    expect(content).not.toHaveClass("py-8 md:py-12")
  })

  it("injects the className prop to a wrapper div", () => {
    const { getByText } = render(
      <Content className="bg-gray-50">Hello World!</Content>
    )

    const wrapper = getByText(/hello world!/i).parentElement
    expect(wrapper).toHaveClass("bg-gray-50")
  })
})
