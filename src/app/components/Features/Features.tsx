"use client";
import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import FeatureCard from "./FeatureCard";
import { featuresData } from "@/app/constants";

const Features = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <SectionHeading
        headingMini="Ideal solution for you"
        headingPrimary="Explore Ultimate features"
      />
      <div
        className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      items-center gap-[1.4rem]"
      >
        {featuresData.map((item, index) => {
          return (
            <div key={index} data-aos="zoom-in" data-aos-delay={index * 200}>
              <FeatureCard featureData={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
