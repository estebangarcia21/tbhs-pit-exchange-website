import { Children } from "utils/children"

interface ContentProps extends Children {
  className?: string
  noXPadding?: boolean
}

export const Content = ({ noXPadding, className, children }: ContentProps) => {
  const element = (
    <div
      className={`relative z-10 mx-auto max-w-7xl ${
        !noXPadding && "px-4 md:px-16"
      } py-2 md:py-12`}
    >
      {children}
    </div>
  )

  return className ? <div className={className}>{element}</div> : element
}
