import React, { useRef } from "react";

const TextWrapper = ({ children }) => {
  const text = useRef(null);

  return (
    <div ref={text}>
      <p className="text-6xl  flex flex-col justify-center gap-5">{children}</p>
    </div>
  );
};

const TextScetion = () => {
  return (
    <div>
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
