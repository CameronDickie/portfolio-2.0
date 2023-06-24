import React from "react";

import styles from "../styles/summary.module.css";

const Summary = () => {
  return (
    <div
      className={`${styles.bgCard} w-screen h-screen flex justify-center items-center`}
    >
      <div className="w-5/6 h-5/6 bg-gray-200 transition ease-in-out hover:-translate-y-1 border-cd_purple border shadow-lg hover:shadow-xl">
        <h2 className="p-2 font-atkinson_bold text-center text-cd_red bg-gradient-to-l from-gray-100 via-cd_purple to-cd_purple text-xl">
          what am I about?
        </h2>
        <div className="font-atkinson_regular p-2">
          antidisestablishmentarianism
        </div>
        {/* <div className="w-full bg-violet-800 h-0.5"></div> */}
      </div>
    </div>
  );
};

export default Summary;
