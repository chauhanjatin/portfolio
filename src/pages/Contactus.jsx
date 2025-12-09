import React from "react";
import Footer from "../components/Footer";
import Cta from "../components/Cta";

export default function Contactus() {
  return (
    <div>
      <div className="containerX relative z-10">
        <h2 className="text-center mb-[60px] mt-[160px]">
          Your Next Big Idea Begins Here <br /> Contact Us Today
        </h2>

        <div className="w-full flex justify-center">
          <div className="w-[90%] md:w-[70%] lg:w-[60%] bg-[#8CD565] p-[50px] rounded-[30px] shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full py-3 px-5 rounded-[40px] placeholder:text-black border border-[#1E1E1E] outline-none bg-transparent"
              />
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full py-3 px-5 rounded-[40px] placeholder:text-black border border-[#1E1E1E] outline-none bg-transparent"
              />
            </div>

            <div className="mt-5">
              <input
                type="text"
                placeholder="Enter Project Type"
                className="w-full py-3 px-5 rounded-[40px] placeholder:text-black border border-[#1E1E1E] outline-none bg-transparent"
              />
            </div>

            <div className="mt-5">
              <textarea
                placeholder="Enter Message"
                rows="5"
                className="w-full py-3 px-5 rounded-[20px] placeholder:text-black border border-[#1E1E1E] outline-none resize-none bg-transparent"
              />
            </div>

            <div className="mt-8">
              <button className="w-full bg-black hover:bg-transparent border border-[#1E1E1E] hover:text-black   text-white py-3 rounded-[40px] text-lg font-light transition-all duration-300">
                Send Message
              </button>
            </div>
          </div>
        </div>

        <Cta></Cta>
      </div>
      <Footer></Footer>
    </div>
  );
}
