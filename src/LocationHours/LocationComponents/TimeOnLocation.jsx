import React from "react";
const TimeOnLocation = ({heading,mondayTime,saturdayTime,sundayTime}) => {
  return (
    <div className="">
      <div className="text-gray-500 mb-8 text-sm">
          <div className={`font-bold text-black text-lg mb-2`}>{heading}</div>
          <div className="">{mondayTime}</div>
          <div className="">{saturdayTime}</div>
          <div className="">{sundayTime}</div>
      </div>
    </div>
  );
};
export default TimeOnLocation;
