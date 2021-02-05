import { DefaultSeo } from "next-seo";
import { QueryClient, QueryClientProvider } from "react-query";
import "styles/index.css";
import SEO from "../next-seo.config";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}
