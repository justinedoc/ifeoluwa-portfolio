import ProfileTag from "../ui/ProfileTag";
import prodesignerImg from "../assets/prod-designer-tag.png";
import webdevImg from "../assets/web-devImg.png";
import pointerImg from "../assets/pointer-img.png";
import { minorSkills } from "../data/dataForMinorSkills";
import TeamsCarousel from "../ui/TeamsCarousel";
import { Suspense } from "react";
function Hero() {
  return (
    <section className="text-white font-medium text-[2.3rem] mb-6 mt-16 md:px-8 min-h-60 relative">
      <article className="flex items-center gap-2">
        <span>I am</span>
        <ProfileTag text={"Onifade Ifeoluwa"} rotate={"-10deg"} />
        <ProfileTag text={"Design Ninja"} rotate={"18deg"} />
      </article>
      <article className="flex gap-2 items-center mt-2 relative">
        <span>A</span>
        <img className="w-64" src={prodesignerImg} alt="product designer" />
        <span>and</span>
        <img className="w-64" src={webdevImg} alt="low-code web devloper" />

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
      </article>
      <article className="max-w-[85%]">
        <span>Currently a Product Design & Team Lead at</span>
        <div className="relative w-fit">
          <span>Sportrex. So,</span>
          <button className="text-lg bg-white rounded-full py-2 px-7 text-black font-medium translate-x-5 translate-y-1 peer">
            Let&#39;s Talk About Your Project
          </button>
          <img
            className="absolute w-10 -top-3 -right-14 opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            src={pointerImg}
            alt="cursor"
          />
        </div>
      </article>

      <article className="flex items-center my-7 overflow-hidden">
        <p className="text-lg font-medium z-10 w-fit min-w-[15rem]">
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
