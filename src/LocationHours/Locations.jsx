import React from "react";
// import RouterAnimation from "../MyComponents/RouterAnimation";
import Address from "./LocationComponents/Address";
import MapContainer from "./GoogleMap";
import { motion } from "framer-motion";
const Location = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="secondryBgColor py-10 px-16">
        <div className="text-center">
          <div className="textColor font-semibold mb-6">Hours & Locations</div>
          <div className=" text-4xl font-bold mb-14">Visit Us</div>
        </div>
        <div className="px-28">
          <div className=" flex justify-between">
            <Address
              officialName="Salt’n Pepper Union Square"
              street="500 Terry Francois Street SF, CA 94158"
            />
            <Address
              officialName="Salt’n Pepper North Beach"
              street="500 Terry Francois Street SF, CA 94158"
            />
          </div>
        </div>
      </div>
      <div className="mb-[540px]">
        <MapContainer />
      </div>
    </motion.div>
  );
};
export default Location;
