import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MissionVision />
      <Gallery />
      {/* Legal */}
      <Contact />
      <ContactForm />
      <Footer />
    </>
  );
}
