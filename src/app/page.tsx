import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Partners from "./components/partners"
import Laptop from "./components/laptop"
import Features from "./components/features"
import Difference from "./components/difference"
import FAQs from "./components/faqs"
import Footer from "./components/footer"
import Blogs from "./components/blogs"

export default function Home() {
  return (
    <div className=" text-white bg-[#0c0c14] bg-bgPattern h-full">
      <div className="bg-gradient-to-t to-[#051e3679] from-transparent via-transparent">
        <Navbar />
        <Hero />
        {/* <Partners /> */}
      </div>

      <Laptop />
      <Features />
      <Difference />
      {/* <Blogs /> */}
      {/* <FAQs /> */}
      <Footer />
    </div>

  )
}
