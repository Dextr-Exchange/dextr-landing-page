import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Partners from "./components/partners"
import Laptop from "./components/laptop"
import Features from "./components/features"
import Difference from "./components/difference"
import FAQs from "./components/faqs"
import Footer from "./components/footer"
import PoweredBy from "./components/poweredBy"


export default function Home() {
  return (
    <div className=" text-white bg-[#00091B] bg-bgPattern h-full">
      <div className="bg-gradient-to-t to-[#0466c879]  from-transparent via-transparent">
        <Navbar />
        <Hero />
        <PoweredBy />
        {/* <Partners /> */}
      </div>
      <Laptop />
      <Features />
      <Difference />
      <FAQs />
      <Footer />
    </div>

  )
}
