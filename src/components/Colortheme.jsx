import { useEffect, useState } from "react";

export default function Colortheme() {
  const colors = ["#8CD565", "#f8a1a1", "#f8dba1", "#b7b2f6"];
  const [activeIndex, setActiveIndex] = useState(() => {
    const savedIndex = localStorage.getItem("themeColorIndex");
    return savedIndex !== null ? Number(savedIndex) : 0;
  });

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-color",
      colors[activeIndex]
    );
    localStorage.setItem("themeColorIndex", activeIndex);
  }, [activeIndex]);

  return (
    <div className="fixed top-1/2 sm:left-[30px] left-[20px] -translate-y-1/2 z-[997]">
      <ul className="grid sm:gap-4 gap-3">
        {colors.map((color, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`
              sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] rounded-full cursor-pointer
              border-2 transition-all border-dashed
              ${activeIndex === index ? "border-black" : "border-transparent"}
            `}
            style={{ backgroundColor: color }}/>
        ))}
      </ul>
    </div>
  );
}