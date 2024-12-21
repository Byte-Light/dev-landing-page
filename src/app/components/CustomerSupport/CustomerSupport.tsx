import Image from "next/image";
import React from "react";
import SupportImg from "../../../../public/images/support.jpg";
import { CheckIcon } from "@heroicons/react/24/solid";

const CustomerSupport = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="relative order-2 lg:order-1"
        >
          <Image
            src={SupportImg}
            alt="Customer Support Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div
          className="order-1 lg:order-2"
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-6">
            Customer Support That Exceeds Expectations
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            We prioritize your satisfaction, ensuring you have a seamless
            experience. Our dedicated support team is always here to help you
            with tailored solutions.
          </p>

          {/* Feature List */}
          <div className="space-y-4">
            {[
              "Medical and Vision",
              "Life Insurance",
              "401(k) Savings Plans",
              "Health Savings Accounts (HSAs)",
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${200 + index * 200}`}
                className="flex items-center space-x-3"
              >
                <div className="w-6 h-6 flex items-center justify-center bg-red-100 rounded-full">
                  <CheckIcon className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-lg font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;
