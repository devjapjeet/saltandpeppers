import React from "react";

const Footer = () => {
  return (
      <div className="">
    <div className="flex text-white justify-between primaryBgColor px-28 py-20 h-4/5">
      <div className="w-1/2">
        <div className="text-3xl ">
          Join the Salt's Pepper Club & <br /> Get $10 off Your Next Visit
        </div>
        <div className=" my-8 ">
          <div className="text-xs font-semibold mb-px">Email* </div> 
          <div className="flex  shadow-lg w-72 ">
            <input
              className="px-2 w-full border primaryBgColor focus:outline-none focus:border-white focus:ring-white text-white"
              type="text"
            />
            <button className=" bg-white  text-red-500 px-3 font-semibold py-1">
              Join
            </button>
          </div>
        </div>
      </div>
        <ul className="grid grid-cols-3 gap-1 gap-x-8">
          <li className="font-[900] text-lg">Quick Links</li>
          <li className="font-bold text-lg">Contact Us </li>
          <li className="font-bold text-lg">Follow Us </li>
          <li className="text-sm font-light">Menu</li>
          <li className="text-sm font-light">Hours & Location </li>
          <li className="text-sm font-light"><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>  </li>
          <li className="text-sm font-light">Book a Table </li>
          <li className="text-sm font-light">Careers </li>
          <li className="text-sm font-light"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram </a> </li>
          <li className="text-sm font-light">Order Online </li>
          <li className="text-sm font-light">Salt'n Pepper Club </li>
          <li className="text-sm font-light"><a href="https://www.yelp.com/" target="_blank" rel="noreferrer">Yelp! </a></li>
          <li className="text-sm font-light"> About </li>
          <li className="text-sm font-light"></li>
          <li className="text-sm font-light"><a href="https://www.twitter.com/" target="_blank" rel="noreferrer">Twitter </a></li>
        </ul>
    </div>
      <div className="text-center py-4 text- font-light tracking-wider">© 2023 by Salt'n Pepper. Proudly created by <span className="font-medium"> Simranjit Singh</span></div>
    </div>
  );
};
export default Footer;
