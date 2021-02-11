import { render } from "@testing-library/react"
import { Content } from "."

describe("Content", () => {
  it("renders its children", () => {
    const { getByText } = render(<Content>Hello World!</Content>)

    const content = getByText(/hello world!/i)

    expect(content).toBeInTheDocument()
  })

  it("has x padding if noXPadding is equal to false", () => {
    const { getByText } = render(<Content>Hello World!</Content>)

    const content = getByText(/hello world!/i)

    expect(content).toHaveClass("px-4 md:px-16")
  })

  it("has no x padding if noXPadding is equal to true", () => {
    const { getByText } = render(<Content noXPadding>Hello World!</Content>)

    const content = getByText(/hello world!/i)

    expect(content).not.toHaveClass("px-4 md:px-16")
  })

  it("injects the className prop to a wrapper div", () => {
    const { getByText } = render(
      <Content className="bg-gray-50">Hello World!</Content>
    )

    const wrapper = getByText(/hello world!/i).parentElement

    expect(wrapper).toHaveClass("bg-gray-50")
  })
})
