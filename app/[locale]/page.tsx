import Hero from "@/components/sections/Hero";
import WhatIsCatharsis from "@/components/sections/WhatIsCatharsis";
import ThreeTypes from "@/components/sections/ThreeTypes";
import LiteraryWorks from "@/components/sections/LiteraryWorks";
import WhyImportant from "@/components/sections/WhyImportant";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhatIsCatharsis />
      <ThreeTypes />
      <LiteraryWorks />
      <WhyImportant />
    </div>
  );
}
