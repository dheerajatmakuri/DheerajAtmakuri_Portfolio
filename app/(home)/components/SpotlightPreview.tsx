import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-[45rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Dheeraj Atmakuri, <br /> 
        </h1>
        <br />
        <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Frontend Developer <br /> 
        </h2>
        <br />
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Skilled in Html, CSS, Tailwind, ReactJS, NextJS, <br /> 
          Focused on Responsive, Dynamic Web Development with Efficient Code and state
          management.
        </p>
      </div>
    </div>
  );
}