import Navbar from './sections/Navbar'
import Banner from './sections/Banner'
import Layout from './components/Layout'
import About_Me from './sections/About_Me'
import Technologies from './sections/Technologies'
import Contact_Me from './sections/Contact_Me'
import { Projects } from './sections/Projects'

export default function Home() {
  return (
    <>
      <Layout>
        <Navbar />
        <Banner />
        <About_Me />
        <Technologies />
        <Projects />
        <Contact_Me />
      </Layout>
    </>

  )
}
