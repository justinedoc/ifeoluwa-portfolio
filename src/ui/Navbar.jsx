/* eslint-disable react/prop-types */
import profileNav from "../assets/navbar-profile.png";
import useNavLinks from "../hooks/useNavLinks";

function Navbar({ isInverted = false, activeNav }) {
  const invertedBg = isInverted ? "bg-black" : "bg-white";
  const navLinks = useNavLinks({ activeLinkName: activeNav, isInverted });

  return (
    <nav
      className={`sticky top-[2rem] z-50 flex justify-between items-center p-1 w-[80%] md:w-[55%] mx-auto rounded-full ${invertedBg}`}
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

      {/* Navigation  */}
      <ul
        className={`flex gap-7 text-md font-semibold
        ${isInverted && "text-white"}`}
      >
        {[...navLinks]}
      </ul>

      <button
        className={`${isInverted ? "bg-white text-black" : "text-white bg-black"}  font-medium py-3 px-8 rounded-full opacity-100 hover:bg-gray-950 hover:opacity-90 transition-all`}
      >
        Let&#39;s Talk
      </button>
    </nav>
  );
}

export default Navbar;
