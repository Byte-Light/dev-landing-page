import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

interface Props {
  displayNavHandler: () => void;
}

const Nav = ({ displayNavHandler }: Props) => {
  return (
    <div className="relative">
      <div className="h-[12vh] bg-gradient-to-r from-blue-500 via-purple-500 to-gray-500 shadow-lg">
        <div className="w-[85%] flex items-center justify-between mx-auto h-full">
          <h1 className="text-[18px] md:text-[30px] font-extrabold text-white">
            <span className="text-[30px] md:text-[45px] text-red-600">W</span>
            ebdev.
          </h1>
          <ul className="hidden lg:flex items-center space-x-8">
            {["Home", "About", "Services", "Customer", "Blog"].map((item) => (
              <li
                key={item}
                className="text-[16px] md:text-[18px] text-white cursor-pointer hover:text-yellow-300 transition-all duration-300"
              >
                <Link href={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4 md:space-x-6">
            <Button
              text="Login"
              color="blue"
              customStyles="bg-white text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-full px-5 py-2 shadow-md"
            />
            <Button
              text="Sign up"
              color="red"
              customStyles="bg-red-600 text-white hover:bg-red-700 transition-all duration-300 rounded-full px-5 py-2 shadow-md"
            />
            <Bars3BottomRightIcon
              onClick={displayNavHandler}
              className="w-[1.8rem] lg:hidden h-[1.8rem] text-white cursor-pointer hover:text-yellow-300 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    
      </div>
    
  );
};

export default Nav;
