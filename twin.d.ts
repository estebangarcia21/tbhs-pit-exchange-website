import styledImport, { css as cssImport, CSSProp } from "styled-components"
import "twin.macro"

declare module "twin.macro" {
  const styled: typeof styledImport
  const css: typeof cssImport
}

declare module "react" {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp
  }
  interface SVGProps extends SVGProps<SVGSVGElement> {
    css?: CSSProp
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string
    }
  }
}
