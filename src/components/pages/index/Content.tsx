import Children from "utils/children"

interface ContentProps extends Children {
  className?: string
  noXMargin?: boolean
  noYPadding?: boolean
}

const Content = ({
  noYPadding,
  noXMargin,
  className,
  children
}: ContentProps) => {
  return (
    <div className={`${noXMargin ?? "mx-8 md:mx-16"} ${className}`}>
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
