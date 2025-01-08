import Dots from "../ui/Dots";
import { dotsPlacement } from "../utils/placements";
import Hero from "./Hero";
import Navbar from "../ui/Navbar";
import Tools from "../ui/Tools";
import Works from "./Works";
import About from "./About";
import Footer from "./Footer";
import useScreenSize from "../hooks/useScreenSize";

function Home() {
  return (
    <>
      <main className="scroll-container snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth">
        {/* Home */}
        <section
          id="home"
          className="bg-[#F3FFFE] p-3 md:p-6 __section flex-col"
        >
          <HomeFront />
        </section>
        {/*  Works */}
        <section id="works" className="bg-white __section p-6">
          <Works />
        </section>
        <section id="aboutme" className="bg-[#131212] __section p-6">
          <About />
        </section>
        <section className="bg-[#F3FFFE] md:p-10 p-3">
          <Footer />
          <p className="text-lg font-semibold text-center mt-3 text-[#6F6F70]">
            {" "}
            Copyright 2025, Onifade Ifeoluwa.{" "}
          </p>
        </section>
      </main>
    </>
  );
}

function HomeFront() {
  const { isSmallScreened } = useScreenSize();
  return (
    <>
      <main className="bg-[#131212] rounded-3xl p-5 md:p-10 __section-inner">
        <Dots placements={dotsPlacement} />
        {!isSmallScreened ? <Navbar activeNav="Home" /> : null}
        <Hero />
      </main>
      <Tools />
    </>
  );
}

export default Home;
