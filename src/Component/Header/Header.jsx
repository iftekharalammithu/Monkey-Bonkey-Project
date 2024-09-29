import React from "react";
import { motion } from "framer-motion";
import logo from "/logo.jpeg";
import Button from "../Button/Button";

const Header = () => {
  return (
    <>
      <nav className="mx-16 border-b-[1px]  min-h-[10vh] flex justify-between items-center border-gray-700">
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
      <div className="header-content">
        <div>
          <h1 className="font-abril-fatface font-normal text-5xl">
            Buy, Collect And Sell Extraordinary NFTs
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi
            debitis, repellat quisquam, sunt nisi voluptates aut libero mollitia
            ullam ipsam quod corporis. Ad nobis ab, optio, voluptatibus tempora
            minus aliquid ut,
          </p>
          <div>
            <button>Create</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
