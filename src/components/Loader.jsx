import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-white fixed z-[99999999] top-0 w-full">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin "></div>
    </div>
  );
}
