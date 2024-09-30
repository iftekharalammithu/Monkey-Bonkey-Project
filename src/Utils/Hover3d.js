import React, { useEffect, useState } from "react";

const Hover3d = (ref, { x = 0, y = 0, z = 0 }) => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });
  const [isHover, setIsHover] = useState(false);
  //   console.log(ref);

  // Mouse Moving Position
  const handleMouseMove = (e) => {
    const { offsetWidth, offsetHeight } = ref.current;
    const { clientX, clientY } = e;
    const x = (clientX - offsetWidth / 2) / offsetWidth;
    const y = (clientY - offsetHeight / 2) / offsetHeight;
    // console.log(x, y);
    setCoords({ x, y });
  };
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    // Add event listeners for mouse interactions
    const { current } = ref;
    current.addEventListener("mousemove", handleMouseMove);
    current.addEventListener("mouseenter", handleMouseEnter);
    current.addEventListener("mouseleave", handleMouseLeave);

    // Clean up function to remove event listeners
    return () => {
      current.removeEventListener("mousemove", handleMouseMove);
      current.removeEventListener("mouseenter", handleMouseEnter);
      current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);
  const { x: xCoords, y: yCoords } = coords;
  //   console.log(xCoords, yCoords, coords);

  const xTransform = isHover ? xCoords * x : 0;
  const yTransform = isHover ? yCoords * y : 0;
  const zTransform = isHover ? z : 0;

  const transform = `perspective(1000px) rotateX(${yTransform}deg) rotateY(${-xTransform}deg) translateZ(${zTransform}px)`;
  const transition = isHover ? "none" : "all 0.5s ease";
  return { transform, transition };
};

export default Hover3d;
