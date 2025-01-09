import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import useScreenSize from "../hooks/useScreenSize";

function Dots({ placements, setShowNav, showNav }) {
  const { isSmallScreened } = useScreenSize();
  
  return Array.from({ length: 4 }, (_, i) => {
    if (i === 1 && isSmallScreened) {
      return (
        <div
          onClick={() => setShowNav((cur) => !cur)}
          key={i}
          className="size-11 rounded-full flex justify-center items-center fixed z-[100] transition-all"
          style={{
            top: " 1.7rem",
            right: "1.9rem",
            background: showNav ? " #fff" : "#F3FFFE",
          }}
        >
          {!showNav ? (
            <HiOutlineMenuAlt1 size={24} className="rotate-180" />
          ) : (
            <IoClose size={24} />
          )}
        </div>
      );
    }

    return (
      <div
        key={i}
        className="bg-[#F3FFFE] md:size-8 size-11 rounded-full absolute"
        style={placements[i]}
      ></div>
    );
  });
}

export default Dots;
