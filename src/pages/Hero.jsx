import satisfiedclients from "../assets/images/satisfied-clients.png";
import viewProjectArrow from "../assets/images/icons/viewproject-arrow.svg";
import instagramicon from "../assets/images/icons/instagram-icon.svg";

import upworkring from "../assets/images/upwork-ring.png";
import uplogo from "../assets/images/up-logo.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Hero() {
  return (
    <div>
      <div className="containerX relative z-10">
        <div className="text-center">
          <div className="h-[calc(100vh-70px)] flex justify-center items-center">
            <div>
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
                I design digital experiences that connect brands with users
                through creativity and strategy.
              </h1>

              <h4 className="text-[#1F1E1E80] mt-[30px] mx-[126px]">
                Creative UI/UX Designer with 10+ years of experience crafting
                responsive, user-focused web and mobile apps. Blending
                aesthetics with functionality, I help brands build seamless and
                meaningful digital experiences that deliver both beauty and
                value.
              </h4>

              <div className="xl:mt-[80px] lg:mt-[50px] mt-[50px] bg-[#8CD565] py-3 px-6 border-[#8CD565] border border-1 inline-flex rounded-[40px] transition-all duration-300 hover:bg-transparent hover:border hover:border-black">
                <Link to="/">
                  <h4 className="font-light">Say "Hello Jatin"</h4>
                </Link>
              </div>

              <div className="flex justify-center items-center xl:mt-[60px] lg:mt-[40px] md:mt[30px] gap-5">
                <h4 className="italic">Also explore my creative side</h4>
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
            </div>
          </div>

     

          <div>
            <Link
              to="/mywork"
              className="my-[50px] border border-[#1E1E1E] py-3 px-6 inline-flex rounded-[40px] font-light transition-all duration-300 hover:bg-[#8CD565] hover:border-transparent"
            >
              <h4>View All</h4>
            </Link>
          </div>
        </div>
      </div>

      <Footer></Footer>

      <Link
        className="upwork-logo"
        to="https://upwork.com/freelancers/jatinchauhan"
        target="_blank"
      >
        <img src={upworkring} alt="" className="circle-text" />
        <img src={uplogo} alt="" className="upwork-icon" />
      </Link>
    </div>
  );
}
