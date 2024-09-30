import React from "react";
import rover from "/images/rover.jpg";

const FullPage = () => {
  return (
    <div>
      <div className="image w-[calc(100%-10rem)] h-[1000px] relative rounded-lg border border-[var(--color-border)] transition-all duration-300 ease-in-out">
        <img
          className="object-cover object-center w-full h-full p-6 hover:border-[1px] hover:border-[#f2994a]"
          src={rover}
          alt="rover"
        />
      </div>
    </div>
  );
};

export default FullPage;
