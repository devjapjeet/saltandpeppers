import React, { useEffect, useState } from "react";
import FoodDish from "../MyComponents/FoodDish";
import axios from "axios";
// import RouterAnimation from "../MyComponents/RouterAnimation";
import { motion } from "framer-motion";

const Menu = ({ ourMenuRef }) => {
  const [foode, setFoode] = useState([]);
  const AllFood = () => {
    axios.get("../api.json").then((res) => {
      setFoode(res?.data);
      // console.log("res", res);
    });
  };
  // console.log("foode", foode); 
  useEffect(() => {
    AllFood();
  }, []);
  return (
    <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX:1 }}
    exit={{ scaleX: 0 }}
    transition={{  duration: 0.5 }}
    >
      <div className="menu-page px-36 py-10 " ref={ourMenuRef}>
        <div className=" text-center">
          <p className="textColor text-lg font-semibold my-2">Our Menu</p>
          <p className="font-semibold text-5xl my-6">
            Italian Inspired Kitchen
          </p>
        </div>
        <div className="menu-page-center mx-6 py-8">
          <div className="">
            <div className="text-center my-6">
              <p className="mb-6 font-bold text-2xl">All Day, Every Day</p>
            </div>
            {foode.map((item) => (
              <div className=" ">
                <p className=" font-bold text-2xl text-center py-6 after-title ">
                  {item.Titl}
                </p>
                <div className=" flex  flex-wrap justify-center w-full mx-auto">
                  {item?.Dish?.map((dish) => (
                    <FoodDish
                      Name={dish?.Name}
                      desc={dish?.Description}
                      price={dish?.Price}
                    />
                  ))}
                </div>
              </div>
            ))}
            <div className="">
              {/* {foode.map((item) => (
              <div className="">
                
              </div>
            ))} */}
            </div>
          </div>
          {/* <div className="text-center my-6">
          <div className="">
            <p className="mb-6 font-bold text-2xl">{item.Titl}</p>
          </div>
          {PizzaInfo.map((item)=>(
          <div className="">
            <div>
              <FoodDish Name={item.Name} />
            </div>
          </div>
          ))}
        </div> */}
          {/* <div className="text-center my-6">
          <div className="">
            <p className="mb-6 font-bold text-2xl">{item.Titl} </p>
          </div>
          {MainInfo.map((item)=>(
          <div className="">
            <div>
              <FoodDish Name={item.Name} />
            </div>
          </div>
          ))}
        </div> */}
        </div>
      </div>
    </motion.div>
  );
};
export default Menu;
