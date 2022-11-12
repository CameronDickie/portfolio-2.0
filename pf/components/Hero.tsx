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
    <div className="h-3/4 flex justify-start">
      <div
        id="left"
        className={`${styles.leftHero_start} bg-sky-500 w-2/3 h-full`}
      ></div>
      <div
        id="right"
        className={`${styles.rightHero_start} bg-rose-500 w-1/3 h-full`}
      ></div>
      <img
        src={pfp.src}
        className={`${styles.heropfp} translate-y-1/2 w-48 h-48`}
      ></img>
    </div>
  );
};

export default Hero;
