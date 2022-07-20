import React from "react";

const InputTag = ({ 
  type,
  placeholder,
  className,
  value,
  style,
  name,
  onChange,
}) => {
  //   console.log("props", props);
  return (
    <input
      type={`${(type && type) || "text"}`}
      placeholder={placeholder}
      value={value}
      style={style}
      name={name}
      onChange={(e) => onChange(e.target.value, e)}
      className={`${className} px-3 py-1 bg-gray-50 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
    />
  );
};

export default InputTag;
