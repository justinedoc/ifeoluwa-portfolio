/* eslint-disable react/prop-types */
import profileNav from "../assets/navbar-profile.png";
function ProfileTag({ text, rotate, className }) {
  return (
    <div
      style={{ rotate }}
      className={`bg-white text-black text-lg flex justify-between items-center w-fit pr-3 p-1 md:pr-5 md:py-[0.3rem] 2xl:py-2 rounded-full gap-2 ${className}`}
    >
      <div className="w-8 h-8 rounded-full bg-[#131111] flex items-center justify-center">
        <img className="w-[88%]" src={profileNav} alt="profile" />
      </div>
      <p className="font-meduim text-lg text-nowrap md:text-2xl 2xl:text-3xl">{text}</p>
    </div>
  );
}

export default ProfileTag;
