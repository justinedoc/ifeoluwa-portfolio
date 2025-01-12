import toolsImg from "../assets/tools.png";
// import useMeasure from "react-use-measure";
// import { motion, useMotionValue } from "motion/react";
// import { useEffect } from "react";
// import { animate } from "motion";

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
  // let [ref, { width }] = useMeasure();

  // const xTranslation = useMotionValue(0);

  // useEffect(() => {
  //   let controls;
  //   let finalPosition = -width / 2 - 4;

  //   controls = animate(xTranslation, [0, finalPosition], {
  //     ease: "linear",
  //     duration: 90,
  //     repeat: Infinity,
  //     repeatDelay: 0,
  //     repeatType: "loop",
  //   });

  //   return () => controls.stop();
  // }, [xTranslation, width]);

  return (
    <section className="flex items-center gap-3 __section-inner">
      <h1 className="md:text-[2.3rem] text-md font-bold">Tools:</h1>
      <div className="overflow-x-auto">
        <div
          // ref={ref}
          className="flex items-center justify-center gap-4"
          // style={{ x: xTranslation }}
        >
          {IMAGES.map(({ src, alt }, index) => (
            <img
              key={index}
              src={src}
              alt={alt}
              loading="lazy"
              className="object-contain h-auto w-auto max-h-16"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;
