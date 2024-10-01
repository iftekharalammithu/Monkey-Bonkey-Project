import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import logo from "/logo.jpeg";
import footer from "../Utils/Footer";

const Footer = () => {
  return (
    <div className="relative z-10 pt-20 pb-0 px-40 bg-[var(--color-bg)] border-t border-[var(--color-border)]">
      <nav className="flex justify-between gap-12">
        <div className="logo-con flex flex-col gap-8  w-1/2">
          <div className="logo flex items-center gap-4">
            <img src={logo} width={36} alt="logo" />
            <h2>Logo</h2>
          </div>
          <div className="input relative">
            <input
              type="text"
              className="w-full py-4 px-3 rounded-lg bg-[#161616] border border-[var(--color-border)] placeholder-[var(--color-border)] placeholder-font-medium"
              placeholder="Subscribe here..."
            />
            <button className="absolute right-8 top-1/2 -translate-y-1/2 bg-transparent cursor-pointer transition-all duration-300 ease-in-out hover:text-white hover:translate-x-2">
              &#8594;
            </button>
          </div>
          <p>
            Create, Sell And Collect Truly Rare Digital Artworks. Powered By
            Blockchain Technology.
          </p>
          <div className="socials flex gap-4 text-2xl">
            <AiFillGithub />
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <BsDiscord />
            <AiFillLinkedin />
          </div>
        </div>
        <div className="links flex-1 grid grid-cols-3 gap-8">
          {footer.map((item, index) => {
            return (
              <div key={index}>
                <h4 className="text-2xl mb-6">{item.title}</h4>
                <ul>
                  {item.links.map((text, index) => {
                    return (
                      <li className="mb-4" key={index}>
                        <a
                          className=" transition-all duration-300 ease-in-out hover:text-white"
                          href=""
                        >
                          {text.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </nav>
      <p className="rights flex justify-between items-center mt-8 px-8 border-t border-[var(--color-border)] py-4">
        <a href="">©2025 The Code Dealer. All rights reserved.</a>
        <a href="">Privacy policy | Terms of service</a>
      </p>
    </div>
  );
};

export default Footer;
