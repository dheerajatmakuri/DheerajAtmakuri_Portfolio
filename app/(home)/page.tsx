import { BackgroundBeams } from "@/components/ui/background-beams";
import { GlobeDemo } from "./components/GlobeDemo";
import { GlowingStarsBackgroundCardPreview } from "./components/GlowingStarsBackgroundCardPreview";
import { GlowingStarsBackgroundCardPreview1 } from "./components/GlowingStarsBackgroundCardPreview1";
import { SpotlightPreview } from "./components/SpotlightPreview";
import { TabsDemo } from "./components/TabsDemo";
import { BackgroundBeamsDemo } from "./components/BackgroundBeamsDemo";
import { CardHoverEffectDemo } from "./components/CardHoverEffectDemo";

export default function Home() {
  return (
    <div>
      <SpotlightPreview/>
      <TabsDemo/>
      <br /><br /><br /><br /><br /><br /><br />
      <div className="h-[1rem] md:h-[1rem] [perspective:100px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-8 gap-2">
      <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white my-10 gap-10">Education :</h2>
      </div>
      <h3 className="text-center text-xl md:text-3xl font-bold text-black dark:text-white">Master of Science</h3>
      <GlowingStarsBackgroundCardPreview/>
      <h3 className="text-center text-xl md:text-3xl font-bold text-black dark:text-white">Bachelor of Science</h3>
      <GlowingStarsBackgroundCardPreview1/>
      <GlobeDemo/>
      <div className="h-[1rem] md:h-[1rem] [perspective:100px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-8 gap-8">
      <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white my-7 gap-7">Socials :</h2>
      </div>
      <CardHoverEffectDemo/>
      <BackgroundBeamsDemo/>
    </div>
  );
}


