import React from "react";
// import Button from "./Buttons";

const ImgPara = ({
  className,
  imgOrder,
  textOrder,
  buttonChild,
  title,
  subTitle,
  paraGraph, 
  imageClass
}) => {
  return (
    <div className="w-full  ">
      {/* upper div pasta */}
      <div className={`flex px-24 h-screen w-full ${className}`}>
        <div className={`w-1/2 ${imgOrder}`}> 
          <div className={`w-full  ${imageClass}`}></div>
        </div>
        <div className={`w-1/2 py-10 pl-8 ${textOrder}`}>
          <div className="w-3/4">
            <div className="text-red-600 font-bold mb-6">{title}</div>
            <div className="mb-6 font-extrabold text-4xl w-">{subTitle}</div>
            <div className="font-light mb-10">{paraGraph}</div>
            <div className="">{buttonChild}</div>
          </div>
        </div>
      </div>
      {/* lower div  */}
      {/* <div className="flex px-24 h-screen w-full mt-16">
        <div className="w-1/2 py-10 pl-8 ">
          <div className="w-3/4">
            <div className="text-red-600 font-bold mb-6">
              An Offer You'll Love
            </div>
            <div className="mb-6 font-extrabold text-4xl w-">
              Gather around the Table with Our Family Bundle
            </div>
            <div className="font-light mb-10">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </div>
            <div className="">
              <Button>Order Online</Button>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-full family-img"></div>
        </div>
      </div> */}
    </div>
  );
};
export default ImgPara;
