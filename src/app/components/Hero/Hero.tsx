import React from "react";
import Button from "../Button/Button";
import HeroImg from "../../../../public/images/hero.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="h-[75vh] lg:h-[90vh] flex items-center justify-center bg-gradient-to-r 
      from-blue-500 via-purple-500 to-gray-500 text-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[85%] mx-auto gap-8">
        {/* Text Section */}
        <div className="col-span-2 space-y-6">
          <h1
            data-aos="fade-right"
            className="text-[30px] md:text-[45px] lg:text-[55px] font-extrabold leading-[1.4] lg:leading-[1.2] 
            tracking-tight"
          >
            Empowering Your Business with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
              Innovation & Growth
            </span>
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="text-[16px] md:text-[18px] lg:text-[20px] font-medium opacity-90 leading-[1.8]"
          >
            Transform your business with cutting-edge strategies designed to
            elevate your growth. Discover limitless opportunities tailored to
            your vision.
          </p>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="flex items-center space-x-4 md:space-x-6"
          >
            <Button text="Get Started" color="blue" />
            <Button text="Explore Features" color="red" />
          </div>
        </div>

        {/* Image Section */}
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="col-span-3 flex justify-center"
        >
          <Image
            src={HeroImg}
            alt="Hero Image"
            className="w-full max-w-[500px] lg:max-w-[600px] drop-shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
