"use client";
import React from "react";

function ButtonMaagic({
  title, 
  icon, 
  position = "right", 
  href,
  targetSection,
  otherClasses = ""
}: {
  title?: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  href?: string;
  targetSection?: string;
  otherClasses?: string;
}) {
  const handleClick = () => {
    if (targetSection) {
      document.getElementById(targetSection)?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    } else if (href) {
      window.open(href, "_blank");
    }
  };
  
  return (
    <button 
      className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-300 ${otherClasses}`}
      onClick={handleClick}
      type="button"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-2 text-sm font-medium text-white backdrop-blur-3xl">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
}

export default ButtonMaagic;
