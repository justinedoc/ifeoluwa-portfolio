import Navbar from "../ui/Navbar";
import proofOfWorkImg from "../assets/proof-of-work.png";
import activeStatus from "../assets/active-status.png";
import notActiveStatus from "../assets/not-active-status.png";
import experience from "../assets/experience.png";
import { dataForExperience } from "../data/dataForExperience";
import useScreenSize from "../hooks/useScreenSize";

function About() {
  const { isSmallScreened } = useScreenSize();
  return (
    <section className="__section-inner md:px-10 w-full">
      {!isSmallScreened && <Navbar activeNav={"About Me"} />}

      <header className="mt-10">
        <h1 className="text-white text-[3.5rem] leading-tight md:text-[3rem] font-bold">
          Onifade Ifeoluwa Emmanuel
        </h1>
        <p className="text-[#C9C9C9] text-3xl mt-5 md:mt-0 md:text-2xl font-bold">
          Product Design Lead - Sportrex, Flex2ride and etc.
        </p>
      </header>

      <aside className="flex flex-col md:flex-row md:justify-between gap-4 my-9 w-full">
        <p className="text-xl font-medium text-[#C9C9C9] max-w-[15rem]">
          Get Familiar with the face behind the works
        </p>

        {/* TODO: replace with images  */}
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={i}
            className="bg-[#C5DEFE] h-[14rem] md:h-[10rem] md:max-w-[18rem] rounded-lg w-full"
          ></div>
        ))}
      </aside>

      <main className="flex flex-col md:flex-row md:gap-36 md:justify-end">
        <p className="md:text-lg text-2xl font-medium text-white md:max-w-[45rem] text-pretty md:leading-9 leading-10">
          I’m a <span className="text-[#4F4F4F]">product designer</span> with{" "}
          <span className="text-[#4F4F4F]">4+ years of experience</span>,
          focusing on{" "}
          <span className="text-[#4F4F4F]">Web3, mobile, and web apps,</span>{" "}
          especially interested in
          <span className="text-[#4F4F4F]">
            building for Telegram mini apps
          </span>
          . I work at an affordable rate, open to equity-based projects, and if
          you’ve got an exciting project, feel free to slide into my DMs for a
          free consultation.{" "}
          <span className="text-[#C9C9C9]">
            Looking forward to learning and collaborating!
          </span>
        </p>

        <aside className="mt-10 md:mt-0 flex flex-col items-end">
          <p className="md:text-sm text-2xl font-medium text-[#C9C9C9] mb-7 md:mb-3">
            Hope You Know A Bit <br /> About Me Now ?????
          </p>
          <img
            className="md:w-44 w-72"
            src={proofOfWorkImg}
            alt="proof of work"
            loading="lazy"
          />
        </aside>
      </main>

      <AreaOfFocus />
      <Experience />

      <aside className="flex flex-col md:flex-row gap-3 w-full md:items-center justify-center">
        <header className="text-2xl md:text-3xl text-[#4F4F4F] font-bold">Email me:</header>
        <a
          href="mailto:ifeoluwa.designs@gmail.com"
          className="text-white hover:text-[#C9C9C9] text-xl md:text-lg font-medium"
        >
          ifeoluwa.designs@gmail.com
        </a>
      </aside>
    </section>
  );
}

function AreaOfFocus() {
  const areas = [
    "Brand Strategy",
    "User Experience Design",
    "Training",
    "Interactive Designs",
    "Interface Design",
    "Low Code Tools",
    "Brand Identity",
    "Data Visualization",
    "Prototyping",
    "Presentation Design",
    "Design Consultation",
  ];
  return (
    <section className="flex gap-5 w-full my-7 flex-col">
      <h1 className="text-[#C9C9C9] text-2xl md:text-xl font-medium min-w-fit">
        My Area Of Focus
      </h1>

      {/* Areas container  */}
      <div className="flex flex-col items-center gap-5 w-full">
        {/* Areas  */}
        <div className="flex justify-center flex-wrap gap-5 md:gap-10 w-full">
          {areas.slice(0, 4).map((area) => (
            <h2
              key={area}
              className="md:text-2xl text-xl font-medium text-white"
            >
              {area}
            </h2>
          ))}
        </div>
        <div className="flex justify-center flex-wrap gap-5 md:gap-10 w-full">
          {areas.slice(4, 8).map((area) => (
            <h2
              key={area}
              className="md:text-2xl text-xl font-medium text-white"
            >
              {area}
            </h2>
          ))}
        </div>
        <div className="flex justify-center flex-wrap gap-5 md:gap-10 w-full">
          {areas.slice(8, 11).map((area) => (
            <h2
              key={area}
              className="md:text-2xl text-xl font-medium text-white"
            >
              {area}
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="md:my-7 my-10">
      <h1 className="text-[#C9C9C9] text-2xl md:text-xl font-medium min-w-fit">
        My Past and Current Work Experience...
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-0 md:justify-items-center mt-7">
        <main className="min-w-[15rem] md:min-w-[25rem] md:max-w-[25rem] flex gap-3 flex-col text-white">
          {dataForExperience.map((data) => (
            <div key={data.company} className="flex items-end justify-between">
              <div className="min-w-fit">
                <div className="flex items-center gap-1">
                  <img
                    src={data.isActive ? activeStatus : notActiveStatus}
                    alt="active status"
                    className="w-2 h-2 object-contain"
                    loading="lazy"
                  />
                  <span className="text-xs font-extralight">
                    {data.isActive ? "Active" : "Past"}
                  </span>
                </div>
                <p className="text-lg font-medium">{data.company}</p>
              </div>
              <h2 className="text-sm text-[#707070] text-right text-pretty max-w-[12rem] font-semibold">
                {data.date}
              </h2>
            </div>
          ))}
        </main>

        <aside>
          <img
            className="w-72 md:w-64 ml-auto md:ml-0"
            src={experience}
            alt="my experience"
            loading="lazy"
          />
        </aside>
      </div>
    </section>
  );
}

export default About;
