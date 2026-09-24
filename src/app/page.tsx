import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Sessions from "@/components/sections/Sessions";
import HowItWorks from "@/components/sections/HowItWorks";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import DiscordCTA from "@/components/sections/DiscordCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Sessions />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <DiscordCTA />
      <Footer />
    </>
  );
}
