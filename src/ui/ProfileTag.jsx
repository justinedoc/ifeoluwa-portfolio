/* eslint-disable react/prop-types */
import profileNav from "../assets/navbar-profile.png";
function ProfileTag({ text, rotate }) {
  return (
    <div
      style={{ rotate }}
      className="bg-white text-black text-lg flex justify-between items-center w-fit p-1 pr-5 rounded-full gap-2"
    >
      <div className="w-8 h-8 rounded-full bg-[#131111] flex items-center justify-center">
        <img className="w-[88%]" src={profileNav} alt="profile" />
      </div>
      <p className="font-meduim text-2xl">{text}</p>
    </div>
  );
}

export default ProfileTag;
