import ProfileTag from "../ui/ProfileTag";
import prodesignerImg from "../assets/prod-designer-tag.png";
import webdevImg from "../assets/web-devImg.png";
import pointerImg from "../assets/pointer-img.png";
import { minorSkills } from "../data/dataForMinorSkills";
import TeamsCarousel from "../ui/TeamsCarousel";
import { Suspense } from "react";
import useScreenSize from "../hooks/useScreenSize";
function Hero() {
  const { isSmallScreened } = useScreenSize();
  return (
    <section className="text-white font-medium text-[1.5rem] md:text-[2.3rem] mb-6 mt-16 md:px-8 min-h-80 relative">
      <article className="flex flex-col md:flex-row md:items-center gap-2">
        <span className="text-nowrap">I am</span>
        <div className="w-fit flex flex-wrap gap-2 justify-between -translate-x-2 md:-translate-x-0">
          <ProfileTag text={"Onifade Ifeoluwa"} rotate={"-10deg"} />
          <ProfileTag text={"Design Ninja"} rotate={"18deg"} />
        </div>
      </article>

      <article className="flex gap-2 items-center mt-6 md:mt-3 flex-wrap relative">
        <span>A</span>
        <img
          className="w-48 md:w-64"
          src={prodesignerImg}
          alt="product designer"
        />
        <span>and</span>
        <img
          className="w-48 md:w-64"
          src={webdevImg}
          alt="low-code web devloper"
        />

        {!isSmallScreened && (
          <aside className="absolute top-40 right-36 -rotate-90">
            <div className="relative">
              {minorSkills.map((skill) => (
                <div
                  key={skill.name}
                  style={{
                    ...skill?.style,
                    transformOrigin: "left center",
                    transform: `rotate(${skill?.angle})`,
                  }}
                  className={`text-[1rem] ${skill.backgroundColor} w-fit min-w-48 p-1 rounded-full text-black font-bold absolute flex gap-[0.8rem] text-nowrap items-center`}
                >
                  <div className={"bg-black h-10 w-10 rounded-full"}></div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </aside>
        )}
      </article>

      <article className="md:max-w-[85%] w-full">
        <span>
          Currently a Product Design & Team Lead at{" "}
          {isSmallScreened && "Sportrex. So,"}
        </span>
        <div className="relative w-fit">
          {!isSmallScreened && <span>Sportrex. So,</span>}
          <button className="text-lg mt-4 bg-white rounded-full md:py-2 px-5 py-3 md:px-7 text-black font-medium md:translate-x-5 md:translate-y-1 peer">
            Let&#39;s Talk About Your Project
          </button>
          <img
            className="absolute w-10 -top-3 -right-8 md:-right-14 opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            src={pointerImg}
            alt="cursor"
          />
        </div>
      </article>

      {isSmallScreened && (
        <aside className="-rotate-90 min-h-52 flex items-center -translate-x-2 -translate-y-12">
          <div className="relative">
            {minorSkills.map((skill) => (
              <div
                key={skill.name}
                style={{
                  ...skill?.style,
                  transformOrigin: "left center",
                  transform: `rotate(${skill?.angle})`,
                }}
                className={`text-[1rem] ${skill.backgroundColor} w-fit min-w-48 p-1 rounded-full text-black font-bold absolute flex gap-[0.8rem] text-nowrap items-center`}
              >
                <div className={"bg-black h-10 w-10 rounded-full"}></div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </aside>
      )}

      <article className="flex md:flex-row flex-col justify-center md:items-center my-12 md:my-7 overflow-hidden gap-4">
        <p className="md:text-lg font-medium z-10 w-fit min-w-[15rem]">
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
