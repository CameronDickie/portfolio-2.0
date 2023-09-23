import React from "react";
import styles from "../styles/hero.module.css";
import pfp from "../public/cam.webp";
//xl:w-48 lg:w-48 md:w-36 sm:w-24 xs:w-18 xl:h-48 lg:h-48 md:h-36 sm:h-24 xs:h-18
const Hero = () => {
  return (
    <div className="bg-cd_purple w-full h-screen">
      <div className="w-full flex justify-start items-start md:items-center lg:items-center xl:items-center">
        <div className="h-48 flex justify-between top-4">
          <div className="ml-8 my-auto">
            <p className="text-lg text-white font-atkinson_regular">
              hi, I&apos;m
            </p>
            <p className="lg:text-6xl md:text-6xl text-5xl text-cd_red font-atkinson_bold">
              Cameron Dickie
            </p>
            <p className="text-white md:text-lg sm:text-md xs:text-sm font-atkinson_regular">
              I strive to balance aesthetics with accessibility.
            </p>
          </div>
          <div
            className={`${styles.viewport} hidden md:block lg:block xl:block mr-8 mt-8`}
          >
            <div className={styles.imageContainer}>
              <img
                src={pfp.src}
                className={`${styles.heropfp}`}
                alt="Profile Picture"
              />
            </div>
            <div id="blobContainer">
              <svg
                id="visual"
                className={styles.blobContainer}
                viewBox="0 0 900 600"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <g transform="translate(463.9657058225241 311.95483178936473)">
                  <path
                    id="blob1"
                    d="M151.4 -163.9C182.5 -120.2 184.8 -60.1 176.8 -8C168.9 44.2 150.7 88.4 119.6 123.4C88.4 158.4 44.2 184.2 -13.3 197.5C-70.7 210.7 -141.4 211.4 -177.1 176.4C-212.8 141.4 -213.4 70.7 -202.3 11.1C-191.2 -48.6 -168.4 -97.1 -132.8 -140.8C-97.1 -184.4 -48.6 -223.2 5.8 -229C60.1 -234.8 120.2 -207.5 151.4 -163.9"
                    fill="#ff0000"
                  ></path>
                </g>

                <g transform="translate(421.82156824588185 309.4979404713732)">
                  <path
                    id="blob2"
                    d="M136.7 -138.4C185.1 -88.4 237.5 -44.2 244.5 7C251.6 58.2 213.1 116.4 164.8 162.1C116.4 207.8 58.2 240.9 4.7 236.2C-48.8 231.5 -97.6 188.9 -129.7 143.2C-161.9 97.6 -177.5 48.8 -185 -7.5C-192.5 -63.9 -192.1 -127.8 -159.9 -177.8C-127.8 -227.8 -63.9 -263.9 -9.8 -254C44.2 -244.2 88.4 -188.4 136.7 -138.4"
                    fill="#ff0000"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
