"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="min-h-screen pt-20 md:pt-28 lg:pt-18 pb-10 relative">
      {/* Spotlights */}
      <div className="absolute inset-0 pointer-events-none">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-28 -right-10 md:-right-32 md:-top-20 h-screen scale-x-[-1]"
          fill="white"
        />
        <Spotlight
          className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen scale-x-[-1]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw] md:-left-30 md:-top-21"
          fill="blue"
        />
      </div>


      {/* Main Content */}
      <div className="relative z-10 flex h-full w-full max-w-7xl mx-auto px-6">
        <div className="w-full flex flex-col justify-center items-center py-10 lg:py-20 z-10 text-center">
          <TextGenerateEffect
            words="Hi, I'm Abu Bakar"
            className={cn(
              "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[Neue_Machina] tracking-tight font-extralight text-center leading-[0.95] bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 text-transparent bg-clip-text"
            )}
            filter={true}
            duration={1.5}
          />
          <ReactTyped
            className="font-[Neue_Machina] text-5xl sm:text-5xl md:text-8xl font-extralight text-center mt-4 max-w-4xl leading-[1.15] pb-1 bg-gradient-to-r from-white via-purple-300 to-purple-700 text-transparent bg-clip-text"
            strings={["Crafting Codes", "Catching Flags", "Creating Visuals"]}
            typeSpeed={60}
            backSpeed={70}
            loop
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
