import profilePhoto from "../assets/profile-large.png";
function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden bg-[#131212] min-h-[14rem] border">
      <div className="absolute w-full z-10 bottom-0 left-0 flex justify-center items-center">
        <h1 className="text-[10rem] text-[#FFFFFF1A] font-bold">
          {" "}
          DesignNinja
        </h1>
      </div>

      <main className="grid grid-cols-3 place-items-center">
        {/* Image  */}
        <div className="w-56 h-56 rounded-full bg-white flex justify-center items-center z-20">
          <div className="w-52 h-52 rounded-full  overflow-hidden">
            <img className="w-full" src={profilePhoto} alt="profile" />
          </div>
        </div>

        <nav className="max-w-[20rem]">
          <ul className="grid grid-cols-2 gap-5 text-white font-bold text-2xl">
            <li>
              <a href="#">LINKEDIN</a>
            </li>

            <li>
              <a href="#">X/TWITTER</a>
            </li>

            <li>
              <a href="#">DRIBBLE</a>
            </li>

            <li>
              <a href="">BEHANCE</a>
            </li>
          </ul>
        </nav>
      </main>
    </footer>
  );
}

export default Footer;
