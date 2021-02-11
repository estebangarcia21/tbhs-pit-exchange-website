import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from "next/document"

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
  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    data: {
      isDark: await getUserTheme()
    }
  }
}

AppDocument.renderDocument = Document.renderDocument

const getUserTheme = async () => false

// const getUserTheme = async () =>
//     await request<UserAmountQuery>(API_URL, UserAmountDocument);

export default AppDocument
