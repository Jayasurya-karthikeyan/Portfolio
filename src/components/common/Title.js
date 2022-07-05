import React from "react";
import { motion } from "framer-motion";

export default function Title({ title }) {
  const line =
    "col-1 title-line br-10 mx-2 mt-2 mt-md-3 mt-xl-3 mt-xxl-5 bg-white d-none d-sm-block";
  const circle =
    "title-circle rounded-circle mt-2 mt-md-3 mt-xl-3 mt-xxl-5 bg-white d-none d-sm-block";
  return (
    // <AnimatePresence>
    <div
      // initial={{ scale: 0, y: 500 }}
      // whileInView={{ scale: 1, y: 0 }}
      // transition={{ type: "spring", bounce: 0.2, duration: 0.4, delay: 0.1 }}
      className="d-flex col-12 justify-content-center align-items-center"
    >
      <motion.div
        initial={{ scale: 0, x: 100 }}
        whileInView={{ scale: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.1, delay: 0.4 }}
        className={circle}
      ></motion.div>
      <motion.div
        initial={{ scale: 0, x: 100 }}
        whileInView={{ scale: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.1, delay: 0.3 }}
        className={line}
      ></motion.div>
      <motion.div
        initial={{ scale: 0, y: 50 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.1, delay: 0.1 }}
        className="section-title fam3 mt-2 mt-md-3 mt-xl-3 mt-xxl-5 mx-2"
      >
        {title}
      </motion.div>
      <motion.div
        initial={{ scale: 0, x: 100 }}
        whileInView={{ scale: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.1, delay: 0.3 }}
        className={line}
      ></motion.div>
      <motion.div
        initial={{ scale: 0, x: 100 }}
        whileInView={{ scale: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.1, delay: 0.4 }}
        className={circle}
      ></motion.div>
    </div>
    // </AnimatePresence> */}
  );
}
