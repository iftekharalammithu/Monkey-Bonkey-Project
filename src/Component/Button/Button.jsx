import React from "react";
import { FaWallet } from "react-icons/fa";

const Button = () => {
  return (
    <div className="">
      <button className="px-4 hover:bg-gray-800 hover:text-white transition-all duration-200  py-3 flex items-center gap-3 rounded-xl bg-gray-900 border-gray-500 border-[1px]">
        <FaWallet />
        Connect Wallet
      </button>
    </div>
  );
};

export default Button;
