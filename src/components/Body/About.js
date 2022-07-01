import React from "react";
import surya from "../../assets/surya2.png";
import { motion } from "framer-motion";

function About() {
  return (
    <div
      id="designer"
      className="d-flex shade1"
      style={{ height: "100vh" }}
      onScroll={() => console.log("scrolled")}
    >
      <div className="top d-flex flex-column">
        <motion.div
          initial={{ opacity: 0, scale: 1, x: -500 }}
          animate={{ scale: 1, opacity: 100, x: 0 }}
          transition={{
            duration: 0.2,
            delay: 0,
            type: "tween",
            stiffness: 20,
          }}
          className="text-white fw-bold p-5 d-flex flex-column"
        >
          <div
            className="fam3 font5 mb-2"
            style={{ fontSize: 100, textAlign: "left" }}
          >
            <span style={{ fontSize: 100 }} className="font4 fam3 ">
              J
            </span>
            aya
            <span style={{ fontSize: 100 }} className="font4 fam3 ">
              s
            </span>
            urya Karthikeyan
          </div>
          {/* <p>
            An IT Student, works in Web Development and aspiries to learn new
            technologies.
          </p>
          <h2>Developer, Designer, Learner</h2> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1, x: 500 }}
          animate={{ scale: 1, opacity: 100, x: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.4,
            type: "tween",
            stiffness: 20,
          }}
          className="text-white fw-bold p-5"
          style={{ textAlign: "left" }}
        >
          {/* <div style={{ fontSize: 50 }}> Jayasurya Karthikeyan</div> */}
          <div style={{ fontSize: 40 }}>
            An IT Student, works in Web Development and aspiries to learn new
            technologies.
          </div>
          <div className="" style={{fontSize:50}} >Developer, Designer, Learner</div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 1, y: 500 }}
        animate={{ scale: 1, opacity: 100, y: 0 }}
        transition={{
          duration: 0.2,
          delay: 0.2,
          type: "tween",
          stiffness: 20,
        }}
        className="surya mx-5 d-flexalign-items-end mt-auto"
        style={{ height: "88%" }}
      >
        <img src={surya} alt="surya" height="100%" />
      </motion.div>
      {/* <div className="top">
        <motion.div
          initial={{ opacity: 0, scale: 1, x: 500 }}
          animate={{ scale: 1, opacity: 100, x: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.4,
            type: "tween",
            stiffness: 20,
          }}
          className="text-white fw-bold p-5"
        >
           <div style={{ fontSize: 50 }}> Jayasurya Karthikeyan</div> 
          <p style={{ fontSize: 40 }}>
            An IT Student, works in Web Development and aspiries to learn new
            technologies.
          </p>
          <h2>Developer, Designer, Learner</h2>
        </motion.div>
        <div className="photo"></div>
      </div> */}
    </div>
  );
}

export default About;
