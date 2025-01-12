import Navbar from "../ui/Navbar";
import proofOfWorkImg from "../assets/proof-of-work.png";
import activeStatus from "../assets/active-status.png";
import notActiveStatus from "../assets/not-active-status.png";
import experience from "../assets/experience.png";
import { dataForExperience } from "../data/dataForExperience";
import useScreenSize from "../hooks/useScreenSize";
import me1 from "../assets/me-1.png";
import me2 from "../assets/me-2.png";
import me3 from "../assets/me-3.png";
import { useEffect, useRef } from "react";

function About() {
  const { isSmallScreened } = useScreenSize();
  const buttonRef = useRef();

  useEffect(() => {
    if (buttonRef.current) {
      contactMeBtn();
    }
  }, []);

  async function contactMeBtn() {
    let buttons = buttonRef.current;
    let theme = buttons.getAttribute("data-theme") || "light";
    let username = buttons.getAttribute("data-username");
    let analyticsUserId = buttons.getAttribute("data-analyticsuserid");

    if (!username) return;

    buttons.innerHTML = "";

    let image = document.createElement("img");
    image.alt = "Hire Me on Contra";
    image.src =
      "https://contra.com/static/embed/media/hiremeoncontra-" + theme + ".png";
    image.srcset =
      "https://contra.com/static/embed/media/hiremeoncontra-" +
      theme +
      ".png 1x, https://contra.com/static/embed/media/hiremeoncontra-" +
      theme +
      "@2x.png 2x";
    image.style = "border-width:0;";

    let anchor = document.createElement("a");
    anchor.rel = "nofollow";
    anchor.target = "_blank";

    let utmSuffix = [
      "?utm_campaign=HireMeOnContra",
      analyticsUserId ? "utm_medium=" + analyticsUserId : null,
    ]
      .filter(Boolean)
      .join("&");

    anchor.href = "https://contra.com/" + username + utmSuffix;
    anchor.title = "Contra.com";

    anchor.append(image);

    buttons.append(anchor);
  }

  const me = [
    {
      desc: "Traditional Attire",
      src: me1,
    },

    {
      desc: "A Portrait Picture Of Me",
      src: me2,
    },

    {
      desc: "Workspace",
      src: me3,
    },
  ];

  return (
    <section className="__section-inner md:px-10 w-full">
      {!isSmallScreened && <Navbar activeNav={"About"} />}

      <header className="mt-10">
        <h1 className="text-white text-[3.5rem] leading-tight md:text-[3rem] font-bold">
          {"Onifade Ifeoluwa Emmanuel".split(" ").map((wrd, i) => (
            <span key={i} className={"__anim-left __delay-" + (i + 1) * 350}>
              {wrd}{" "}
            </span>
          ))}
        </h1>
        <p className="text-[#C9C9C9] text-3xl mt-5 md:mt-0 md:text-2xl font-bold">
          {"Product Design Lead - Sportrex, Flex2ride and etc."
            .split("-")
            .map((wrd, i) => (
              <span key={i} className={"__anim-right __delay-" + (i + 1) * 800}>
                {wrd}{" "}
              </span>
            ))}
        </p>
      </header>

      <aside className="flex flex-col md:flex-row md:justify-between gap-4 my-9 w-full">
        <p className="text-xl font-medium text-[#C9C9C9] max-w-[15rem] __anim-left __delay-800">
          Get Familiar with the face behind the works
        </p>

        {/* TODO: replace with images  */}
        {me.map((item, i) => (
          <div
            key={i}
            className={`h-[14rem] md:h-[15rem] md:max-w-[18rem] rounded-lg w-full __anime-top __delay-${(i + 1) * 300} overflow-hidden relative group`}
          >
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease"
              src={item.src}
              alt={item.desc}
              loading="lazy"
            />

            <div className="absolute top-0 left-0 h-full w-full flex items-end p-5 text-[#C9C9C9] font-medium text-lg bg-gradient-to-t from-black/60 via-black/30 to-transparent cursor-pointer">
              <span className="">{item.desc}</span>
            </div>
          </div>
        ))}
      </aside>

      <main className="flex flex-col md:flex-row md:gap-36 md:justify-end">
        <p className="md:text-lg text-2xl font-medium text-white md:max-w-[45rem] text-pretty md:leading-9 leading-10 __fade-in">
          I’m a <span className="text-[#4F4F4F]">product designer</span> with{" "}
          <span className="text-[#4F4F4F]">4+ years of experience</span>,
          focusing on{" "}
          <span className="text-[#4F4F4F]">Web3, mobile, and web apps,</span>{" "}
          especially interested in{" "}
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
          <p className="md:text-sm text-2xl font-medium text-[#C9C9C9] mb-7 md:mb-3 __anim-right __delay-700">
            Hope You Know A Bit <br /> About Me Now ?????
          </p>
          <img
            onClick={() => {
              window.location.href = "https://mainstack.me/designninja";
            }}
            className="md:w-44 w-72 __anim-right __delay-900"
            src={proofOfWorkImg}
            alt="proof of work"
            loading="lazy"
          />
        </aside>
      </main>

      <AreaOfFocus />
      <Experience />

      <aside className="flex flex-col md:flex-row gap-3 w-full md:items-center justify-center">
        <header className="text-2xl md:text-3xl text-[#4F4F4F] font-bold __anim-left __delay-500">
          Email me:
        </header>
        <a
          href="mailto:ifeoluwa.designs@gmail.com"
          className="text-white __anim-right __delay-700 hover:text-[#C9C9C9] text-xl md:text-lg font-medium"
        >
          ifeoluwa.designs@gmail.com
        </a>
      </aside>

      <div
        ref={buttonRef}
        className="contra-hire-me-button flex justify-center my-2"
        data-analyticsuserid="9b35c6ab-e428-41fb-81ba-2b3ef9d8dc2e"
        data-theme="light"
        data-username="onifade_ifeoluwa_6hxycshs"
      ></div>
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
      <h1 className="text-[#C9C9C9] text-2xl md:text-xl font-medium min-w-fit __anim-left delay-300">
        My Area Of Focus
      </h1>

      {/* Areas container  */}
      <div className="flex flex-col items-center gap-5 w-full">
        {/* Areas  */}
        <div className="flex justify-center flex-wrap gap-5 md:gap-10 w-full">
          {areas.slice(0, 4).map((area, i) => (
            <h2
              key={area}
              className={`md:text-2xl text-xl font-medium text-white __anim-bottom __delay-${(i + 1) * 200}`}
            >
              {area}
            </h2>
          ))}
        </div>
        <div className="flex justify-center flex-wrap gap-5 md:gap-10 w-full">
          {areas.slice(4, 8).map((area, i) => (
            <h2
              key={area}
              className={`md:text-2xl text-xl font-medium text-white __anim-bottom __delay-${(i + 1) * 400}`}
            >
              {area}
            </h2>
          ))}
        </div>
        <div className="flex justify-center flex-wrap gap-5 md:gap-10 w-full">
          {areas.slice(8, 11).map((area, i) => (
            <h2
              key={area}
              className={`md:text-2xl text-xl font-medium text-white __anim-bottom __delay-${(i + 1) * 600}`}
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
      <h1 className="text-[#C9C9C9] text-2xl md:text-xl font-medium min-w-fit __anim-left __delay-300">
        My Past and Current Work Experience...
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-0 md:justify-items-center mt-7">
        <main className="min-w-[15rem] md:min-w-[25rem] md:max-w-[25rem] flex gap-3 flex-col text-white">
          {dataForExperience.map((data, i) => (
            <div key={data.company} className="flex items-end justify-between">
              <div className="min-w-fit">
                <div
                  className={`flex items-center gap-1 __anim-top __delay-${(i + 1) * 350}`}
                >
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
                <p
                  className={`text-lg font-medium __anim-left __delay-${(i + 1) * 450}`}
                >
                  {data.company}
                </p>
              </div>

              <h2
                className={`text-sm text-[#707070] text-right text-pretty max-w-[12rem] font-semibold __anim-right __delay-${(i + 1) * 450}`}
              >
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
