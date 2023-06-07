import React from "react";

const Summary = () => {
  return (
    <div className="bg-gray-100 w-screen h-screen flex justify-center items-center">
      <div className="w-5/6 h-5/6 bg-gray-200 transition ease-in-out hover:-translate-y-1 border-violet-800 border shadow-lg hover:shadow-xl">
        <h2 className="p-2 font-atkinson_bold text-center text-rose-500 bg-gradient-to-l from-gray-100 via-violet-800 to-violet-800 text-xl">
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