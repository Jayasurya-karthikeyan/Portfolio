import React from "react";
import { motion } from "framer-motion";

function Web() {
  return (
    <div className="d-flex justify-content-between">
      <motion.div
        initial={{ opacity: 0, scale: 1, y: -500 }}
        animate={{ scale: 1, opacity: 100, y: 0 }}
        transition={{
          duration: 0.2,
          delay: 0.2,
          type: "tween",
          stiffness: 20,
        }}
        className="col-2"
      >
        <a
          className="fw-bold text-white td-none ms-lg-5 fam1 "
          href="#about"
        >
          JS
        </a>
      </motion.div>
      <div className="col-6 col-lg-5 d-flex justify-content-around">
        <motion.a
          initial={{ opacity: 0, scale: 1, y: -500 }}
          animate={{ scale: 1, opacity: 100, y: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.25,
            type: "tween",
            stiffness: 20,
          }}
          className=" text-white td-none navlinks"
          href="#education"
        >
          Education
        </motion.a>
        <motion.a
          initial={{ opacity: 0, scale: 1, y: -500 }}
          animate={{ scale: 1, opacity: 100, y: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.3,
            type: "tween",
            stiffness: 20,
          }}
          className=" text-white td-none navlinks"
          href="#projects"
        >
          Projects
        </motion.a>
        <motion.a
          initial={{ opacity: 0, scale: 1, y: -500 }}
          animate={{ scale: 1, opacity: 100, y: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.35,
            type: "tween",
            stiffness: 20,
          }}
          className=" text-white td-none navlinks"
          href="#skills"
        >
          Skills
        </motion.a>
        <motion.a
          initial={{ opacity: 0, scale: 1, y: -500 }}
          animate={{ scale: 1, opacity: 100, y: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.4,
            type: "tween",
            stiffness: 20,
          }}
          className=" text-white td-none navlinks"
          href="#experience"
        >
          Experience
        </motion.a>
        <motion.a
          initial={{ opacity: 0, scale: 1, y: -500 }}
          animate={{ scale: 1, opacity: 100, y: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.45,
            type: "tween",
            stiffness: 20,
          }}
          className=" text-white td-none navlinks"
          href="#contact"
        >
          Contact
        </motion.a>
      </div>
    </div>
  );
}

export default Web;
