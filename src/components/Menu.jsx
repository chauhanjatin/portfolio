import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "My Work", path: "/mywork" },
    { label: "Hire Me", path: "/hireme" },
  ];

  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="
          fixed 
          right-4 bottom-6 
          sm:right-10 sm:bottom-10 
          md:right-20 
          lg:right-[100px] lg:bottom-[60px] 
          w-[200px] sm:w-[220px] md:w-[240px]
           z-20
        "
      >
        <div className="relative flex justify-end">
          <div
            className="
              bg-[#8CD565] flex justify-center items-center rounded-full 
              w-[54px] h-[54px] 
              sm:w-[60px] sm:h-[60px] 
              md:w-[62px] md:h-[62px] cursor-pointer
            "
            onClick={() => setOpen(!open)}
          >
            <div
              className={`w-6 h-[14px] relative ${open ? "top-[-4px]" : ""}`}
            >
              <span
                className={`absolute block h-[3px] w-full bg-black rounded transition-all duration-300
                  ${open ? "top-[10px] rotate-45" : "top-0 rotate-0"}
                `}
              ></span>

              <span
                className={`absolute block h-[3px] w-full bg-black rounded transition-all duration-300
                  ${open ? "top-[10px] -rotate-45" : "bottom-0 rotate-0"}
                `}
              ></span>
            </div>
          </div>

          <div
            className={`
              bg-[#8CD565] rounded-[20px] absolute 
              py-[12px] sm:py-[14px] px-3 sm:px-2.5 
              z-10 text-center menu-list shadow-lg
              ${
                open
                  ? "animate-fadeInUp"
                  : "animate-fadeOutDown pointer-events-none"
              }
            `}
          >
            <ul className="text-[#1E1E1E] text-[18px] sm:text-[20px] md:text-[22px]">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    onClick={() => {
                      setActive(index);
                      setOpen(false);
                    }}
                    className={`
                      py-2 sm:py-2.5 
                      px-[40px] sm:px-[50px] md:px-[60px] 
                      rounded-[100px] block transition-all 
                      ${
                        active === index
                          ? "bg-black text-white"
                          : "bg-transparent text-[#1E1E1E]"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
