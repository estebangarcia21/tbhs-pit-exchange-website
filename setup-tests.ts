import "@testing-library/jest-dom"

const children = () => ({ children }) => children

jest.mock("next/head", () => children())

process.env = {
  ...process.env,
  // @ts-ignore
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    path: "/_next/image",
    loader: "default"
  }
}
