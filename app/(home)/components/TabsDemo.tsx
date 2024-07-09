"use client";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

interface TabContent {
  title: string;
  value: string;
  content: JSX.Element;
}

interface ImageContainerProps {
  src: string;
  href: string;
}

function ImageContainer({ src, href }: ImageContainerProps) {
  return (
    <Link href={href ?? ""} target="_blank">
      <Image
        src={src}
        alt="Project image"
        width={600}
        height={600}
        className="object-cover object-left-top h-[80%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    </Link>
  );
}

export function TabsDemo() {
  const tabs: TabContent[] = [
    {
      title: "Dheeraj Store",
      value: "Dheeraj Store",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Dheeraj Store</p>
          <ImageContainer src="/images/dheerajstore.png" href="https://dheeraj-store.vercel.app/" />
        </div>
      ),
    },
    {
      title: "Portfolio Project",
      value: "My Portfolio",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>My Portfolio</p>
          <ImageContainer src="/images/portfolioproject.png" href="https://dheeraj-atmakuri-portfolio.vercel.app/" />
        </div>
      ),
    },
    {
      title: "SummarAIzer",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>SummarAIzer</p>
          <ImageContainer src="/images/SummarAIzer.png" href="https://summaraizer-alpha.vercel.app/" />
        </div>
      ),
    },
    {
      title: "Netflix Data Analysis",
      value: "Netflix Data Analysis",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Netflix Data Analysis Using Tableau</p>
          <ImageContainer
            src="/images/Netflix_data_analysis_using_tableau.png"
            href="https://public.tableau.com/views/Netflix_Data_Analysis_17184481523410/NETFLIXDataAnalysis?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
          />
        </div>
      ),
    },
    {
      title: "COVID-19 Mobility Analysis",
      value: "COVID-19 Mobility Analysis in Texas, USA",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>COVID-19 Mobility Analysis in Texas, USA</p>
          <ImageContainer
            src="/images/Dashboard_Visualization.png"
            href="https://public.tableau.com/views/WorkplaceMobilityvs_COVID-19CasesinTexas/Dashboard1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[70rem] md:h-[40rem] [perspective:500px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10 gap-10">
      <h2 className="font-bold text-4xl text-white">Projects</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}
