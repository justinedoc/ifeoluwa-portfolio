import { useEffect, useState } from "react";
import { minorSkills } from "../data/dataForMinorSkills";

function AnimatedSkills() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after a short delay
    const timeout = setTimeout(() => setIsAnimated(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative">
      {minorSkills.map((skill) => (
        <div
          key={skill.name}
          style={{
            transformOrigin: "left center",
            transform: isAnimated ? `rotate(${skill.angle})` : "rotate(0deg)",
            top: isAnimated ? skill?.style?.top || "0" : "0",
            left: isAnimated ? skill?.style?.left || "0" : "0",
          }}
          className={`text-[1rem] ${skill.backgroundColor} w-fit min-w-48 p-1 rounded-full text-black font-bold absolute flex gap-[0.8rem] text-nowrap items-center cursor-pointer opacity-100 hover:opacity-85 transition-all duration-[2500ms] ease-in-out`}
        >
          <div className={"bg-black h-10 w-10 rounded-full"}></div>
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );
}

export default AnimatedSkills;
