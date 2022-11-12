import React from "react";
import { useEffect } from "react";
import styles from "../styles/hero.module.css";
import pfp from "../public/pfp.png";

const Hero = () => {
  let leftPos = { x: 0, y: 0 };
  let rightPos = { x: 0, y: 0 };
  useEffect(() => {
    /*
    Sliding animation commented out in here and in the css file... not sure i like the look of it, but could maybe work
    */
    // setTimeout(() => {
    //   let leftElement = document.getElementById("left");
    //   let rightElement = document.getElementById("right");
    //   if (leftElement)
    //     leftElement.className = `${styles.leftHero_middle} bg-sky-500 w-2/3 h-full`;
    //   if (rightElement)
    //     rightElement.className = `${styles.rightHero_middle} bg-rose-500 w-1/3 h-full`;
    //   setTimeout(() => {
    //     if (leftElement)
    //       leftElement.className = `${styles.leftHero_end} bg-sky-500 w-2/3 h-full`;
    //     if (rightElement)
    //       rightElement.className = `${styles.rightHero_end} bg-rose-500 w-1/3 h-full`;
    //   }, 250);
    // }, 350);
  }, []);

  return (
    <div className="w-screen h-3/4 min-h-hero relative">
      <div className="h-full flex justify-start">
        <div
          id="left"
          className={`${styles.leftHero_start} bg-violet-500 w-2/3 h-full`}
        >
          <div
            className={`${styles.heroText} lg:ml-32 md:ml-16 ml-8 lg:w-auto md:w-48 w-32`}
          >
            <p className="text-lg text-white font-atkinson_regular">hi, i'm</p>
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
