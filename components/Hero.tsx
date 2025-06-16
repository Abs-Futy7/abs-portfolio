"use client";
import React, { useState, useEffect } from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import ButtonMaagic from "./ui/ButtonMaagic";
import { TbArrowRight } from "react-icons/tb";
import HeroExperience from "./HeroExperience";
import { ReactTyped } from "react-typed";

function Hero() {
  // Handle responsive sizing with useState + useEffect instead of useMediaQuery
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial state
    setIsMobile(window.innerWidth < 835);

    // Add listener for window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 835);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen pt-20 md:pt-28 lg:pt-18 pb-10 relative">
      {/* Spotlights */}
      <div className="absolute inset-0 pointer-events-none">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw] md:-left-30 md:-top-21"
          fill="blue"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-7xl mx-auto px-6">
        {/* Left Side - Text Content */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start py-10 lg:py-20 z-10 line-clamp-1">
          <TextGenerateEffect
            words="Hi, I'm Abs"
            className={cn(
              "text-5xl text-white md:text-6xl lg:text-7xl font-[Neue_Machina]  tracking-tight font-extralight text-center lg:text-left leading-tight",
              
            )}
            filter={true}
            duration={1.5}
          />
          <ReactTyped
            className="font-[Neue_Machina] -letter-spacing-[0.1em] text-5xl md:text-6xl font-extralight text-center lg:text-left mt-3 text-white max-w-2xl"
            strings={["Crafting Codes", "Catching Flags", "Creating Visuals"]}
            typeSpeed={60}
            backSpeed={70}
            loop
          />

          <div className="mt-10">
            <ButtonMaagic
              title="Explore My Projects"
              icon={<TbArrowRight size={20} className="ml-2" />}
              position="right"
              targetSection="projects"
            />
          </div>
        </div>

        {/* Right Side - 3D Model */}
        <div className="flex-1 h-[50vh] lg:h-[80vh] w-full flex items-center justify-center z-20 lg:relative">
          <div className="w-full h-full absolute lg:relative overflow-visible">
            <HeroExperience isMobile={isMobile} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
