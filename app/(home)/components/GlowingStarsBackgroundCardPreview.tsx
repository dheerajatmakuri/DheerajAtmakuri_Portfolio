"use client";
import React from "react";

import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";

export function GlowingStarsBackgroundCardPreview() {
  return (
    <div className="flex py-20 items-center justify-center antialiased">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>MS in Information Technology & Management</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
            The University of Texas at Dallas
          </GlowingStarsDescription>
          <div className="h-9 w-9 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            <Icon />
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );

}



// const Icon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke-width="1.5"
//       stroke="currentColor"
//       className="h-4 w-4 text-white stroke-2"
//     >
//       <path
//         // strokeLinecap="round"
//         // strokeLinejoin="round"
//         // d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//       />
//     </svg>
//   );
const Icon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-10 w-10 text-white stroke-2"
      >
        <defs>
          <clipPath id="circleView">
            <circle cx="12" cy="12" r="10" />
          </clipPath>
        </defs>
        <image
          href="/images/1.png"
          width="24"
          height="24"
          clipPath="url(#circleView)"
        />
      </svg>
    );
};
  


