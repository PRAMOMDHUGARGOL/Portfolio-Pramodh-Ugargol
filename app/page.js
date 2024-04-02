import HeroSection from "components/Hero-Section";
import Navbar from "./components/Navbar";
import About from "components/About";
import Experience from "components/Experience";
import Projects from "components/Projects";
import Footer from "components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      {/* <Experience /> */}
      <Projects />
      <Footer />
    </>
  );
}
