import React from "react";
const Smallbtn = ({style,onClick,className,children}) => {
  return (
    <div className="">
      <button
        style={style}
        onClick={onClick}
        className={`${className}  universal-btn `}
      >
        {children}
      </button>
    </div>
  );
};
export default Smallbtn;
