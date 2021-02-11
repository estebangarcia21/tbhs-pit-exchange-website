import { Footer } from "components/global/footer/Footer"
import { Header } from "components/pages/index/layout/Header"
import { Sections } from "components/pages/index/layout/Sections"
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
