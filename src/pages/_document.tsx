import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from "next/document"
import { ServerStyleSheet } from "styled-components"

const AppDocument = ({ data }) => {
  return (
    <Html lang="en" className={data.isDark ? "dark" : undefined}>
      <Head>
        <link rel="shortcut icon" href="/icons/wing.svg" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

AppDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
      data: {
        isDark: await getUserTheme()
      }
    }
  } finally {
    sheet.seal()
  }
}

AppDocument.renderDocument = Document.renderDocument

const getUserTheme = async () => false

// const getUserTheme = async () =>
//     await request<UserAmountQuery>(API_URL, UserAmountDocument);

export default AppDocument
