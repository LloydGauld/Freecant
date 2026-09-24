import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Reviews from "@/components/sections/Reviews";
import Sessions from "@/components/sections/Sessions";
import About from "@/components/sections/About";
import DiscordCTA from "@/components/sections/DiscordCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Reviews />
      <Sessions />
      {/* New section lands here later. */}
      <About />
      {/* New section lands here later. */}
      <DiscordCTA />
      <Footer />
    </>
  );
}
