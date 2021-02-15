import Children from "utils/children"

interface ContentProps extends Children {
  className?: string
  noXPadding?: boolean
  noYPadding?: boolean
}

const Content = ({
  noYPadding,
  noXPadding,
  className,
  children
}: ContentProps) => {
  return (
    <div className={`${noXPadding ?? "px-8 md:px-16"} ${className}`}>
      <div
        className={`relative z-10 mx-auto max-w-7xl ${
          noYPadding ?? "py-8 md:py-12"
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default Content
