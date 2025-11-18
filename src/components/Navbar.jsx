import profileimg from "../assets/images/profile-img.png";
import herobg from "../assets/images/hero-bg.gif";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faUpwork } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <div>
      <div className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[500px] after:bg-[linear-gradient(180deg,rgba(244,244,244,0)_-1%,#F4F4F4_100%)] z-10 w-full absolute top-0 h-dvh">
        <img src={herobg} alt="" className="w-full h-full opacity-35" />
      </div>
      <div className="containerX mx-auto relative z-10">
        <div className="flex items-center justify-between mt-[40px]">
          <div className="flex gap-5">
            <div>
              <img src={profileimg} alt="" />
            </div>
            <div>
              <h4>Jatin Chauhan</h4>
              <p className="text-[#1F1E1E99]">
                UI/UX Designer, Creative Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <div className="ripple"></div>
              <p>Available for work</p>
            </div>
            <div className="bg-[#1E1E1E99] w-[2px] h-[50px] block"></div>
            <ul className="flex items-center gap-3">
              <li className="icon-tilt">
                <Link
                  to="https://www.linkedin.com/in/jatin-chauhan-a52a4947"
                  target="_blank"
                  className="bg-white w-[40px] h-[40px] rounded-md flex justify-center items-center social"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-[20px]"
                  />
                </Link>
              </li>
              <li className="icon-tilt">
                <Link
                  to="https://upwork.com/freelancers/jatinchauhan"
                  target="_blank"
                  className="bg-white w-[40px] h-[40px] rounded-md flex justify-center items-center social"
                >
                  <FontAwesomeIcon icon={faUpwork} className="text-[20px]" />
                </Link>
              </li>
              <li className="icon-tilt">
                <Link
                  to="https://www.behance.net/chauhanjat115a"
                  target="_blank"
                  className="bg-white w-[40px] h-[40px] rounded-md flex justify-center items-center social"
                >
                  <FontAwesomeIcon icon={faBehance} className="text-[20px]" />
                </Link>
              </li>
              <li className="icon-tilt">
                <Link
                  to="https://dribbble.com/jatinchauhan"
                  target="_blank"
                  className="bg-white w-[40px] h-[40px] rounded-md flex justify-center items-center social"
                >
                  <FontAwesomeIcon icon={faDribbble} className="text-[20px]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
