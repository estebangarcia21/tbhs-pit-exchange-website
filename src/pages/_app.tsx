import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { DefaultSeo } from "next-seo"
import "styles/index.css"
import SEO from "../next-seo.config"

const client = new ApolloClient({
    credentials: "include",
    cache: new InMemoryCache()
})

export default function App({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </ApolloProvider>
    )
}
