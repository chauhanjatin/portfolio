import React, { useState } from "react";
import img1 from "../assets/images/slider-img1.png";
import img2 from "../assets/images/slider-img2.png";
import img3 from "../assets/images/slider-img3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";

const people = [
  {
    img: img2,
    name: "James Carter",
    role: "Globetrotter",
    text: "James loves exploring new cultures and experiences across the world.",
  },
  {
    img: img3,
    name: "Mark Johnson",
    role: "Photographer",
    text: "Mark captures beautiful memories through his lens and creative vision.",
  },
  {
    img: img1,
    name: "Sarah Wilson",
    role: "Designer",
    text: "Sarah transforms ideas into stunning and seamless visual designs.",
  },
  {
    img: img2,
    name: "James Carter",
    role: "Globetrotter",
    text: "James loves exploring new cultures and experiences across the world.",
  },
  {
    img: img3,
    name: "Mark Johnson",
    role: "Photographer",
    text: "Mark captures beautiful memories through his lens and creative vision.",
  },
  {
    img: img1,
    name: "Sarah Wilson",
    role: "Designer",
    text: "Sarah transforms ideas into stunning and seamless visual designs.",
  },
];

export default function Testimonial() {
  // Dynamic Text State
  const [activeText, setActiveText] = useState(people[0].text);

  return (
    <div>
      {/* Title */}
      <div>
        <h2 className="text-center mt-[100px]">Voices of Trust & Success</h2>
        {/* Dynamic Text */}
      </div>

      {/* Slider Section */}
      <div className="relative w-full  mx-auto mt-10 Testimonial-slider">
        {/* PREV BUTTON */}
        <button className="swiper-button-prev-custom absolute left-[-40px] top-1/2 -translate-y-1/2 bg-[--primary-color] sm:w-12 sm:h-12 w-8 h-8 rounded-full flex items-center justify-center shadow-lg z-10">
          <span className="text-2xl">←</span>
        </button>

        {/* NEXT BUTTON */}
        <button className="swiper-button-next-custom absolute right-[-40px] top-1/2 -translate-y-1/2 bg-[--primary-color] sm:w-12 sm:h-12 w-8 h-8 rounded-full flex items-center justify-center shadow-lg z-10">
          <span className="text-2xl">→</span>
        </button>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          centeredSlides={true}
          loop={true}
          spaceBetween={20}
          onSlideChange={(swiper) => {
            document.querySelectorAll(".swiper-slide").forEach((slide) => {
              slide.style.transform = "scale(0.8)";
              slide.style.transition = "0.4s";
            });

            swiper.slides[swiper.activeIndex].style.transform = "scale(1.2)";

            const realIndex = swiper.realIndex;
            setActiveText(people[realIndex].text);
          }}
          onInit={(swiper) => {
            swiper.slides[swiper.activeIndex].style.transform = "scale(1.2)";
            setActiveText(people[0].text);
          }}

          className="pt-10">
          {people.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center w-full">
                <div className="slider-imges w-60 h-60">
                  <img
                    src={p.img}
                    alt={p.name}
                    className=" object-cover w-full h-full"
                  />
                </div>
                <h3 className="sm:text-xl text-sm text-center font-semibold mt-4">
                  {p.name}
                </h3>
                <p className="text-gray-500 text-center ">{p.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <div className="flex justify-center ">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="text-[60px] text-[--primary-color]  opacity-50 text-center"
          />
        </div>
        <p className="sm:text-[24px] text-[16px] mt-[15px] text-[#1E1E1E80] font-light client-text  z-10 mx-auto max-w-4xl leading-relaxed text-center ">
          {activeText}
        </p>
      </div>
    </div>
  );
}
