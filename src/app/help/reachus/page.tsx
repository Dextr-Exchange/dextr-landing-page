"use client";

import Header from "../../components/v2/header"

const office = () => {
    return(
        <div className="min-h-screen flex flex-col overflow-x-hidden bg-radial-gradient">
            <Header />
            <div className="mt-40 flex w-full mx-10 gap-16">
                <div className="w-1/2 flex items-end justify-end">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.4963790039128!2d77.16915957550951!3d28.510083494572417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e6ca1272aa7%3A0x64c217cb45e90659!2s736%2C%20Vasant%20Kunj%20Rd%2C%20Sector%20A%2C%20Sector-A%2C%20Vasant%20Kunj%2C%20New%20Delhi%2C%20Delhi%20110070%2C%20India!5e0!3m2!1sen!2sus!4v1726000834793!5m2!1sen!2sus"
                        width="500" 
                        height="350" 
                        frameBorder="0"
                        loading="lazy"
                    />
                </div>
                <div className="w-1/2 flex flex-col h-full text-white justify-center pt-16">
                    <span className="text-3xl font-bold">
                        You can find us at:
                    </span>
                    <span className="mt-5">
                        Ganga Nursery, Sec D,<br /> Pkt -1, Kishangarh, Meharauli, <br/>Delhi-110030, India
                    </span>
                </div>
            </div>
        </div>
    );
}

export default office;

