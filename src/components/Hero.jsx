import ProfileTag from "../ui/ProfileTag";
import prodesignerImg from "../assets/prod-designer-tag.png";
import webdevImg from "../assets/web-devImg.png";
import TeamsCarousel from "../ui/TeamsCarousel";
import { Suspense } from "react";
import useScreenSize from "../hooks/useScreenSize";
import AnimatedSkills from "../ui/animatedSkills";
import pointerImg from "../assets/pointer-img.png";
import openMail from "../utils/openMail";
function Hero() {
  const { isSmallScreened } = useScreenSize();
  return (
    <section className="text-white font-medium text-[1.5rem] md:text-[2.3rem] 2xl:text-[3rem] mb-6 mt-16 md:px-8 pt-5 pb-3 xl:min-h-[60vh] 2xl:min-h-[70vh] 2xl:mt-32 2xl:py-20 2xl:px-20 relative flex flex-col 2xl:gap-4 justify-center">
      <article className="flex flex-col md:flex-row md:items-center gap-2">
        <span className="text-nowrap __anim-left __delay-200">I am</span>
        <div className="w-fit flex flex-wrap gap-2 justify-between -translate-x-2 md:-translate-x-0">
          <ProfileTag
            text={"Onifade Ifeoluwa"}
            rotate={"-10deg"}
            className="__anim-top __delay-400"
          />
          <ProfileTag
            text={"Design Ninja"}
            rotate={"18deg"}
            className={"__anim-top __delay-600"}
          />
        </div>
      </article>

      <article className="flex gap-2 items-center mt-6 md:mt-3 flex-wrap relative">
        <span className="__anim-left __delay-800">A</span>
        <img
          className="w-48 md:w-64 __anim-bottom __delay-1000"
          src={prodesignerImg}
          alt="product designer"
          loading="lazy"
        />
        <span className=".__anim-top __delay-1200">and</span>
        <img
          className="w-48 md:w-64 __anim-bottom __delay-1400"
          src={webdevImg}
          alt="low-code web devloper"
          loading="lazy"
        />

        <aside className="absolute top-40 right-36 2xl:right-40 -rotate-90">
          {!isSmallScreened && <AnimatedSkills />}
        </aside>
      </article>

      <article className="md:max-w-[85%] w-full flex flex-col 2xl:gap-4">
        <span>
          <span className="__anim-top __delay-1700">
            Currently a Product Design & Team Lead at
          </span>{" "}
          {isSmallScreened && (
            <span className="__anim-left __delay-1900">Sportrex. So,</span>
          )}
        </span>
        <div className="relative w-fit">
          {!isSmallScreened && (
            <span className="__anim-top __delay-1900">Sportrex. So,</span>
          )}

          <button
            onClick={() =>
              window.open("https://calendly.com/ifeoluwa-designs/30min")
            }
            className="peer text-sm md:text-lg 2xl:text-xl mt-4 bg-white rounded-full md:py-2 px-5 py-3 md:px-7 text-black font-medium md:translate-x-5 md:translate-y-1 __anim-right __delay-2100"
          >
            Fix a 30mins Meeting with me now
          </button>

          <img
            onClick={openMail}
            className="absolute w-10 -top-3 -right-8 md:-right-14 opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none"
            src={pointerImg}
            alt="cursor"
            loading="lazy"
          />
        </div>
      </article>

      {isSmallScreened && (
        <aside className="-rotate-90 min-h-52 flex items-center -translate-x-2 -translate-y-8 pointer-events-none">
          <AnimatedSkills />
        </aside>
      )}

      <article className="flex md:flex-row flex-col justify-center md:items-center overflow-hidden gap-4 mt-auto">
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
