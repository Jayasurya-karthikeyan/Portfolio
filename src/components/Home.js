import React, { Component } from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
// import Footer from "./Footer/Footer";
import Lander from "./common/Lander";
import { useState } from "react";
import Loader from "./common/Loader";

function Home() {
  const [lander, setLander] = useState(true);
  setTimeout(() => setLander(false), 4000);
  return (
    <div className="shade1 overflow-hidden">
      {/* <Loader /> */}
      {lander ? (
        <Lander />
      ) : (
        <>
          <div
            className="position-fixed col-12 d-md-none"
            style={{ zIndex: 2 }}
          >
            <Header />
          </div>
          <Body />
        </>
      )}
    </div>
  );
}

export default Home;
