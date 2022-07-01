import React from "react";
import { motion } from "framer-motion";

export default function Lander() {
  const hei = 40;
  const wid = 40;
  const bt = "br-15 bg-white li-shadow m-1";
  const start = 1; //1
  const inc = 0.1; //0.1
  const dur = 0.15; //0.15
  const rot = 540;

  const Boxx = ({ ind, sec }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ scale: 1, opacity: 100, rotate: rot }}
      transition={{
        duration: dur,
        delay: sec ? start + inc * 7 + inc * ind : start + inc * ind,
        type: "spring",
        stiffness: 40,
      }}
      style={{
        height: hei,
        width: wid,
        borderRadius:
          sec && ind == 0
            ? "15px 15px 55px 15px"
            : sec && ind == 4
            ? "15px 55px 15px 15px"
            : sec && ind == 6
            ? "15px 15px 15px 55px"
            : sec && ind == 8
            ? "55px 15px 15px 15px"
            : !sec && ind == 6
            ? "55px 15px 15px 15px"
            : 15,
      }}
      className={bt}
    ></motion.div>
  );

  const JComp = () => {
    return (
      <div className="d-flex flex-column align-items-end me-3">
        <div className=" d-flex ">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ scale: 1, opacity: 100, rotate: rot }}
            transition={{ duration: dur, delay: start + inc * 0 }}
            style={{ height: hei, width: wid }}
            className={bt}
          ></motion.div> */}
          <motion.div
            initial={{ scale: 100 }}
            animate={{ scale: 1, opacity: 100, rotate: rot }}
            transition={{
              duration: 1,
              delay: 0,
              type: "spring",
              stiffness: 60,
            }}
            style={{ height: hei, width: wid }}
            className={bt}
          ></motion.div>
          <Boxx ind={1} />
          <Boxx ind={2} />
        </div>
        <div className=" d-flex flex-column align-items-end">
          <Boxx ind={3} />
          <Boxx ind={4} />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ scale: 1, opacity: 100, rotate: rot }}
            transition={{
              duration: dur,
              delay: start + inc * 5,
              type: "spring",
              stiffness: 60,
            }}
            style={{ height: hei, width: wid }}
            className={`${bt} me-2`}
          ></motion.div>
        </div>
        <div className=" d-flex pe-4">
          <Boxx ind={7} />
          <Boxx ind={6} />
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ scale: 1, opacity: 100, rotate: rot }}
            transition={{ duration: dur, delay: start + inc * 6 }}
            style={{ height: hei, width: wid }}
            className={bt}
          ></motion.div> */}
        </div>
      </div>
    );
  };

  const SComp = () => {
    return (
      <div className="d-flex flex-column align-items-end ms-3">
        <div className=" d-flex ">
          <Boxx ind={0} sec />
          <Boxx ind={1} sec />
          <Boxx ind={2} sec />
        </div>
        <div className="w-100">
          <Boxx ind={3} sec />
        </div>
        <div className=" d-flex">
          <Boxx ind={4} sec />
          <Boxx ind={5} sec />
          <Boxx ind={6} sec />
        </div>
        <div>
          <Boxx ind={7} sec />
        </div>
        <div className="d-flex position-relative">
          <Boxx ind={10} sec />
          <Boxx ind={9} sec />
          <Boxx ind={8} sec />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 100, rotate: -rot }}
            transition={{
              duration: 0.5,
              delay: 3.4,
              // type: "spring",
              // stiffness: 60,
            }}
            style={{ height: hei, width: wid }}
            className="br-15 shade1  m-1 position-absolute"
          ></motion.div>
        </div>
      </div>
    );
  };
  return (
    <div className="vh-100 shade2 d-flex align-items-center justify-content-center">
      <JComp />
      <SComp />
      {/* <div>
        <motion.div
          // animate={{ rotate: 360 }}
          // transition={{ duration: 2 }}
          style={{ height: hei, width: wid }}
          className="br-10 bg-white li-shadow mx-auto"
        ></motion.div>
        <motion.div
          // animate={{ rotate: 360 }}
          // transition={{ duration: 2 }}
          style={{ height: hei, width: wid }}
          className="br-10 bg-white li-shadow mx-auto"
        ></motion.div>
      </div> */}
    </div>
  );
}
