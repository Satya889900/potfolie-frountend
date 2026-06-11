import Hero from "../components/home/Hero";
import TechMarquee from "../components/home/TechMarquee";
import Statistics from "../components/home/Statistics";
import FeaturedProjects from "../components/home/FeaturedProjects";
import CTA from "../components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Statistics />
      <FeaturedProjects />
      <CTA />
    </>
  );
}

