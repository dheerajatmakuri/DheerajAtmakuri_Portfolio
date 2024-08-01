"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export function BackgroundGradientDemo() {
  return (
    <div className="flex justify-center space-x-4">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <img src="/images/utd.png" alt="gitam" style={{ borderRadius: '12px' }} />

        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        Masters in Information Technology Management
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          University of Texas at Dallas, Tx, USA
        </p>
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <img src="/images/gitam.png" alt="utd" style={{ borderRadius: '12px' }}/>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Bachelors in Electronics and Communication Engineering
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        GITAM University, Hyderabad, INDIA
        </p>
      </BackgroundGradient>
    </div>
  );
}
