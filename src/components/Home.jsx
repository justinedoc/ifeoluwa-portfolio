import Dots from "../ui/Dots";
import { dotsPlacement } from "../utils/placements";
import Hero from "./Hero";
import Navbar from "../ui/Navbar";
import Tools from "../ui/Tools";
import Works from "./Works";
import About from "./About";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <main className="scroll-container snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth">
        {/* Home */}
        <section id="home" className="bg-[#F3FFFE] p-6 __section flex-col">
          <HomeFront />
        </section>
        {/*  Works */}
        <section id="works" className="bg-white __section p-6">
          <Works />
        </section>
        <section id="aboutme" className="bg-[#131212] __section p-6">
          <About />
        </section>
        <Footer />
      </main>
    </>
  );
}

function HomeFront() {
  return (
    <>
      <section className="bg-[#131212] rounded-3xl p-10 __section-inner">
        <Dots placements={dotsPlacement} />
        <Navbar />
        <Hero />
      </section>
      <Tools />
    </>
  );
}

export default Home;
