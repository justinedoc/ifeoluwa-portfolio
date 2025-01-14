import openMail from "../utils/openMail";
import pointerImg from "../assets/pointer-img.png";

function MeetWithMeBtn() {
  return (
    <>
      <button
        onClick={() =>
          window.open("https://calendly.com/ifeoluwa-designs/30min")
        }
        className="peer text-[0.2rem] md:text-lg mt-4 bg-white rounded-full md:py-2 px-5 py-3 md:px-7 text-black font-medium md:translate-x-5 md:translate-y-1 __anim-right __delay-2100"
      >
        Fix a 30mins Meeting with me now
      </button>

      <img
        onClick={openMail}
        className="absolute w-10 -top-3 -right-8 md:-right-14 opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none"
        src={pointerImg}
        alt="cursor"
        loading="lazy"
      />
    </>
  );
}

export default MeetWithMeBtn;
