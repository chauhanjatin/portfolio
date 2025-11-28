import { useEffect, useRef, useState } from "react";
import Cta from "../components/Cta";
import aboutimg from "../assets/images/aboutus-img.png";
import handgif from "../assets/images/hand-gif.gif";
import { Link } from "react-router-dom";
import figma from "../assets/images/figma.png";
import adobe from "../assets/images/adobe.png";
import xdimg from "../assets/images/xd-img.png";
import javascript from "../assets/images/javascript.png";
import photoshop from "../assets/images/photoshop.png";
import reactnative from "../assets/images/react-native.png";
import css from "../assets/images/css.png";
import bootstrap from "../assets/images/bootstrap.png";
import img1 from "../assets/images/slider-img1.png";
import img2 from "../assets/images/slider-img2.png";
import img3 from "../assets/images/slider-img3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const people = [
  {
    img: img2,
    name: "James Carter",
    role: "Globetrotter",
  },
  {
    img: img3,
    name: "Mark Johnson",
    role: "Photographer",
  },
  {
    img: img1,
    name: "Sarah Wilson",
    role: "Designer",
  },
  {
    img: img2,
    name: "James Carter",
    role: "Globetrotter",
  },
  {
    img: img3,
    name: "Mark Johnson",
    role: "Photographer",
  },
  {
    img: img1,
    name: "Sarah Wilson",
    role: "Designer",
  },
];

