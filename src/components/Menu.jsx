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
      <div className="fixed z-10 right-[100px] bottom-[60px] w-[240px]">
        <div className="relative flex justify-end">
          <div
            className="bg-[#8CD565] flex justify-center items-center rounded-full w-[62px] h-[62px] z-20 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <div className={`w-6 h-[14px] relative ${open ? "top-[-4px]" : ""}`}>
            
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

          {/* Menu List */}
          <div
            className={`bg-[#8CD565] rounded-[20px] absolute py-[14px] px-2.5 z-10 text-center menu-list 
              ${
                open
                  ? "animate-fadeInUp"
                  : "animate-fadeOutDown pointer-events-none"
              }
            `}
          >
            <ul className="text-[#1E1E1E] text-[22px]">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    onClick={() => {
                      setActive(index);
                      setOpen(false);
                    }}
                    className={`py-2.5 px-[60px] rounded-[100px] block transition-all ${
                      active === index
                        ? "bg-black text-white"
                        : "bg-transparent text-[#1E1E1E]"
                    }`}
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
