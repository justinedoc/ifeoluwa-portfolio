/* eslint-disable react/prop-types */
import cLogo1 from "../assets/cLogo-1.png";
import cLogo2 from "../assets/cLogo-2.png";
import cLogo3 from "../assets/cLogo-3.png";
import cLogo4 from "../assets/cLogo-4.png";
import cLogo5 from "../assets/cLogo-5.png";
import cLogo6 from "../assets/cLogo-6.png";
import cLogo7 from "../assets/cLogo-7.png";
import cLogo8 from "../assets/cLogo-8.png";
import cLogo9 from "../assets/cLogo-9.png";
import cLogo10 from "../assets/cLogo-10.png";
import cLogo11 from "../assets/cLogo-11.png";
import useMeasure from "react-use-measure";
import { motion, useMotionValue } from "motion/react";
import { useEffect } from "react";
import { animate } from "motion";

const IMAGES = [
  {
    src: cLogo1,
    alt: "company logo",
  },
  {
    src: cLogo2,
    alt: "company logo",
  },
  {
    src: cLogo3,
    alt: "company logo",
  },
  {
    src: cLogo4,
    alt: "company logo",
  },
  {
    src: cLogo5,
    alt: "company logo",
  },
  {
    src: cLogo6,
    alt: "company logo",
  },
  {
    src: cLogo7,
    alt: "company logo",
  },
  {
    src: cLogo8,
    alt: "company logo",
  },
  {
    src: cLogo9,
    alt: "company logo",
  },
  {
    src: cLogo10,
    alt: "company logo",
  },
  {
    src: cLogo11,
    alt: "company logo",
  },
];

function TeamsCarousel() {
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

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
    <motion.div ref={ref} className="flex gap-4" style={{ x: xTranslation }}>
      {[...IMAGES, ...IMAGES].map(({ src, alt }, index) => (
        <Card key={index} alt={alt} src={src} />
      ))}
    </motion.div>
  );
}

function Card({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="object-contain h-auto w-auto max-h-[3rem] max-w-32"
    />
  );
}

export default TeamsCarousel;
