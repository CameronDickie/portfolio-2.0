import React from "react";
import HoverCard from "./HoverCard";

const Carousel = () => {
  return (
    <div className="h-full grid grid-cols-3">
      <div className="h-full">
        <HoverCard
          title="Lorem Ipsum"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est sit amet facilisis. Ac tortor dignissim convallis aenean et tortor at. Tincidunt nunc pulvinar sapien et. Vulputate mi sit amet mauris commodo quis imperdiet. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Nulla at volutpat diam ut venenatis tellus in metus. Massa sed elementum tempus egestas sed sed risus pretium quam. Neque volutpat ac tincidunt vitae semper. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Egestas congue quisque egestas diam in arcu. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Dui sapien eget mi proin sed libero. Blandit volutpat maecenas volutpat blandit aliquam. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi."
        />
      </div>

      <div className="bg-gray-200 relative col-span-2 w-auto h-auto grid grid-cols-12">
        <div>L</div>
        <div className="col-span-10 my-10 bg-rose-500"></div>
        <div>R</div>
      </div>
    </div>
  );
};

export default Carousel;
