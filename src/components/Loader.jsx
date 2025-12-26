import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-white fixed z-[99999999] top-0 w-full">
      <div class="preloader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
