import profilePhoto from "../assets/profile-large.png";
import sqLike from "../assets/likes-1.png";
import crLike from "../assets/likes-2.png";
function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden bg-[#131212] min-h-[14rem] border px-5 md:px-10 py-5 rounded-xl snap-end">
      <div className="absolute w-full z-10 bottom-0 left-0 flex justify-center items-center">
        <h1 className="text-[12rem] tracking-wide text-[#FFFFFF1A] font-bold">
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

        <div className="relative md:-translate-y-10 z-20">
          <img
            className="w-56 md:w-64"
            src={sqLike}
            alt="likes"
            loading="lazy"
          />
          <img
            className="w-20 md:w-24 absolute -bottom-12 md:-bottom-16 -left-8"
            src={crLike}
            alt="likes"
            loading="lazy"
          />
        </div>
      </main>
    </footer>
  );
}

export default Footer;
