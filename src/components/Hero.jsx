import ProfileTag from "../ui/ProfileTag";
import prodesignerImg from "../assets/prod-designer-tag.png";
import webdevImg from "../assets/web-devImg.png";
import pointerImg from "../assets/pointer-img.png";
import TeamsCarousel from "../ui/TeamsCarousel";
import { Suspense } from "react";
import useScreenSize from "../hooks/useScreenSize";
import AnimatedSkills from "../ui/animatedSkills";
import openMail from "../utils/openMail";
function Hero() {
  const { isSmallScreened } = useScreenSize();
  return (
    <section className="text-white font-medium text-[1.5rem] md:text-[2.3rem] mb-6 mt-16 md:px-8 min-h-80 relative">
      <article className="flex flex-col md:flex-row md:items-center gap-2">
        <span className="text-nowrap __anim-left __delay-200">I am</span>
        <div className="w-fit flex flex-wrap gap-2 justify-between -translate-x-2 md:-translate-x-0">
          <ProfileTag
            text={"Onifade Ifeoluwa"}
            rotate={"-10deg"}
            className="__anim-top __delay-1000"
          />
          <ProfileTag
            text={"Design Ninja"}
            rotate={"18deg"}
            className={"__anim-top __delay-1500"}
          />
        </div>
      </article>

      <article className="flex gap-2 items-center mt-6 md:mt-3 flex-wrap relative">
        <span className="__anim-left __delay-300">A</span>
        <img
          className="w-48 md:w-64 __anim-bottom __delay-350"
          src={prodesignerImg}
          alt="product designer"
          loading="lazy"
        />
        <span className=".__anim-top __delay-450">and</span>
        <img
          className="w-48 md:w-64 __anim-bottom __delay-500"
          src={webdevImg}
          alt="low-code web devloper"
          loading="lazy"
        />

        <aside className="absolute top-40 right-36 -rotate-90">
          {!isSmallScreened && <AnimatedSkills />}
        </aside>
      </article>

      <article className="md:max-w-[85%] w-full">
        <span>
          {"Currently a Product Design & Team Lead at"
            .split(" ")
            .map((wrd, i) => (
              <span key={i} className={"__anim-left __delay-" + (i + 1) * 200}>
                {wrd}{" "}
              </span>
            ))}{" "}
          {isSmallScreened && (
            <span className="__anim-left __delay-1000">Sportrex. So,</span>
          )}
        </span>
        <div className="relative w-fit">
          {!isSmallScreened && (
            <span className="__anim-top __delay-1000">Sportrex. So,</span>
          )}
          <button
            onClick={openMail}
            className="text-lg mt-4 bg-white rounded-full md:py-2 px-5 py-3 md:px-7 text-black font-medium md:translate-x-5 md:translate-y-1 peer __anim-right __delay-2000"
          >
            Let&#39;s Talk About Your Project
          </button>
          <img
            className="absolute w-10 -top-3 -right-8 md:-right-14 opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            src={pointerImg}
            alt="cursor"
            loading="lazy"
          />
        </div>
      </article>

      {isSmallScreened && (
        <aside className="-rotate-90 min-h-52 flex items-center -translate-x-2 -translate-y-8">
          <AnimatedSkills />
        </aside>
      )}

      <article className="flex md:flex-row flex-col justify-center md:items-center my-12 md:my-7 overflow-hidden gap-4">
        <p className="md:text-lg font-medium z-10 w-fit min-w-[15rem] __anim-top __delay-2000">
          Worked with teams from:{" "}
        </p>
        <div className="overflow-hidden flex items-center cursor-pointer">
          <Suspense fallback={"Loading..."}>
            <TeamsCarousel />
          </Suspense>
        </div>
      </article>
    </section>
  );
}

export default Hero;
