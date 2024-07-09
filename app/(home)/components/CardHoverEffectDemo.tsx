import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/dheeraj-atmakuri/",
    imgSrc: "/images/linkedins-removebg-preview.png",
  },
  {
    title: "Github",
    // description: "",
    link: "https://netflix.com",
    imgSrc: "/images/github.png",
  },
  {
    title: "Tableau Public",
    // description: "",
    link: "https://public.tableau.com/app/profile/dheeraj.atmakuri/vizzes",
    imgSrc: "/images/tab.png",
  },
  {
    title: "Trailhead",
    // description: "",
    link: "https://www.salesforce.com/trailblazer/profile",
    imgSrc: "/images/trailheadlogo.png",
  },
  
];
