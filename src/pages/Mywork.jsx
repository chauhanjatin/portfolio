import { useState, useRef, useEffect } from "react";
import filtericon from "../assets/images/icons/filter.svg";
import heroimg1 from "../assets/images/hero-img1.png";
import heroimg2 from "../assets/images/hero-img2.png";
import heroimg3 from "../assets/images/hero-img3.png";
import heroimg4 from "../assets/images/hero-img4.png";
import heroimg5 from "../assets/images/hero-img5.png";
import heroimg6 from "../assets/images/hero-img6.png";
import heroimg7 from "../assets/images/hero-img7.png";
import heroimg8 from "../assets/images/hero-img8.png";
import heroimg9 from "../assets/images/hero-img9.png";
import viewProjectArrow from "../assets/images/icons/viewproject-arrow.svg";
import { Link } from "react-router-dom";
import Cta from "../components/Cta";

export default function Mywork() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All");
  const dropdownRef = useRef(null);

  const options = ["All", "Mobile App", "Website", "SaaS App"];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div className="containerX relative z-10">
        <div className="mt-[160px] flex justify-between">
          <h2 className="text-[#1E1E1E]">Work Showcase</h2>

          <div ref={dropdownRef} className="relative inline-block filter-items">
            <div
              onClick={() => setOpen(!open)}
              className="filter-btn flex items-center justify-between gap-2 px-4 w-[180px] h-[40px] rounded-full bg-white cursor-pointer"
            >
              <span>{selected}</span>
              <img src={filtericon} alt="" />
            </div>

            {open && (
              <ul className="absolute left-0 mt-2 w-40 bg-white rounded-xl shadow-md overflow-hidden z-20">
                {options.map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      setSelected(item);
                      setOpen(false);
                    }}
                    className={`py-2 px-4 cursor-pointer hover:bg-[#8CD565] ${
                      selected === item ? "bg-[#8CD565]" : ""
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-start mt-[60px]">
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
                  Trudentz is a multispeciality dental & orthodontic centre that
                  blends advanced digital dentistry with aesthetic precision. It
                  offers services like Digital Smile Design (using in-house DTS
                  PRO software), braces/aligners, implants, and biomimetic
                  restorations.
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
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus.
                </p>

                <div className="mt-3 flex justify-end">
                  <Link
                    to="/project-details-1"
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
                src={heroimg6}
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
                  Trudentz is a multispeciality dental & orthodontic centre that
                  blends advanced digital dentistry with aesthetic precision. It
                  offers services like Digital Smile Design (using in-house DTS
                  PRO software), braces/aligners, implants, and biomimetic
                  restorations.
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
                src={heroimg7}
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
          </div>

          <div className="grid gap-4">
            <div className="relative group overflow-hidden rounded-[40px]">
              <img
                className="w-full h-auto rounded-[40px]"
                src={heroimg8}
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

            <div className="relative group overflow-hidden rounded-[40px]">
              <img
                className="w-full h-auto rounded-[40px]"
                src={heroimg9}
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
          </div>
        </div>
      </div>

      <Cta></Cta>
    </div>
  );
}
