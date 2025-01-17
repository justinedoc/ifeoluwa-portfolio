import useMeasure from "react-use-measure";
import { motion, useMotionValue } from "motion/react";
import { useEffect } from "react";
import { animate } from "motion";
import tools1 from "../assets/Tools logo/Group.png";
import tools2 from "../assets/Tools logo/image 10.png";
import tools3 from "../assets/Tools logo/image 11.png";
import tools4 from "../assets/Tools logo/image 12.png";
import tools5 from "../assets/Tools logo/image 13.png";
import tools6 from "../assets/Tools logo/image 14.png";
import tools7 from "../assets/Tools logo/image 9.png";
import useScreenSize from "../hooks/useScreenSize";

const IMAGES = [
  {
    src: tools1,
    alt: "tools",
  },
  {
    src: tools2,
    alt: "tools",
  },
  {
    src: tools3,
    alt: "tools",
  },
  {
    src: tools4,
    alt: "tools",
  },
  {
    src: tools5,
    alt: "tools",
  },
  {
    src: tools6,
    alt: "tools",
  },
  {
    src: tools7,
    alt: "tools",
  },
];

function Tools() {
  const { isSmallScreened } = useScreenSize();
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = width / 2 - 4;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 80,
      repeat: Infinity,
      repeatDelay: 0,
      repeatType: "loop",
    });

    return () => controls.stop();
  }, [xTranslation, width]);

  return (
    <section className="flex items-center gap-3 __section-inner my-3">
      <h1 className="md:text-[2.3rem] text-[2rem] font-bold">Tools:</h1>
      <div className="md:overflow-x-hidden overflow-x-auto">
        <motion.div
          ref={ref}
          className="flex items-center justify-center gap-5"
          style={!isSmallScreened && { x: xTranslation }}
        >
          {[...IMAGES, ...IMAGES].map(({ src, alt }, index) => (
            <img
              key={index}
              src={src}
              alt={alt}
              loading="lazy"
              className="object-cover max-h-[2rem]"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Tools;
