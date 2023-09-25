import React from "react";
import KUTE from "kute.js";
import styles from "../styles/hero.module.css";
import pfp from "../public/cam.webp";
//xl:w-48 lg:w-48 md:w-36 sm:w-24 xs:w-18 xl:h-48 lg:h-48 md:h-36 sm:h-24 xs:h-18

let tweens: any[] = [];

const animateBlobs = () => {
  // Example with 2 blobs. You can expand this.
  const blobs = ["#blob1", "#blob2"];

  blobs.forEach((blob, index) => {
    const nextBlob = blobs[(index + 1) % blobs.length];
    const tween = KUTE.fromTo(
      blob,
      { path: blob },
      { path: nextBlob },
      { duration: 1000 }
    );
    tween.start();
    tweens.push(tween);
  });
};
const stopAnimation = () => {
  tweens.forEach((tween) => {
    if (tween) tween.stop();
  });
  tweens = [];
};

const Hero = () => {
  return (
    <div className="bg-cd_purple w-full h-screen">
      <div className="w-full flex justify-start items-start md:items-center lg:items-center xl:items-center">
        <div className="h-48 w-full flex justify-between">
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
          <SideBar />
        </div>
      </div>
    </div>
  );
};

const SideBar = () => {
  return (
    <div className=" h-screen bg-cd_red relative hidden md:block lg:block xl:block w-32 md:w-48 lg:w-64">
      <div
        className={`${styles.viewport} p-4`}
        onMouseOver={animateBlobs}
        onMouseLeave={stopAnimation}
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
                fill="#200346"
              ></path>
            </g>

            <g
              transform="translate(421.82156824588185 309.4979404713732)"
              className="hidden"
            >
              <path
                id="blob2"
                d="M136.7 -138.4C185.1 -88.4 237.5 -44.2 244.5 7C251.6 58.2 213.1 116.4 164.8 162.1C116.4 207.8 58.2 240.9 4.7 236.2C-48.8 231.5 -97.6 188.9 -129.7 143.2C-161.9 97.6 -177.5 48.8 -185 -7.5C-192.5 -63.9 -192.1 -127.8 -159.9 -177.8C-127.8 -227.8 -63.9 -263.9 -9.8 -254C44.2 -244.2 88.4 -188.4 136.7 -138.4"
                fill="#200346"
              ></path>
            </g>

            <g className="hidden" transform="translate(446.2340464403127 302.60906593308187)"><path id="blob3" d="M166.4 -174.4C191.4 -141.4 170.7 -70.7 167.8 -2.9C164.8 64.8 179.6 129.6 154.6 163C129.6 196.3 64.8 198.2 7 191.2C-50.9 184.2 -101.8 168.5 -132.3 135.2C-162.8 101.8 -172.9 50.9 -170.8 2.1C-168.7 -46.7 -154.3 -93.3 -123.8 -126.3C-93.3 -159.3 -46.7 -178.7 12 -190.7C70.7 -202.7 141.4 -207.4 166.4 -174.4" fill="#200346"></path></g>

            <g className="hidden" transform="translate(465.9623451635838 269.20735368693886)"><path id="blob4" d="M156.7 -164.9C181.9 -131.5 166.4 -65.8 168.9 2.5C171.4 70.7 191.8 141.4 166.6 190.1C141.4 238.8 70.7 265.4 14.3 251.1C-42.2 236.9 -84.4 181.7 -127.4 133C-170.4 84.4 -214.2 42.2 -210.8 3.4C-207.4 -35.4 -156.7 -70.7 -113.7 -104C-70.7 -137.4 -35.4 -168.7 15.2 -183.9C65.8 -199.1 131.5 -198.2 156.7 -164.9" fill="#200346"></path></g>

            <g className="hidden" transform="translate(444.83226933437703 289.3014190785011)"><path id="blob5" d="M151.1 -152C200 -102.3 246.5 -51.1 250.7 4.2C255 59.6 216.9 119.3 168.1 169.3C119.3 219.3 59.6 259.6 -4.1 263.8C-67.9 267.9 -135.8 235.8 -181.8 185.8C-227.8 135.8 -251.9 67.9 -235.6 16.3C-219.4 -35.4 -162.7 -70.7 -116.7 -120.4C-70.7 -170 -35.4 -234 7.9 -241.9C51.1 -249.8 102.3 -201.6 151.1 -152" fill="#200346"></path></g>

            <g className="hidden" transform="translate(404.88089370931175 265.56274873686937)"><path id="blob6" d="M179.8 -157.5C227.1 -132.5 255.6 -66.2 257.8 2.2C260 70.7 236.1 141.4 188.8 185.9C141.4 230.4 70.7 248.7 12.8 235.9C-45 223 -90 179 -118.9 134.5C-147.7 90 -160.4 45 -165.5 -5.2C-170.7 -55.4 -168.4 -110.8 -139.6 -135.8C-110.8 -160.8 -55.4 -155.4 5.4 -160.8C66.2 -166.2 132.5 -182.5 179.8 -157.5" fill="#200346"></path></g>

            <g className="hidden" transform="translate(458.50014264343537 320.6332255874236)"><path id="blob7" d="M110.6 -125.9C145.2 -75.9 176.6 -37.9 183.8 7.2C191 52.3 174 104.7 139.3 145.3C104.7 186 52.3 215 8.5 206.5C-35.4 198 -70.7 152 -108.9 111.4C-147 70.7 -188 35.4 -199.2 -11.2C-210.4 -57.7 -191.8 -115.5 -153.7 -165.5C-115.5 -215.5 -57.7 -257.7 -9.9 -247.8C37.9 -237.9 75.9 -175.9 110.6 -125.9" fill="#200346"></path></g>

            <g className="hidden" transform="translate(482.6724885588433 297.50221436551675)"><path id="blob8" d="M108.4 -113.7C146 -70.7 186 -35.4 195.6 9.5C205.1 54.4 184.2 108.9 146.6 150.6C108.9 192.2 54.4 221.1 -8.1 229.2C-70.7 237.4 -141.4 224.8 -190.3 183.1C-239.1 141.4 -266 70.7 -263 3.1C-259.9 -64.6 -226.8 -129.2 -178 -172.2C-129.2 -215.2 -64.6 -236.6 -14.6 -222C35.4 -207.4 70.7 -156.7 108.4 -113.7" fill="#200346"></path></g>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Hero;
