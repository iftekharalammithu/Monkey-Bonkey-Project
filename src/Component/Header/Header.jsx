import React, { useRef } from "react";
import { motion } from "framer-motion";
import logo from "/logo.jpeg";
import Button from "../Button/Button";
import { FaRocket } from "react-icons/fa";
import nft from "/images/monkey.png";
import Hover3d from "../../Utils/Hover3d";

const Header = () => {
  const hero = useRef(null);

  const { transform, transition } = Hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  const imageHover = Hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });
  // console.log(transform, transition);
  return (
    <div ref={hero}>
      <nav className="mx-16  border-b-[1px]  min-h-[10vh] flex justify-between items-center border-gray-700">
        {/* logo image */}
        <div className="items-center flex gap-4 cursor-pointer">
          <img
            onClick={() => {
              window.location.href = "/";
            }}
            src={logo}
            className="w-[100px]  rounded-2xl h-[50px]"
            alt="Logo"
          />
          <h2 className="text-4xl font-bold text-white">Logo</h2>
        </div>
        {/* search bar */}
        <div className="flex-[2] flex justify-center ">
          <input
            placeholder="Search"
            className="outline-none  text-gray-200 placeholder:text-gray-600 w-[50%] px-3 py-4 rounded-xl  bg-gray-900 border-gray-500 border-[1px] text-lg"
            type="text"
          />
        </div>
        {/* menu items */}
        <ul className="flex  gap-8 items-center">
          <li className="cursor-pointer transition-all duration-200 ease-in-out hover:text-gray-200 hover:scale-110">
            <a href="#">Home</a>
          </li>
          <li className="cursor-pointer transition-all duration-200 ease-in-out hover:text-gray-200 hover:scale-110">
            <a href="#auction">Auction</a>
          </li>
          <li className="cursor-pointer transition-all duration-200 ease-in-out hover:text-gray-200 hover:scale-110">
            <a href="#marketplace">Marketplace</a>
          </li>
          <li className="cursor-pointer transition-all duration-200 ease-in-out hover:text-gray-200 hover:scale-110">
            <a href="#about">About</a>
          </li>
          <li>
            <Button />
          </li>
        </ul>
      </nav>
      {/* header content */}
      <div className="header-content pr-36 pb-20 pl-28 flex justify-between items-center gap-16 min-h-[90vh]   ">
        <div className=" ">
          <h1 className="font-abril-fatface text-[#f2994a] pb-6 transition-all font-normal text-clamp">
            Buy, Collect And Sell Extraordinary NFTs
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi
            debitis, repellat quisquam, sunt nisi voluptates aut libero mollitia
            ullam ipsam quod corporis. Ad nobis ab, optio, voluptatibus tempora
            minus aliquid ut,
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-[#f2994a] hover:bg-[#f2994a]/80 flex p-3 gap-3 items-center px-4 text-white rounded-2xl">
              {" "}
              <FaRocket />
              Get Started
            </button>
            <button className="px-4 hover:bg-gray-800 hover:text-white transition-all duration-200  py-2 flex items-center gap-3 rounded-2xl bg-gray-900 border-gray-500 border-[1px]">
              Learn More
            </button>
          </div>
        </div>
        {/* nft image */}
        <div className="">
          <div
            style={{ transform: transform }}
            className="p-4 rounded-lg border-[#424242] border-[1px] bg-[#111111]"
          >
            <img
              style={{
                transform: imageHover.transform,
                transition: imageHover.transition,
              }}
              className="rounded-lg"
              width={600}
              height={600}
              src={nft}
              alt="nft"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
