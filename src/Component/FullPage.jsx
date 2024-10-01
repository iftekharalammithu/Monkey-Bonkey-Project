import React, { useRef } from "react";
import rover from "/images/rover.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const FullPage = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const xTransform = useTransform(
    scrollYProgress,
    [1, 0.5, 0.1, 0],
    [-1000, 0, 0, 0]
  );
  return (
    <div ref={scrollRef}>
      <motion.div
        style={{
          scale: scale,
          x: xTransform,
        }}
        className="image w-[calc(100%-10rem)] h-[1000px] relative rounded-lg border border-[var(--color-border)] transition-all duration-300 ease-in-out"
      >
        <img
          className="object-cover object-center w-full h-full p-6 hover:border-[1px] hover:border-[#f2994a]"
          src={rover}
          alt="rover"
        />
      </motion.div>
    </div>
  );
};

export default FullPage;
