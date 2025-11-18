import satisfiedclients from "../assets/images/satisfied-clients.png";
import viewProjectArrow from "../assets/images/icons/viewproject-arrow.svg";
import instagramicon from "../assets/images/icons/instagram-icon.svg";
import heroimg1 from "../assets/images/hero-img1.png";
import heroimg2 from "../assets/images/hero-img2.png";
import heroimg3 from "../assets/images/hero-img3.png";
import heroimg4 from "../assets/images/hero-img4.png";
import heroimg5 from "../assets/images/hero-img5.png";
import { Link } from "react-router-dom";
import Cta from "../components/Cta";

export default function Hero() {
  return (
    <div>
      <div className="containerX relative z-10">
        <div className="mt-[160px] text-center">
          <div className="flex justify-center">
            <div className="mb-2.5 py-2 px-2.5 inline-flex items-center gap-2.5 bg-white rounded-[80px]">
              <div>
                <img src={satisfiedclients} alt="" />
              </div>
              <div>
                <strong>100+</strong> Satisfied Clients
              </div>
            </div>
          </div>

          <h1 className="text-[#1F1E1E]">
            I design digital experiences that connect brands with users through
            creativity and strategy.
          </h1>

          <h4 className="text-[#1F1E1E80] mt-[30px] mx-[126px]">
            Creative UI/UX Designer with 10+ years of experience crafting
            responsive, user-focused web and mobile apps. Blending aesthetics
            with functionality, I help brands build seamless and meaningful
            digital experiences that deliver both beauty and value.
          </h4>

          <div className="mt-[80px] bg-[#8CD565] py-3 px-6 border-[#8CD565] border border-1 inline-flex rounded-[40px] transition-all duration-300 hover:bg-transparent hover:border hover:border-black">
            <Link to="/">
              <h4 className="font-light">Say Hello Jatin</h4>
            </Link>
          </div>

          <div className="flex justify-center items-center mt-[60px] gap-5">
            <h4>Also explore my creative side</h4>
            <div>
              <Link
                className="flex gap-2.5"
                to="https://www.instagram.com/jatin.an.artist"
                target="_blank"
              >
                <img src={instagramicon} alt="" />
                <h4 className="underline">@jatin.an.artis</h4>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[100px] text-start">
            <div className="col-span-1 md:col-span-2 relative group overflow-hidden rounded-[40px]">
              <img
                className="w-full h-auto rounded-[40px] block"
                src={heroimg1}
                alt=""
              />

              <div
                className="absolute w-[calc(100%-20px)] left-1/2 -translate-x-1/2 bg-white rounded-[29px] py-4 px-5 bottom-[-120%] group-hover:bottom-2.5   
            transition-all duration-700 ease-in-out"
              >
                <div className="flex items-center gap-2.5">
                  <h3>Overc360</h3>
                  <span className="text-[#3E3B3980]">(Transport)</span>
                </div>

                <p className="mt-2">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus.
                </p>

                <div className="mt-3 flex justify-end">
                  <Link
                    to="/"
                    className="flex gap-2.5 bg-[#1F1E1E1A] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[#8CD565]"
                  >
                    <h4>View Project</h4>
                    <img src={viewProjectArrow} alt="" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative group overflow-hidden rounded-[40px]">
                <img
                  className="w-full h-auto rounded-[40px]"
                  src={heroimg2}
                  alt=""
                />

                <div
                  className="absolute w-[calc(100%-20px)] left-1/2 -translate-x-1/2 bg-white rounded-[29px] py-4 px-5 bottom-[-120%] group-hover:bottom-2.5   
            transition-all duration-700 ease-in-out"
                >
                  <div className="flex items-center gap-2.5">
                    <h3>Trudentz</h3>
                    <span className="text-[#3E3B3980]">(Dental)</span>
                  </div>

                  <p className="mt-2">
                    Trudentz is a multispeciality dental & orthodontic centre
                    that blends advanced digital dentistry with aesthetic
                    precision. It offers services like Digital Smile Design
                    (using in-house DTS PRO software), braces/aligners,
                    implants, and biomimetic restorations.
                  </p>

                  <div className="mt-3 flex justify-end">
                    <Link
                      to="/"
                      className="flex gap-2.5 bg-[#1F1E1E1A] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[#8CD565]"
                    >
                      <h4>View Project</h4>
                      <img src={viewProjectArrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-[40px]">
                <img
                  className="w-full h-auto rounded-[40px]"
                  src={heroimg3}
                  alt=""
                />

                <div
                  className="absolute w-[calc(100%-20px)] left-1/2 -translate-x-1/2 bg-white rounded-[29px] py-4 px-5 bottom-[-120%] group-hover:bottom-2.5   
            transition-all duration-700 ease-in-out"
                >
                  <div className="flex items-center gap-2.5">
                    <h3>Overc360</h3>
                    <span className="text-[#3E3B3980]">(Transport)</span>
                  </div>

                  <p className="mt-2">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                  </p>

                  <div className="mt-3 flex justify-end">
                    <Link
                      to="/"
                      className="flex gap-2.5 bg-[#1F1E1E1A] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[#8CD565]"
                    >
                      <h4>View Project</h4>
                      <img src={viewProjectArrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative group overflow-hidden rounded-[40px]">
                <img
                  className="w-full h-auto rounded-[40px]"
                  src={heroimg4}
                  alt=""
                />

                <div
                  className="absolute w-[calc(100%-20px)] left-1/2 -translate-x-1/2 bg-white rounded-[29px] py-4 px-5 bottom-[-120%] group-hover:bottom-2.5   
            transition-all duration-700 ease-in-out"
                >
                  <div className="flex items-center gap-2.5">
                    <h3>Overc360</h3>
                    <span className="text-[#3E3B3980]">(Transport)</span>
                  </div>

                  <p className="mt-2">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                  </p>

                  <div className="mt-3 flex justify-end">
                    <Link
                      to="/"
                      className="flex gap-2.5 bg-[#1F1E1E1A] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[#8CD565]"
                    >
                      <h4>View Project</h4>
                      <img src={viewProjectArrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-[40px]">
                <img
                  className="w-full h-auto rounded-[40px]"
                  src={heroimg5}
                  alt=""
                />

                <div
                  className="absolute w-[calc(100%-20px)] left-1/2 -translate-x-1/2 bg-white rounded-[29px] py-4 px-5 bottom-[-120%] group-hover:bottom-2.5   
            transition-all duration-700 ease-in-out"
                >
                  <div className="flex items-center gap-2.5">
                    <h3>Overc360</h3>
                    <span className="text-[#3E3B3980]">(Transport)</span>
                  </div>

                  <p className="mt-2">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                  </p>

                  <div className="mt-3 flex justify-end">
                    <Link
                      to="/"
                      className="flex gap-2.5 bg-[#1F1E1E1A] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[#8CD565]"
                    >
                      <h4>View Project</h4>
                      <img src={viewProjectArrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-[100px] border border-[#1E1E1E] py-3 px-6 inline-flex rounded-[40px] font-light transition-all duration-300 hover:bg-[#8CD565] hover:border-transparent">
            <Link to="/">
              <h4>View All</h4>
            </Link>
          </div>
        </div>
      </div>

      <Cta></Cta>
    </div>
  );
}
