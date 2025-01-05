import profileNav from "../assets/navbar-profile.png";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-1 bg-white w-[80%] md:w-[50%] mx-auto rounded-full">
      <div className="w-11 h-11 rounded-full bg-[#131111] flex items-center justify-center">
        <img className="w-[88%]" src={profileNav} alt="profile" />
      </div>

      <ul className="flex gap-7 text-md font-medium">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Works</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
      </ul>

      <button className="bg-black text-white font-medium p-3 rounded-full">
        Let&#39;s Talk
      </button>
    </nav>
  );
}

export default Navbar;
