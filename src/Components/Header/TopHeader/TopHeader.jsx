import React from "react";
import { HiMenu } from "react-icons/hi";

const TopHeader = () => {
  return (
    <div className="bg-gray-200">
      <div className="flex justify-between max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-3 h-12 w-52 px-3 bg-rose-500">
          <HiMenu className="text-slate-100 text-2xl"></HiMenu>
          <p className="text-slate-100 font-semibold">Browse Categories</p>
        </div>

        <div className="flex items-center">
          <ul className="flex justify-center gap-5 capitalize font-semibold">
            <li>
              <a href="/#">home</a>
            </li>
            <li>
              <a href="/#">today's deals</a>
            </li>
            <li>
              <a href="/#">trending products</a>
            </li>
            <li>
              <a href="/#">blog</a>
            </li>
            <li>
              <a href="/#">special offers</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
