import axios from "axios";
import React, { useState, useEffect, } from "react";
import { BiExit } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import { HiMinus } from "react-icons/hi";
import { motion } from "framer-motion";

const OrderOnLine = ({ onlineOrdersRef }) => {
  const [menu, setMenu] = useState([]);
  const [select, setSelect] = useState({});
  console.log("select", select);
  const [isVisible, setIsVisible] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [request, setRequest] = useState([]);
  const [orders, setOrders] = useState([]);
  console.log("orders", orders);
  const indicate = orders.length;
  console.log("indicate", indicate);
  const perDish = orders.Price * orders.quantity;
  console.log("perDish", perDish);
  const Fooditems = () => {
    axios.get("../api.json").then((resp) => {
      setMenu(resp?.data);
    });
  };
  useEffect(() => {
    Fooditems();
  }, []);
  const handleAddDishes = (select) => {
    const productExist = orders.find((item) => item.id === select.id)?.id;
    if (productExist) {
      setOrders(
        orders.map((item) =>
          item.id === select.id
            ? { ...item, quantity: (item?.quantity && item?.quantity + 1) || 1 }
            : { ...item }
        )
      );
      console.log("productExist", productExist);
    }
  };
  console.log("orders***", orders);
  const handleRemoveDishes = (select) => {
    const productExist = orders.find((item) => item.id === select.id);
    if (productExist.quantity === 1) {
      setOrders(orders.filter((item) => item.id !== orders.id));
    } else {
      setOrders(
        orders.map((item) =>
          item.id === select.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const totalPrice = orders.reduce(
    (Price, orders) => Price + orders.quantity * orders.Price,
    0
  );

  console.log("menu", menu);
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="secondryBgColor px-36 py-10 border overflow-y-hidden ">
        <div className="hidden" ref={onlineOrdersRef}>
          lalsfsdk
        </div>
        <div className="m-4 px-10 bg-white">
          <div className=" py-6">
            <div className=" h-20 mb-6">
              <div className="w-72 px-2 text-medium font-light menu-bg-hov h-10 pt-1.5">
                Pickup, ASAP (in 15 minutes)
                <button className="underline ml-2 textColor ">Change</button>
              </div>
              <div className="font-light mt-6 border-b border-black pb-2">
                <div className="">
                  <select
                    name=""
                    id=""
                    className="w-44 focus:outline-none bg-white"
                  >
                    <option value="" className="bg-white ">
                      All Day, Every Day
                    </option>
                  </select>
                </div>
                <div className=""></div>
              </div>
            </div>
            <div className="font-bold text-2xl ml-10 mb-6">
              All Day, Every Day
            </div>
            {menu?.map((item) => (
              <div className="mb-8 ">
                <div className="text-2xl after-title text-center font-bold">
                  {item?.Titl}
                </div>
                <div className="flex flex-wrap justify-center">
                  {item?.Dish?.map((dish) => (
                    <div
                      className="menu-bg-hov shadow-md w-80 m-6 px-4 py-6"
                      onClick={() => {
                        setSelect({ ...dish, quantity: 1 });
                        setIsVisible(true);
                      }}
                    >
                      <div className="font-semibold mb-2">{dish?.Name}</div>
                      <div className="text-xs text-gray-70 mb-6">
                        {dish?.Description}
                      </div>
                      <div className="text-xs text-gray-70">
                        $ {dish?.Price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* -----------------------------------------------MODAL FIRST--------------------------------------- */}
        {isVisible && !isCheckbox && (
          <div
            onClick={() => setIsVisible(false)}
            className="fixed  top-0 left-0  w-full h-screen overflow-hidden backdrop-blur-xs bg-black/30"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-1/2 bg-white sticky mt-20 h-96 left-0 right-0 mx-auto top-28"
            >
              <div className="py-6 px-6 border-b">
                <div className="text-2xl font-bold mb-2 mt-8">
                  {select?.Name}
                </div>
                <div className=" text-gray-900 text-sm mb-8">
                  {select?.Description}
                </div>
                <div className="font-light text-gray-700 text-sm mb-2">
                  Special Request
                </div>
                <div className="">
                  <input
                    className="outline-0 pl-2 text-gray-700 border w-full h-12 bg-gray-50 "
                    placeholder="Add them here. We'll do our best to make it happen."
                    type="text"
                    onInput={(e) => setRequest(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex w-4/5 mx-auto py-6 justify-between">
                <div className="flex border w-24  h-10 justify-between py-2 px-3 text-gray-500 ">
                  <div className="">
                    <button
                      onClick={() => {
                        setSelect((prev) => ({
                          ...prev,
                          quantity: (prev?.quantity && prev?.quantity - 1) || 1,
                        }));
                      }}
                    >
                      <HiMinus />
                    </button>
                  </div>
                  <div className="text-xs font-bold">{select?.quantity} </div>
                  <div className="">
                    <button
                      onClick={() => {
                        setSelect((prev) => ({
                          ...prev,
                          quantity: (prev?.quantity && prev?.quantity + 1) || 1,
                        }));
                      }}
                    >
                      <MdAdd />
                    </button>
                  </div>
                </div>
                <div
                  onClick={() => setIsVisible(true)}
                  className="cursor-pointer border ml-4 w-full primaryBgColor text-white text-center py-1.5 font-light"
                >
                  <p
                    onClick={() => {
                      setIsCheckbox(true);
                      setOrders(
                        orders.concat({
                          ...select,
                          orderId: Math.floor(Math.random() * 1000 + 1),
                        })
                      );
                      handleAddDishes(select);
                    }}
                  >
                    Add to my order ${select.Price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* -----------------------------------------------MODAL SECOND--------------------------------------- */}
        {isCheckbox && (
          <div
            className="fixed top-0 left-0 w-full h-screen overflow-y-hidden backdrop-blur-xs bg-black/30 overflow-hidden"
            onClick={() => setIsCheckbox(false)}
          >
            <div
              className="w-1/3 bg-white  h-full right-0 p-4 overflow-y-scroll "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="">
                <div className="flex justify-between mb-8 sticky">
                  <div className="font-bold text-2xl">
                    My Orders (<span className="textColor">{indicate}</span>)
                  </div>
                  <div
                    className="textColor mr-4 mt-2"
                    onClick={() => setIsCheckbox(false)}
                  >
                    <button>
                      <BiExit />
                    </button>
                  </div>
                </div>
                {orders.map((item) => (
                  <div className="">
                    <div className="px-2 border py-1 rounded mb-1.5 ">
                      <div className="flex justify-between text-gray-800">
                        <div className="border flex w-16 justify-between px-2 rounded ">
                          <div className="">
                            <button
                              className=""
                              onClick={() => {
                                handleRemoveDishes(item);
                              }}
                            >
                              <HiMinus />
                            </button>
                          </div>

                          <div className="text-xs font-bold text-gray-500">
                            {item?.quantity}
                          </div>
                          <div className="">
                            <button
                              onClick={() => {
                                handleAddDishes(item);
                              }}
                            >
                              <MdAdd />
                            </button>
                          </div>
                        </div>
                        <div className="text-sm font-normal mt-px ">
                          {item?.Name}
                        </div>
                        <div className="text-sm">
                          ${item?.Price}
                          .00
                        </div>
                      </div>
                      <div className="flex mt-2 font-semibold w-28 text-sm textColor justify-between">
                        <div
                          className=""
                          onClick={() =>
                            setOrders(
                              orders?.filter((items) => items?.id !== item?.id)
                            )
                          }
                        >
                          <button className="shadow hover:border-b-red-600 border-b border-transparent px-1 rounded">
                            Remove
                          </button>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cursor-pointer inputhov px-2">
                <div className="text-xs mt-1 textColor font-semibold">
                  Special Request
                </div>
                <div className="text-gray-700 text-sm">
                  <input
                    type="text"
                    value={request}
                    className="inputhov w-full text-lg focus:outline-none focus:border-red-600 focus:ring-red-600 h-16"
                    placeholder="Add Order Notes"
                  />
                </div>
                <div className=""></div>
              </div>
              <div className="border bottom-2 fixed w-80 text-white primaryBgColor rounded py-2 px-1.5">
                Grand Total{" "}
                <span className="right-2 absolute"> $ {totalPrice}.00</span>
              </div>
              <hr />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
export default OrderOnLine;
