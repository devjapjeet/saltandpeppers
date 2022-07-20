import React from "react";
const HiringInput = ({
  title,
  type,
  placeholder,
  value,
  style,
  name,
  className,
}) => {
  return (
    <>
      <div className={`text-xs font-semibold mb-1`}>{title} </div>
      <input
        type={`${(type && type) || "text"}`}
        placeholder={placeholder}
        value={value}
        style={style}
        name={name}
        className={`${className} w-72 px-2 border border-red-500 textColor secondryBgColor focus:outline-none focus:border-red-600 focus:ring-red-600 h-10`}
      />
    </>
  );
};
export default HiringInput;
