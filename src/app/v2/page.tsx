"use client";

import Header from "../components/v2/header"
import HeroElement from "../components/v2/hero"
import Features from "../components/v2/features"
import Benefits from "../components/v2/benefits"
import ComparisonTable from "../components/v2/comparisionTable"
import Subscribe from "../components/v2/subscribe"
import Footer from "../components/v2/footer";
import Head from "next/head";
import Blogs from "../components/v2/blogs";
import Testnet from "../components/v2/testnet";

const v2 = () => {
    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          <Head>
            <title>Dextr Exchange</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {/* ALL PAGES BELOW SHOULD HAVE mx-10 & p-6 for standardization */}
          <div className="bg-radial-gradient">
            <Header />
            <HeroElement />
            <Features />
          </div>

          <div className="w-full bg-linear-gradient pb-10">
            <Benefits />
            <Testnet />
            <ComparisonTable />
          </div>
          <div className="w-full bg-radial-gradient-component">
            <Blogs />
            {/* <Subscribe /> */}
            <Footer />
          </div>
        </div>
      );
}

export default v2;