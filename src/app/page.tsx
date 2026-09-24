import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Reviews from "@/components/sections/Reviews";
import Sessions from "@/components/sections/Sessions";
import HowItWorks from "@/components/sections/HowItWorks";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import DiscordCTA from "@/components/sections/DiscordCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Reviews />
      <Sessions />
      <HowItWorks />
      <About />
      <FAQ />
      <DiscordCTA />
      <Footer />
    </>
  );
}
