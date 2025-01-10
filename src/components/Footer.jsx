import profilePhoto from "../assets/profile-large.png";
import sqLike from "../assets/likes-1.png";
import crLike from "../assets/likes-2.png";
function Footer() {
  const socials = [
    {
      name: "LINKEDIN",
      link: "https://www.linkedin.com/in/onifadeifeoluwa",
    },
    {
      name: "X/TWITTER",
      link: "https://www.twitter.com/ifeloveth1",
    },
    {
      name: "DRIBBLE",
      link: "https://www.dribbble.com/onifadeifeoluwa",
    },
    {
      name: "BEHANCE",
      link: "https://www.behance.net/ifeloveth1",
    },
  ];
  return (
    <footer className="relative z-10 overflow-hidden bg-[#131212] min-h-[14rem] border px-3 md:px-10 md:py-5 pt-10 pb-24 rounded-xl">
      <div className="absolute w-full z-10 bottom-0 left-0 flex justify-center items-center">
        <h1 className="md:text-[12rem] text-[3.3rem] tracking-wide text-[#FFFFFF1A] font-bold">
          {" "}
          DesignNinja
        </h1>
      </div>
      <main className="grid grid-cols-1 gap-20 md:gap-0 md:grid-cols-3 place-items-center mb-10">
        {/* Image  */}
        <div className="md:w-56 md:h-56 w-60 h-60 rounded-full bg-white flex justify-center items-center z-20  __anim-left __delay-500">
          <div className="w-56 h-56 md:h-52 md:w-52 rounded-full  overflow-hidden">
            <img
              className="w-full"
              src={profilePhoto}
              alt="profile"
              loading="lazy"
            />
          </div>
        </div>

        <nav className="max-w-[20rem] z-20">
          <ul className="grid grid-cols-2 gap-10 md:gap-5 text-white font-bold text-center text-2xl">
            {socials.map((social, i) => (
              <li
                key={social.name}
                className={"__anim-bottom __delay-" + (1 + i) * 200}
              >
                <a href={social.link}>{social.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative md:-translate-y-10 z-20">
          <img
            className="w-60 md:w-64 __anim-right __delay-700"
            src={sqLike}
            alt="likes"
            loading="lazy"
          />
          <img
            className="md:w-24 w-20 absolute -bottom-14 md:-bottom-16 -left-8 __anim-bottom __delay-900"
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
