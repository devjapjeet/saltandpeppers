import React from "react";
const FoodDish = ({ Name, Title, desc,price }) => {
  return (
    <div className="">
      <div className="">
        <p className="mb-6 font-bold text-2xl  ">{Title}</p>
      </div>
      <div className="w-56 text-center my-6 mx-14">
        <div className="font-bold text-lg  h-14">{Name}</div>
        <div className="w-60 text-sm mb-4 text-gray-700">{desc}</div>
        <div className="">${price}</div>
      </div>
    </div>
  );
};
export default FoodDish; 
