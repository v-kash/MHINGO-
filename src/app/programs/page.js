import Navbar from "@/components/Navbar";
import OurWorkOverYears from "@/components/OurWorkOverYears";
import ProgramsHero from "@/components/ProgramsHero";
import WhatWeDo from "@/components/WhatWeDo";
import Footer from "@/components/Footer";

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <ProgramsHero />
      <WhatWeDo />
      <OurWorkOverYears />
      <Footer/>
    </>
  );
}
