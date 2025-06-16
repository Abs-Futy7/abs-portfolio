"use client";
import React from "react";
import { ctfData, teamMembers } from "@/data";
import { AnimatedTestimonials } from "./ui/CardTest";
import { FaFlag } from "react-icons/fa";

function Ctf() {
  return (
    <div className='py-10 px-4 sm:px-8 md:px-16'>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-center mb-6 font-[Neue_Machina] tracking-tight">
        CTF player{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          @DU_Black_Noodles
        </span>
      </h1>

      {/* Modified container for testimonials with smaller padding on mobile */}
      <div className="mx-auto w-full py-4 md:py-6 overflow-hidden">
        {/* Replace with your fixed AnimatedTestimonials component */}
        <AnimatedTestimonials testimonials={teamMembers} />
      </div>

      <h2 className="text-2xl sm:text-3xl font-light text-center md:text-start mb-6 md:mb-12 mt-6 md:mt-0">
        Previous Competitions
      </h2>
      
      {/* Custom CSS for animated gradient */}
      <style jsx>{`
        @keyframes borderAnimation {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .gradient-border {
          position: relative;
        }
        .gradient-border::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 0.5rem;
          padding: 2px;
          background: linear-gradient(45deg, #1e0b66, #9b85f3, rgb(37, 10, 78), #da92f0);
          background-size: 300% 300%;
          animation: borderAnimation 3s ease infinite;
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>
      
      {/* Responsive grid with 2 columns on small screens */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-x-10 md:gap-y-6">
        {ctfData.map((ctf) => (
          <div 
            key={ctf.id} 
            className="gradient-border bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 flex flex-col hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold flex items-center gap-1 sm:gap-2">
                <FaFlag className="text-purple-400" /> 
                <span className="truncate">{ctf.name}</span>
              </h3>
              <span className="text-2xl md:text-4xl font-extralight text-purple-500 shadow-purple-500/20">
                {ctf.rank}
              </span>
            </div>
            <div className="text-sm sm:text-base text-gray-300">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="font-medium">Year:</span> {ctf.year}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ctf;
