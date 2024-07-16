const Subscribe = () => {
    return(
        <div className="w-2/3 mx-auto rounded-xl py-24 mb-10 bg-radial-gradient-innerComponent flex items-center justify-center max-md:flex-col">
            <div className="ml-3 text-white w-1/3 max-md:w-full max-md:mx-7 max-md:my-3 max-md:text-center">
                <h3 className="text-xl font-bold font-primary">Subscribe for the latest updates on Dextr Exchange</h3>
            </div>
            <div className="flex justify-center w-2/3 max-md:w-full max-md:mx-7 max-md:my-3">
                <input
                    type="email"
                    placeholder="Email"
                    className="bg-gray-700 pl-5 text-white p-2 rounded-l-full"
                />
                <button className="bg-teal-500 hover:bg-teal-700 text-black py-2 px-4 rounded-r-full">
                    Subscribe
                </button>
            </div>
        </div>
    );
}

export default Subscribe;