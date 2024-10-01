import React, { useRef } from "react";
import Hover3d from "../Utils/Hover3d";

const Zoomin = () => {
  const ref = useRef(null);
  const hover = Hover3d(ref, {
    x: -5,
    y: 10,
    z: 4,
  });

  const hover2 = Hover3d(ref, {
    x: 40,
    y: 20,
    z: 7,
  });

  const hover3 = Hover3d(ref, {
    x: -40,
    y: -20,
    z: -7,
  });

  return (
    <div
      ref={ref}
      className="relative  overflow-hidden rounded-lg border border-[var(--color-border)]"
    >
      <div className="image  rounded-lg h-[50rem]  w-full">
        <img
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          src="/images/spiral.svg"
          alt=""
          style={{
            transform: hover.transform,
          }}
          className="object-cover  object-center scale-125 "
        />

        <img
          src="/images/arm2.jpg"
          alt=""
          style={{
            transform: hover2.transform,
            transition: hover2.transition,
          }}
          className=" monkey h-[80%] absolute top-[10%] right-12 rounded-lg object-cover object-top"
        />

        <img
          src="/images/arm.jpg"
          alt=""
          style={{
            transform: hover3.transform,
            transition: hover3.transition,
          }}
          className="smoke absolute h-[80%] top-[10%] left-12 rounded-lg object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Zoomin;
