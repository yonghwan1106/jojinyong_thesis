import Hero from "@/components/sections/Hero";
import WhatIsCatharsis from "@/components/sections/WhatIsCatharsis";
import ThreeTypes from "@/components/sections/ThreeTypes";
import LiteraryWorks from "@/components/sections/LiteraryWorks";
import WhyImportant from "@/components/sections/WhyImportant";
import EnglishPage from "./en-page";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Render English summary page for English locale
  if (locale === "en") {
    return <EnglishPage />;
  }

  // Render Korean sections for Korean locale
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
