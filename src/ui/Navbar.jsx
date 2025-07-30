/* eslint-disable react/prop-types */
import profileNav from "../assets/navbar-profile.png";
import useNavLinks from "../hooks/useNavLinks";
import useScreenSize from "../hooks/useScreenSize";
import { FaHome } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";
import { useEffect, useRef } from "react";
import openMail from "../utils/openMail";

function Navbar({ isInverted = false, activeNav, showNavbar, setShowNavbar }) {
  const { isSmallScreened } = useScreenSize();

  return isSmallScreened ? (
    <MobileScreenNav showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
  ) : (
    <LargerScreenNav isInverted={isInverted} activeNav={activeNav} />
  );
}

function MobileScreenNav({ showNavbar, setShowNavbar }) {
  const mobileNavs = [
    {
      name: "Home",
      icon: <FaHome size={24} />,
      link: "#home",
    },
    {
      name: "Works",
      icon: <MdWork size={24} />,
      link: "#works",
    },
    {
      name: "About",
      icon: <IoPerson size={24} />,
      link: "#about",
    },
    {
      name: "Resume",
      icon: <IoIosPaper size={24} />,
      link: "https://onifadeifeoluwacv.netlify.app",
    },
  ];

  const navRef = useRef();

  useEffect(() => {
    function toggleNav(e) {
      if (!navRef?.current?.contains(e.target) || e.target.closest("a")) {
        setShowNavbar(false);
      }
    }

    document.addEventListener("click", toggleNav, true);

    return () => {
      document.removeEventListener("click", toggleNav, true);
    };
  }, [setShowNavbar]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-[1.5rem] right-[1.5rem] z-50 rounded-xl shadow-md text-lg font-medium transition-all duration-700 overflow-hidden ${
        showNavbar ? "w-[13rem] p-6 h-[49vh]" : "size-0"
      }`}
    >
      <div className="space-y-10 relative">
        {/* Navigation Links */}
        <ul className="flex flex-col gap-6 relative mt-2 z-10">
          {mobileNavs.map((nav) => (
            <li
              key={nav.name}
              className={`flex gap-3 transition-opacity duration-300 ${
                showNavbar ? "opacity-100 delay-300" : "opacity-0"
              }`}
            >
              {nav.icon}
              <a href={nav.link}>{nav.name}</a>
            </li>
          ))}
        </ul>

        {/* Call-to-Action Button */}

        <div className="flex flex-col gap-2 items-center">
          <button
            onClick={openMail}
            className={`text-white bg-black font-medium py-3 px-8 rounded-full opacity-100 hover:bg-gray-950 hover:opacity-80 duration-300 transition ease ${
              showNavbar ? "opacity-100" : "opacity-0"
            }`}
          >
            Let&#39;s Talk
          </button>

          <button
            onClick={() =>
              window.open("https://contra.com/designninja/work")
            }
            className={`text-black bg-white border-black font-medium px-6 rounded-full opacity-100 hover:opacity-90 transition-all border-2 py-2.5 ${
              showNavbar ? "opacity-100" : "opacity-0"
            }`}
          >
            Case Study
          </button>
        </div>

        {/* Expanding Circle */}
        <div
          className={`absolute transition-all duration-700 -z-10 ${
            showNavbar ? "h-[50rem] w-[55rem] translate-x-96" : "size-0"
          } bg-white rounded-full -top-[10rem] -right-12`}
        ></div>
      </div>
    </nav>
  );
}

function LargerScreenNav({ isInverted, activeNav }) {
  const invertedBg = isInverted ? "bg-black" : "bg-white";
  const navLinks = useNavLinks({ activeLinkName: activeNav, isInverted });
  return (
    <nav
      className={`sticky top-[2rem] z-50 flex justify-between items-center p-1 w-[80%] md:w-[65%] mx-auto rounded-full ${invertedBg}`}
    >
      <div
        className={`size-11 rounded-full ${isInverted ? "bg-white" : "bg-black"} flex items-center justify-center`}
      >
        <img
          className="w-[88%]"
          src={profileNav}
          alt="profile"
          loading="lazy"
        />
      </div>

      {/* Navigation  */}
      <ul
        className={`flex gap-7 text-md font-semibold
    ${isInverted && "text-white"}`}
      >
        {[...navLinks]}
      </ul>

      <div className="flex items-center gap-2">
        <button
          onClick={() =>
            window.open("https://calendly.com/ifeoluwa-designs/30min")
          }
          className={`${isInverted ? "bg-black text-white border-white" : "text-black bg-white border-black"} font-medium px-7 rounded-full opacity-100 hover:opacity-90 transition-all border-2 py-2.5`}
        >
          Case Study
        </button>
        <button
          onClick={openMail}
          className={`${isInverted ? "bg-white text-black hover:bg-gray-200" : "text-white bg-black hover:bg-gray-950 "}  font-medium py-3 px-7 rounded-full opacity-100 hover:opacity-90 transition-all`}
        >
          Let&#39;s Talk
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
