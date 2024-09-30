import React from "react";

const Cards = ({ title, description, image }) => {
  return (
    <div className="h-full  relative p-6 rounded-lg border border-[var(--color-border)] transition-all duration-300 ">
      <div className="">
        <p className="new absolute top-12 right-10 z-10 bg-[#222260] text-white px-1 py-2 rounded-lg font-semibold text-base">
          New
        </p>
        <div className="text absolute bottom-12 left-10 z-10">
          <h3 className="inline-block text-2xl text-[#f2994a] bg-[var(--color-bg)] px-4 py-1 rounded-full mb-2 border border-[var(--color-border)]">
            {title}
          </h3>
          <p>{description}</p>
        </div>
        <img
          src={image}
          className="w-full  h-full object-cover object-center rounded-lg"
          alt={title}
        />
      </div>
      <div className="overlay  absolute bottom-[-2px] left-[-2px] w-[calc(100%+4px)] h-[25%] bg-gradient-to-t from-[#111111] to-[rgba(17,17,17,0.06)] rounded-bl-lg rounded-br-lg"></div>
    </div>
  );
};

export default Cards;
