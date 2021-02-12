import Footer from "components/core/Footer"
import Navbar from "components/core/Navbar"
import Header from "components/pages/index/Header"
import Sections from "components/pages/index/Sections"
import Head from "next/head"

const Index = () => {
  return (
    <div>
      <Head>
        <title>The Pit Exchange</title>
      </Head>

      <main>
        <Navbar />
        <Header />
        <Sections />
        <Footer />
      </main>
    </div>
  )
}

export default Index
