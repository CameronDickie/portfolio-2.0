import React from "react";
import styles from "../styles/hero.module.css";
import pfp from "../public/pfp.png";

const Hero = () => {
  return (
    <div className="w-screen h-3/5 min-h-hero relative">
      <div className="h-full flex justify-start">
        <div
          id="left"
          className={`${styles.leftHero_start} bg-violet-800 w-2/3 h-full`}
        >
          <div
            className={`${styles.heroText} lg:ml-32 md:ml-16 ml-8 lg:w-auto md:w-48 w-32`}
          >
            <p className="text-lg text-white font-atkinson_regular">
              hi, I&apos;m
            </p>
            <p className="lg:text-6xl md:text-4xl text-3xl text-rose-500 font-atkinson_bold">
              Cameron Dickie
            </p>
            <p className="text-white md:text-lg text-md font-atkinson_regular">
              {" "}
              I strive to balance aesthetics with accessibility.
            </p>
          </div>
        </div>
        <div
          id="right"
          className={`${styles.rightHero_start} bg-rose-500 w-1/3 h-full`}
        ></div>
      </div>
      <img src={pfp.src} className={`${styles.heropfp} w-48 h-48`}></img>
    </div>
  );
};

export default Hero;
