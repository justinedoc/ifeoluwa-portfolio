import toolsImg from "../assets/tools.png";
import useMeasure from "react-use-measure";
import { motion, useMotionValue } from "motion/react";
import { useEffect } from "react";
import { animate } from "motion";

const IMAGES = [
  {
    src: toolsImg,
    alt: "tools",
  },
  {
    src: toolsImg,
    alt: "tools",
  },
];

function Tools() {
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 4;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 90,
      repeat: Infinity,
      repeatDelay: 0,
      repeatType: "loop",
    });

    return () => controls.stop();
  }, [xTranslation, width]);

  return (
    <section className="flex gap-3">
      <h1 className="text-[2.3rem] font-bold">Tools:</h1>
      <div className="overflow-hidden">
        <motion.div
          ref={ref}
          className="flex items-center justify-center gap-4"
          style={{ x: xTranslation }}
        >
          {[...IMAGES, ...IMAGES].map(({ src, alt }, index) => (
            <img
              key={index}
              src={src}
              alt={alt}
              className="object-contain h-auto w-auto max-h-16"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Tools;
