import { Footer } from "components/core/Footer"
import { Header } from "components/pages/index/Header"
import { Sections } from "components/pages/index/Sections"
import Head from "next/head"

const Index = () => {
  return (
    <div>
      <Head>
        <title>The Pit Exchange</title>
      </Head>

      <main>
        <Header />
        <Sections />
        <Footer />
      </main>
    </div>
  )
}

export default Index
