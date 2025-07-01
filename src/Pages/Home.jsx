import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import OurPolicy from '../Components/OurPolicy'
import NewsBox from '../Components/NewBox'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsBox />
      <Footer />
    </>
  )
}
