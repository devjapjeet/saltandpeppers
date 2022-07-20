import React from "react";
const BookingTable = () => {
  return (
    <div className="mt`-10">
      <div className="form-bg py-10 px-28 flex justify-center">
        <div className=" form-bgcol border text-center w-2/5  px-8 py-8 h-full ">
          <div className="textColor font-bold my-4">
            Let's Make It Official
          </div>
          <div className="text-4xl font-extrabold textColor mb-12">
            Book a Table
          </div>
          <div className="">
            <div className="">
              <input
                className="border secondryBgColor shadow-sm text-gray-500 border-red-500 focus:outline-none focus:border-red-500 focus:ring-red-500 cursor-pointer w-56 mb-4 py-2 px-3"
                type="date"
              />
            </div>
            <div className="">
              <input
                className="border shadow-sm secondryBgColor text-gray-500 border-red-500 focus:outline-none focus:border-red-500 focus:ring-red-500 cursor-pointer w-56 mb-4 py-2 px-3"
                type="time"
              />
            </div>
            <div className="">
              <select
                className="border shadow-sm secondryBgColor text-gray-500 border-red-500 focus:outline-none focus:border-red-500 focus:ring-red-500 cursor-pointer w-56 mb-4 py-2 px-3"
                name=""
                id=""
              >
                <option className="secondryBgColor" value="1 person">1 person</option>
                <option className="secondryBgColor" value="2 person">3 person</option>
                <option className="secondryBgColor" value="3 person">4 person</option>
                <option className="secondryBgColor" value="4 person">2 person</option>
                <option className="secondryBgColor" value="5 person">5 person</option>
                <option className="secondryBgColor" value="6 person">6 person</option>
              </select>
            </div>
            <div className="">
              <button className=" primaryBgColor text-white w-56 py-2 font-semibold text-sm hover:bg-red-600">
                Book Now
              </button>
            </div>
          </div>
        </div>
        {/* right orderonline  */}
        <div className="w-2/5 primaryBgColor text-center px-14 py-12 text-white">
          <div className=" font-semibold ">It's Fast and Easy</div>
          <div className="text-4xl  font-bold mt-6">Order Online</div>
          <div className="font-light mt-8">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </div>
          <div className="">
            <button className="bg-white textColor mt-8 w-56 py-2 font-semibold text-sm hover:bg-red-500 hover:border hover:text-white">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingTable;
