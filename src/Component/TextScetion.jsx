import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TextWrapper = ({ children }) => {
  const text = useRef(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(180, 7%, 75%, 0.9)",
      "#f2994a",
      "#f2994a",
      "#f2994a",
      "#f2994a",
    ]
  );
  return (
    <div ref={text}>
      <motion.p
        style={{
          opacity: opacity,
          x: x,
          color: colorChange,
        }}
        className="text-6xl  flex flex-col justify-center gap-5"
      >
        {children}
      </motion.p>
    </div>
  );
};

const TextScetion = () => {
  return (
    <div className="flex flex-col justify-center gap-10">
      <TextWrapper>
        Mars rovers are robotic explorers designed to navigate and study the
        Martian surface.{" "}
      </TextWrapper>
      <TextWrapper>
        They collect valuable data about Mars&apos; geology, atmosphere, and
        potential for past or present life.{" "}
      </TextWrapper>
      <TextWrapper>
        Rovers like Curiosity and Perseverance are equipped with cameras,
        drills, and scientific instruments.{" "}
      </TextWrapper>
      <TextWrapper>
        These rovers have provided stunning images and insights into Mars&apos;
        landscapes, including canyons, mountains, and dried riverbeds.{" "}
      </TextWrapper>
      <TextWrapper>
        The rovers solar panels or nuclear power sources enable them to operate
        for extended periods in harsh conditions.{" "}
      </TextWrapper>
      <TextWrapper>
        They analyze soil and rock samples to understand the planet&apos;s
        history and search for signs of water.{" "}
      </TextWrapper>
      <TextWrapper>
        Mars rovers have revolutionized our understanding of the Red Planet,
        paving the way for future human exploration.{" "}
      </TextWrapper>
    </div>
  );
};

export default TextScetion;
