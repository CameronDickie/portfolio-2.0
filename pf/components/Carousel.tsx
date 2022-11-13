import React, { useEffect, useState } from "react";
import HoverCard from "./HoverCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Cheese from "../public/siteImages/cheese.jpg";
import Train from "../public/siteImages/train.jpg";
import Workers from "../public/siteImages/workers.jpg";
import Dashboard from "../public/siteImages/school-dashboard.png";

interface Site {
  url: string;
  title: string;
  subtitle: string;
  img: string;
  tools: string;
  desc: string;
}
const Carousel = () => {
  let initialSite: Site = {
    url: "https://github.com/CameronDickie/comp3004-team6",
    title: "School Dashboard",
    subtitle:
      "A school dashboard made as the final project for Carleton University's COMP3004 course",
    img: Dashboard.src,
    tools: "Maven, Spring-Boot, React, Websocket, JUnit",
    desc: "A project made in collaboration with teammates for COMP3004",
  };
  let secondSite: Site = {
    url: "github.com/CameronDickie/Test2",
    title: "Test2",
    subtitle: "This is the second test site example",
    img: Train.src,
    tools: "",
    desc: "",
  };
  let thirdSite: Site = {
    url: "github.com/CameronDickie/Test3",
    title: "Test3",
    subtitle: "This is the third test site example",
    img: Workers.src,
    tools: "",
    desc: "",
  };
  let siteList: Site[] = [initialSite, secondSite, thirdSite];
  const [curSiteIndex, setCurSiteIndex] = useState(0);
  useEffect(() => {}, [curSiteIndex]);
  //"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est sit amet facilisis. Ac tortor dignissim convallis aenean et tortor at. Tincidunt nunc pulvinar sapien et. Vulputate mi sit amet mauris commodo quis imperdiet. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Nulla at volutpat diam ut venenatis tellus in metus. Massa sed elementum tempus egestas sed sed risus pretium quam. Neque volutpat ac tincidunt vitae semper. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Egestas congue quisque egestas diam in arcu. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Dui sapien eget mi proin sed libero. Blandit volutpat maecenas volutpat blandit aliquam. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi."
  return (
    <div className="h-full grid grid-cols-3">
      <div className="h-full">
        <HoverCard
          title={siteList[curSiteIndex % siteList.length].title}
          subtitle={siteList[curSiteIndex % siteList.length].subtitle}
          key={curSiteIndex}
        />
      </div>

      <div className="bg-gray-200 relative col-span-2 w-auto h-auto grid grid-cols-12">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="m-auto p-2 transition ease-in-out delay-200 hover:bg-rose-200 hover:scale-125 motion-safe:hover:animate-pulse"
          size="lg"
          onClick={() => {
            if (curSiteIndex - 1 < 0) {
              setCurSiteIndex(siteList.length - 1);
            } else {
              setCurSiteIndex(curSiteIndex - 1);
            }
          }}
        />
        <div className="col-span-10 inline-grid grid-cols-2 my-10 bg-rose-500">
          <div className="col-span-2">
            {siteList[curSiteIndex % siteList.length].title}
          </div>
          <div>{siteList[curSiteIndex % siteList.length].tools}</div>
          <img
            className="w-full h-full object-cover object-left"
            src={siteList[curSiteIndex % siteList.length].img}
          />
          <div>{siteList[curSiteIndex % siteList.length].desc}</div>
          {/* <a
            className="underline text-white hover:text-violet-800 text-lg font-atkinson_regular"
            href={`https://${siteList[curSiteIndex % siteList.length].url}`}
          >
            Check out the github repo!
          </a>
          <img
            className="w-full h-full"
            src={siteList[curSiteIndex % siteList.length].img}
          /> */}
        </div>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="m-auto p-2 transition ease-in-out delay-200 hover:bg-rose-200 hover:scale-125 motion-safe:hover:animate-pulse "
          size="lg"
          onClick={() => {
            setCurSiteIndex(curSiteIndex + 1);
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
