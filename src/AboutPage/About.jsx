import React from "react";
import ImgPara from "../MyComponents/ImgAndparagraph";
import Stamp from "../Stamp.svg";
import { TbArrowRightTail } from "react-icons/tb";
import HiringInput from "../MyComponents/HiringForm/HiringInputs";
import Smallbtn from "../MyComponents/SmallBtn";
// import RouterAnimation from "../MyComponents/RouterAnimation";
import { motion } from "framer-motion";
// import GoogleMapz from "./GoogleMap";
const About = () => {
  const harita = [
    {
      arrow: <TbArrowRightTail />,
      number: "01",
      heading: "Founded on Family Values",
      paraGraph:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      arrow: <TbArrowRightTail />,
      number: "02",
      heading: "A Little Taste of Tuscany",
      paraGraph:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      arrow: <TbArrowRightTail />,
      number: "03",
      heading: "Authentic Recipes Reimagined",
      paraGraph:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
  ];
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="border">
        <div className="about-bg relative ">
          <img
            src={Stamp}
            alt=""
            className="absolute bottom-4 right-96 mr-14"
          />
          <ImgPara
            title="Our Story"
            subTitle="More than Great Food"
            paraGraph="
       
        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.


        This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors."
            imageClass={"about-img"}
            imgOrder={"order-last"}
          />
        </div>
        <div className="">
          <div className="text-center mt-16 font-semibold text-lg">
            <div className="textColor">Heritage</div>
            <div className="text-4xl mt-6 font-semibold">
              Serving Greatness Since 2023
            </div>
          </div>
          <div className="flex px-20 justify-between mb-20">
            {harita?.map((item) => (
              <div className="mb-">
                <div className="flex mt-8">
                  <div className=" text-2xl mr-2 mb-14">{item?.arrow}</div>
                  <div className="mt-1 text-xs">{item?.number}</div>
                </div>
                <div className=" text-xl font-bold w-48 mb-3">
                  {item?.heading}
                </div>
                <div className="w-72 font-light leading-7 text-sm">
                  {item?.paraGraph}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-bg-lower "></div>
        {/* Hiring form section  */}
        <div className="py-10 px-20 secondryBgColor ">
          <div className="text-center">
            <div className="textColor font-bold text-sm mb-4">
              Join the Team{" "}
            </div>
            <div className="text-4xl font-bold mb-8">We Are Hiring</div>
          </div>
          <div className="  secondryBgColor textColor grid grid-cols-2 gap-y-10 w-3/5 mx-auto ">
            <div className="">
              <HiringInput title={"Name *"} />
            </div>
            <div className="">
              <HiringInput title={"Last Name *"} />
            </div>
            <div className="">
              <HiringInput title={"Email *"} />
            </div>
            <div className="">
              <HiringInput title={"phone *"} />
            </div>
            <div className="">
              <div className="text-xs font-semibold mb-1">
                Position you apply for{" "}
              </div>
              <select
                placeholder="Select postition"
                defaultValue={""}
                className="w-72 border border-red-500 textColor secondryBgColor focus:outline-none focus:border-red-600 focus:ring-red-600 h-10"
              >
                <option
                  className="secondryBgColor hidden"
                  disabled
                  value="Select postition"
                >
                  Select postition
                </option>{" "}
                <option className="secondryBgColor" value="Executive Chef">
                  Executive Chef
                </option>
                <option
                  className="secondryBgColor"
                  value="Food & Beverage Manager"
                >
                  Food & Beverage Manager{" "}
                </option>
                <option className="secondryBgColor" value="Kitchen Manager">
                  Kitchen Manager{" "}
                </option>
                <option className="secondryBgColor" value="Restaurant Manager">
                  Restaurant Manager
                </option>
                <option className="secondryBgColor" value="Waiter">
                  Waiter
                </option>
              </select>
            </div>
            <div className="">
              <HiringInput title={"Available start date"} type={"date"} />
            </div>
          </div>
          <div className="secondryBgColor textColor w-full  pl-48 pr-20 pt-6">
            <HiringInput
              title={" Link to your Resume"}
              className=" w-5/6 text-xs mx-auto"
            />
          </div>
          <div className=" text-center mt-6">
            <Smallbtn>Apply Now</Smallbtn>
          </div>
        </div>
        {/* <div className=""><GoogleMapz/></div> */}
      </div>
    </motion.div>
  );
};
export default About;
