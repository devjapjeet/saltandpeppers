import React from "react";
const Button = ({ style, className, onClick, children }) => { 
  return (
    <div className="flex">
      <button
        style={style}
        onClick={onClick}
        className={`${className}  py-2 w-44 text-white font-bold text-lg primaryBgColor`}
      >
        {children}
      </button>
      <div className=" py-3 px-3 bg-white text-red-600 border border-red-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          class="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </div>
    </div>
  );
};
export default Button;
