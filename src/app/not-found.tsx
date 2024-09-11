"use client";

import Link from 'next/link'
import Header from "./components/v2/header"

const Custom404 = () => {
    return(
        <div className="min-h-screen flex flex-col overflow-x-hidden bg-radial-gradient">
            <Header />
            <div className="h-full mt-56 flex flex-col w-full justify-center items-center">
                <span className="text-5xl text-white font-bold">
                    Opps.... Looks like you are lost
                </span>
                <Link className='text-white text-base mt-10' href="/">
                    Let us help you get back to home page by clicking here
                </Link>
            </div>
        </div>
    );
}

export default Custom404;