/* eslint-disable react/prop-types */
import profileNav from "../assets/navbar-profile.png";

function Navbar({ isInverted = false }) {
  const invertedBg = isInverted ? "bg-black" : "bg-white";

  return (
    <nav
      className={`sticky top-[2rem] z-50 flex justify-between items-center p-1 w-[80%] md:w-[50%] mx-auto rounded-full ${invertedBg}`}
    >
      <div
        className={`w-11 h-11 rounded-full ${isInverted ? "bg-white" : "bg-black"} flex items-center justify-center`}
      >
        <img
          className="w-[88%]"
          src={profileNav}
          alt="profile"
          loading="lazy"
        />
      </div>

      <ul
        className={`flex gap-7 text-md font-semibold
           ${isInverted && "text-white"}`}
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#aboutme">About Me</a>
        </li>
      </ul>

      <button
        className={`${isInverted ? "bg-white text-black" : "text-white bg-black"}  font-medium py-3 px-8 rounded-full`}
      >
        Let&#39;s Talk
      </button>
    </nav>
  );
}

export default Navbar;
