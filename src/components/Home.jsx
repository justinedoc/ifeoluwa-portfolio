import Dots from "../ui/Dots";
import { dotsPlacement } from "../utils/placements";
import Hero from "./Hero";
import Navbar  from "./Navbar";

function Home() {
  return (
    <main className="bg-[#F3FFFE] p-5">
      <HomeFront />
    </main>
  );
}

function HomeFront() {
  return (
    <section className="bg-[#131212] rounded-2xl p-10 relative">
      <Dots placements={dotsPlacement} />
      <Navbar />
      <Hero />
    </section>
  );
}

export default Home;
