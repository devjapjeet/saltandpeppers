import React from "react";
import { TbArrowRightTail } from "react-icons/tb";
import TimeOnLocation from "./TimeOnLocation";
const Address = ({officialName,street}) => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <TbArrowRightTail className="text-3xl mb-4" />
          {/* <div className="origin-top-right">
          <svg
            preserveAspectRatio="none"
            data-bbox="54.502 20.5 90.999 158.999"
            viewBox="54.502 20.5 90.999 158.999"
            height="26"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
            data-type="shape"
            role="presentation"
            aria-hidden="true"
            className="origin-top-right"
          >
            <g>
              <path d="M141.465 60.126c-19.657 0-35.649-15.955-35.649-35.57 0-2.242-1.805-4.056-4.035-4.056h-3.555c-2.231 0-4.035 1.814-4.035 4.056 0 19.615-15.992 35.57-35.654 35.57-2.231 0-4.035 1.814-4.035 4.056s1.805 4.056 4.035 4.056c15.632 0 29.374-9.213 37.107-21.573v128.778c0 2.242 1.95 4.056 4.36 4.056s4.36-1.814 4.36-4.056V46.669c7.731 12.358 21.471 21.57 37.102 21.57 2.231 0 4.035-1.814 4.035-4.056-.001-2.243-1.807-4.057-4.036-4.057z"></path>
            </g>
          </svg></div> */}
        </div>
        <div className="font-bold text-3xl mb-8">
          {officialName}
        </div>
        <div className="text-sm mb-8 text-gray-700 w-40">
          {street}
        </div>
      </div>
      <div className="">
        <TimeOnLocation
          heading="Opening hours"
          mondayTime="Mon - Fri: 8am - 8pm"
          saturdayTime="Saturday: 9am - 7pm"
          sundayTime="Sunday: 9am - 8pm"
        />
        <TimeOnLocation
          heading="Contact Us"
          mondayTime="Mail: saltandpepper@mail.com"
          saturdayTime="Tel: 1234567890"
        />
      </div>
    </div>
  );
};
export default Address;
