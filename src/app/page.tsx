import Hero from "../components/home/Hero";
import TechMarquee from "../components/home/TechMarquee";
import AboutInfo from "../components/about/AboutInfo";
import AcademicTimeline from "../components/about/AcademicTimeline";
import Education from "../components/about/Education";
import Timeline from "../components/about/Timeline";
import Statistics from "../components/home/Statistics";
import Experience from "../components/home/Experience";
import FeaturedProjects from "../components/home/FeaturedProjects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <AboutInfo />
      <AcademicTimeline />
      <Education />
      <Timeline />
      <Statistics />
      <Experience />
      <FeaturedProjects />
    </>
  );
}


