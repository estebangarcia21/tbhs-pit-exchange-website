import Children from "utils/children"

interface ContentProps extends Children {
  className?: string
  noYPadding?: boolean
}

const Content = ({ noYPadding, className, children }: ContentProps) => {
  const element = (
    <div className="mx-8 md:mx-16">
      <div
        className={`relative z-10 mx-auto max-w-7xl ${
          !noYPadding && "py-8 md:py-12"
        }`}
      >
        {children}
      </div>
    </div>
  )

  return className ? <div className={className}>{element}</div> : element
}

export default Content
