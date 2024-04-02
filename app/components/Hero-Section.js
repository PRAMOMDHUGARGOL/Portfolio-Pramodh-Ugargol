// components/HeroSection.js

import React from "react";
import userData from "@Constants/data";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="px-4 py-10 md:py-15">
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold mt-4 md:mt-0">
          Hi, I am
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mt-2 md:mt-4">
          {" "}
          {userData.name}{" "}
        </h1>
        <h2 className="text-xl md:text-4xl lg:text-4xl mt-6">
          Building innovative solutions for the future
        </h2>
        <p className="mt-4 text-base md:text-lg lg:text-xl">
          Bengaluru-based software sorcerer, brewing code potions!{" "}
          <span role="img" aria-label="India Flag">
            🇮🇳
          </span>
        </p>
        <a href="mailto:pramram.18@gmail.com">
          <button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 mr-4 ">
            Say Hi!
          </button>
        </a>
        <a href={"/resume"}>
          <button className="mt-8  border-4 border-green-500  hover:border-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
