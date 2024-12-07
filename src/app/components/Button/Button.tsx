import React from "react";

interface Props {
  text: string;
  color?: string;
}

const Button = ({ text, color }: Props) => {
  let colorClasses = "";
  switch (color) {
    case "blue":
      colorClasses =
        "bg-blue-500 hover:from-blue-500 hover:to-blue-400 hover:ring-blue-400";
      break;
    case "red":
      colorClasses =
        "bg-red-500 hover:from-red-500 hover:to-red-400 hover:ring-red-400";
      break;
    default:
      colorClasses =
        "bg-gray-500 hover:from-gray-500 hover:to-gray-400 hover:ring-gray-400";
      break;
  }
  return (
    <button
      className={
        `rounded-md px-4 py-1  text-[15px] md:px-8 md:py-2.5 overflow-hidden group relative
        hover:bg-gradient-to-r text-white hover:ring-2 hover:ring-offset-2 transition-all
        ease-out duration-300 ` + colorClasses
      }
    >
      <span
        className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform 
      translate-x-12 group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease"
      ></span>
      <span className="relative">{text}</span>
    </button>
  );
};

export default Button;
