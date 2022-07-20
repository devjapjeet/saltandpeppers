import React from "react";
import "../App.css";
import Button from "../MyComponents/Buttons";
import ImgPara from "../MyComponents/ImgAndparagraph"; 
import BookingTable from "../MyComponents/BookingTable";
import { useNavigate } from "react-router-dom";
// import RouterAnimation from "../MyComponents/RouterAnimation";
import { motion } from "framer-motion";
const Body = ({ bookTableRef, ourMenuRef, onlineOrdersRef }) => {
  const Foodgrid = [
    {
      images:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      images:
        "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      images:
        "https://images.pexels.com/photos/7596935/pexels-photo-7596935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      images:
        "https://images.pexels.com/photos/3184195/pexels-photo-3184195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      images:
        "https://images.pexels.com/photos/2337842/pexels-photo-2337842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      images:
        "https://images.pexels.com/photos/3171795/pexels-photo-3171795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  const navigate = useNavigate();
  const handle = (ref) => {
    window.scrollTo({
      top: ref?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.3 }}
    >
      {" "}
      <div className="">
        <div className="relative">
          <div className="" class="header-bg-img">
            Italian Inspired kitchen in <br /> the Heart of San Francisco
          </div>
          <div className="absolute bottom-0 left-32 flex ml-8 -mb-5  justify-between w-3/4 mx-auto">
            <Button
              onClick={async () => {
                await navigate("/menu");
                console.log("first", { a: 10 });
                handle(ourMenuRef?.current);
              }}
            >
              Our Menu
            </Button>
            <Button
              onClick={async () => {
                await navigate("/order-online");
                handle(onlineOrdersRef?.current);
              }}
            >
              Delivery & Pickup
            </Button>
            <Button onClick={() => handle(bookTableRef.current)}>
              Book a Table
            </Button>
          </div>
        </div>
        {/* pharagraph div  */}
        <div className="h-screen" class="para-img">
          <div className="h-screen mt-5 py-32 relative ">
            <div className=" absolute top-16 left-20 opacity-20">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtNDUE94Ko0SdX5_BW3csNKnx747zj1KHMblu_hAPvdnGO7R4rQ9Lrs7EQQn82kBexe-8&usqp=CAU"
                alt=""
              />
            </div>
            <div className=" text-center text-4xl font-extrabold leading-relaxed ">
              We believe in the simple pleasures of life. <br /> Good food,
              fresh ingredients, and awesome vibes. <br /> Welcome to Salt'n
              Pepper, make yourself at home.
            </div>
          </div>
        </div>
        <div className="bg-color">
          <ImgPara
            title="Our Fan's Favorits"
            subTitle=" Pasta Carbonara - The Ultimate Comfort"
            paraGraph="  I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you."
            buttonChild={<Button>View Menu</Button>}
            imageClass={"pasta-img"}
          />
          <div className="mt-16">
            <ImgPara
              title="An Offer You'll Love"
              subTitle="Gather around the Table with Our Family Bundle"
              paraGraph="  I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you."
              buttonChild={<Button>Order Online</Button>}
              imageClass={"family-img"}
              imgOrder={"order-last"}
            />
          </div>
        </div>

        {/* Salt'n Pepper Moments */}
        <div className=" mt-16 px-8">
          <div className="text-center my-8">
            <div className="text-4xl font-bold">Salt'n Pepper Moments</div>
            <div className="font-light text-normal w-3/5 my-3 mx-auto">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.{" "}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 px-12 py-8 mb-10">
            {Foodgrid?.map((item) => (
              <div className="overflow-hidden bg-black">
                <img
                  className="hover:scale-[1.1] opacity-[0.9] hover:opacity-100 transition ease-in-out duration-700 cursor-pointer"
                  src={item.images}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className="" id="booking" ref={bookTableRef}>
          <BookingTable />
        </div>
      </div>
    </motion.div>
  );
};
export default Body;
