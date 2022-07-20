import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
const Header = ({ bookTableRef }) => {
  const Linked = [
    {
      link: "Home",
      url: "/",
    },
    {
      link: "Menu",
      url: "/menu",
    },
    {
      link: "Book a Table",
      key: "tableBooking",
    },
    {
      link: "Order On-line",
      url: "/order-online",
    },
    {
      link: "About",
      url: "/about",
    },
    {
      link: "Hours & Location",
      url: "/hours-location",
    },
  ];
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handle = (ref) => {
    window.scrollTo({
      top: ref?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      <div className=" relative text-center primaryBgColor text-white py-1.5 mb-5">
        <div className="text-sm font-light">
          <span className="underline cursor-pointer tracking-widest">
            Join the Salt’n Pepper club{" "}
          </span>{" "}
          & get $10 off your next visit
        </div>
        <div className="absolute top-1 right-3 ">
          <button className="font-light">
            <span className="text-red-500 border-2 mr-1 mt-2 bg-white rounded-full p-px">
              &#128100;
            </span>{" "}
            Login
          </button>
        </div>
      </div>
 
      <div className="px-10">
        <div className=" text-center font-semibold mt-14 ">
          Est.<span className=" font-bold text-5xl"> Salt'n Pepper </span> 2023{" "}
        </div>

        <div className="flex justify-between w-4/5 px-12 mx-auto mt-12 font-normal">
          {Linked?.map((item) => (
            <div className="font-light mb-4 hover:border-b border-b border-transparent hover:border-red-600">
              {item?.key !== "tableBooking" ? (
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-red-600" : "text-black"}`
                  }
                  to={item?.url}
                >
                  {item?.link}
                </NavLink>
              ) : (
                <button
                  className="font-light "
                  to="booking"
                  onClick={async () => {
                    if (pathname !== "/") {
                      await navigate("/");
                      handle(bookTableRef.current);
                      return;
                    }
                    handle(bookTableRef.current);
                  }}
                >
                  {item?.link}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Header;
