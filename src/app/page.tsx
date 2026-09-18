import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Sessions from "@/components/sections/Sessions";
import Reviews from "@/components/sections/Reviews";
import About from "@/components/sections/About";
import DiscordCTA from "@/components/sections/DiscordCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Sessions />
      <Reviews />
      <About />
      <DiscordCTA />
      <Footer />
    </>
  );
}
