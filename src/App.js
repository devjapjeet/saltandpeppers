import About from "./AboutPage/About";
import "./App.css";
import Header from "./HeaderFooter/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Body from "./HomePage/Body";
import Footer from "./HeaderFooter/Footer";
import Menu from "./Menu/Menu";
import Locations from "./LocationHours/Locations";
import OrderOnLine from "./OrderOnLine/OrderOnLine";
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import GoogleMap from "./LocationHours/GoogleMap";
function App() {
  const bookTableRef = useRef(null);
  const ourMenuRef = useRef(null);
  const onlineOrdersRef = useRef(null);
  const location = useLocation();

  return (
    <>
      {/* <GoogleMap/> */}
      <AnimatePresence exitBeforeEnter initial={false}>
        <div className="">
          <Header bookTableRef={bookTableRef} />
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <Body
                  bookTableRef={bookTableRef}
                  ourMenuRef={ourMenuRef}
                  onlineOrdersRef={onlineOrdersRef}
                />
              }
            />
            <Route path="/menu" element={<Menu ourMenuRef={ourMenuRef} />} />
            <Route
              path="/order-online"
              element={<OrderOnLine onlineOrdersRef={onlineOrdersRef} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/hours-location" element={<Locations />} />
          </Routes>
          <Footer />
          {/* <Menu/> */}
          {/* <About/> */}
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