export default function Aboutus() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [index, setIndex] = useState(1);

  // TIMELINE DATA
  const steps = [
    {
      title: "Web Designer",
      duration: "Apr 2011– Mar 2018",
      bullets: ["Siya Soft", "India"],
    },
    {
      title: "Web And UI Designer ( Level 2 ) – Remote Staff",
      duration: "Jan 2014 – Mar 2016",
      bullets: ["SFWM LTD (Super future Multi Services)", "London, UK"],
    },
    {
      title: "Web & Graphics Designer – Remote Staff",
      duration: "Feb 2013 – May 2014",
      bullets: ["Virtual Assistant Staffing", "Washington, USA"],
    },
    {
      title: "Sr. Web & Graphics Designer",
      duration: "Apr 2018 – Apr 2020",
      bullets: ["Differenz System", "India"],
    },
    {
      title: "Sr. UI/UX Designer and Frontend Designer + Team Leader",
      duration: "Apr 2020 – Apr 2021",
      bullets: ["Differenz System", "India"],
    },
    {
      title: "UI/UX Designer – Remote Staff",
      duration: "Feb 2022 – Dec 2022",
      bullets: ["Engine B", "UK"],
    },
    {
      title: "UI/UX + Frontend Designer - Freelancer",
      duration: "Apr 2021 - Present",
      bullets: ["LIS", "India"],
    },
  ];

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.1;
      const end = windowHeight * 0.9;

      let p = (rect.top - start) / (end - start);
      p = 1 - Math.min(1, Math.max(0, p));

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="containerX relative z-10">
        <div className="flex justify-center items-center mt-[100px]">
          <img src={aboutimg} alt="" />
        </div>
        <div className="grid justify-center text-center mt-[60px]">
          <h1 className="flex font-medium">
            “Hey! <img src={handgif} alt="" className="w-[62px] h-[62px]" /> I’m
            Jatin Chauhan”
          </h1>
          <h2 className="mt-[20px] font-medium">
            I Am{" "}
            <span className="bg-[#8CD565] rounded-[100px] py-[6px] px-[36px]">
              UI/UX
            </span>{" "}
            Designer & Developer
          </h2>

          <div>
            <Link
              to="/"
              className="my-[50px] border border-[#1E1E1E] py-3 px-6 inline-flex rounded-[40px] font-light transition-all duration-300 hover:bg-[#8CD565] hover:border-transparent"
            >
              <h4>Say Hello Jatin</h4>
            </Link>
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <h2 className="mt-[100px] mb-[60px] text-center">Work Experience</h2>

          <div className="flex">
            <div className="flex gap-10">
              <div
                ref={containerRef}
                className="relative flex flex-col items-center"
              >
                <div className="absolute top-[12px] bottom-0 w-[3px] flex flex-col">
                  <div
                    style={{ height: `${progress * 100}%` }}
                    className="border-r-2 border-dashed border-[#8CD565]"
                  ></div>
                  <div className="flex-1 border-r-2 border-dashed border-gray-400"></div>
                </div>

                {steps.map((step, index) => {
                  const lineProgress = progress * steps.length;
                  const isCompleted = lineProgress >= index + 1;

                  return (
                    <div
                      key={index}
                      className="relative flex flex-col items-center pt-2 pb-28"
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-[5px] ${
                          isCompleted
                            ? "border-white bg-[#8CD565]"
                            : "border-white bg-black"
                        }`}
                      ></div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-8">
                {steps.map((step, index) => (
                  <div key={index}>
                    <h3 className="font-medium mb-2">{step.title}</h3>
                    <h4 className="text-[#1E1E1E80] font-light mb-2">
                      {step.duration}
                    </h4>
                    <ul className="flex gap-10 list-disc font-normal">
                      <li className="ms-[25px]">{step.bullets[0]}</li>
                      <li>{step.bullets[1]}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="educationBg_img rounded-[40px]">
          <div className="border-[10px] border-white rounded-[40px] mt-[100px] py-[50px] px-[20px] shadow-[0_0_10px_0_#00000014]">
            <h2 className="text-center mb-[60px] font-medium">Education</h2>
            <div className="flex justify-around items-center text-center">
              <div className="">
                <h4 className="text-[#1E1E1E80]">2007</h4>
                <p className="text-[24px] my-[10px]">
                  Bachelor of Science (Mathematics)
                </p>
                <h4 className="text-[#1E1E1E80]">
                  Sir. P.T. Science College, VNSGU, SURAT
                </h4>
              </div>

              <div className="">
                <h4 className="text-[#1E1E1E80]">2010</h4>
                <p className="text-[24px] my-[10px]">
                  Master of Computer Applications
                </p>
                <h4 className="text-[#1E1E1E80]">
                  Department of Computer Science, VNSGU, SURAT
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-center mt-[100px]">Tech Stack</h2>

          <div className="flex gap-4 justify-center mt-[60px]">
            <img
              src={figma}
              alt=""
              className="bg-white p-[6px] rounded-[10px]"
            />
            <img
              src={adobe}
              alt=""
              className="bg-white py-[10px] px-[9px] rounded-[10px]"
            />
            <img
              src={xdimg}
              alt=""
              className="bg-white py-[10px] px-[9px] rounded-[10px]"
            />
            <img
              src={javascript}
              alt=""
              className="bg-white py-[10px] px-[14px] rounded-[10px]"
            />
            <img
              src={photoshop}
              alt=""
              className="bg-white p-[10px] rounded-[10px]"
            />
            <img
              src={reactnative}
              alt=""
              className="bg-white px-[6px] py-[10px] rounded-[10px]"
            />
            <img
              src={css}
              alt=""
              className="bg-white py-[10px] px-[14px] rounded-[10px]"
            />
            <img
              src={bootstrap}
              alt=""
              className="bg-white py-[12px] px-[4px] rounded-[10px]"
            />
          </div>
        </div>

        {/* Voices of Trust & Success */}
        <div>
          <h2 className="text-center mt-[100px]">Voices of Trust & Success</h2>
          <p className="text-[24px] mt-[60px] text-[#1E1E1E80] font-light">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus.”
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          <button className="swiper-button-prev-custom absolute left-[-40px] top-1/2 -translate-y-1/2 bg-[#8CD565] w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10">
            <span className="text-2xl">←</span>
          </button>

          <button className="swiper-button-next-custom absolute right-[-40px] top-1/2 -translate-y-1/2 bg-[#8CD565] w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10">
            <span className="text-2xl">→</span>
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            spaceBetween={20}
            onSlideChange={(swiper) => {
              document.querySelectorAll(".swiper-slide").forEach((slide) => {
                slide.style.transform = "scale(0.8)";
                slide.style.transition = "0.4s";
              });

              swiper.slides[swiper.activeIndex].style.transform = "scale(1.2)";
            }}
            onInit={(swiper) => {
              swiper.slides[swiper.activeIndex].style.transform = "scale(1.2)";
            }}
            className="pt-10"
          >
            {people.map((p, i) => (
              <SwiperSlide key={i}>
                <div className=" flex flex-col items-center w-full">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-60 h-60 rounded-3xl object-cover"
                  />
                  <h3 className="text-xl text-center font-semibold mt-4">
                    {p.name}
                  </h3>
                  <p className="text-gray-500 text-center">{p.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Cta></Cta>
    </div>
  );
}
