import React from "react";
import { motion } from "framer-motion";
import { Modal } from "@mui/material";

export default function Loader() {
  const hei = 15;
  const wid = 15;
  const bt = "br-15 bg-white li-shadow m-1";
  const start = 0.5; //1
  const inc = 0.1; //0.1
  const dur = 2; //0.15
  const rot = 7200;

  const Boxx = ({ ind, sec, me }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        scale: [0, 1, 0, 0],
        opacity: [0, 1, 0, 0],
        rotate: [0, rot, 0, 0],
      }}
      transition={{
        duration: dur,
        delay: sec ? start * 1.5 + inc * 7 + inc * ind : start + inc * ind,
        type: "spring",
        stiffness: 40,
        repeat: Infinity,
      }}
      style={{
        height: hei,
        width: wid,
        // borderRadius:
        //   sec && ind == 2
        //     ? "55px 15px 15px 15px"
        //     : sec && ind == 4
        //     ? "15px 15px 15px 55px"
        //     : sec && ind == 6
        //     ? "15px 55px 15px 15px"
        //     : sec && ind == 8
        //     ? "15px 15px 55px 15px"
        //     : !sec && ind == 6
        //     ? "15px 15px 55px 15px"
        //     : 15,
      }}
      className={`${me && "me-1"} ${bt}`}
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
          <Boxx ind={0} />
          <Boxx ind={1} />
          <Boxx ind={2} />
        </div>
        <div className=" d-flex flex-column align-items-end">
          <Boxx ind={3} />
          <Boxx ind={4} />
          <Boxx ind={5} me />
        </div>
        <div className=" d-flex pe-2">
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
          <Boxx ind={2} sec />
          <Boxx ind={1} sec />
          <Boxx ind={0} sec />
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
          {/* <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 100, rotate: -rot }}
            transition={{
              duration: 0.5,
              delay: 3.4,
              // type: "spring",
              // stiffness: 60,
            }}
            style={{ height: hei, width: wid }}
            className="br-15 theme1  m-1 position-absolute"
          ></motion.div> */}
        </div>
      </div>
    );
  };
  return (
    <Modal
      open={true}
      onClose={() => {}}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      // className="d-flex justify-content-center align-items-center py-sm-5 mx-2 mx-md-3 mx-lg-4 mx-lg-5"
    >
      <div
        className="li-shadow br-20 shade2 d-flex align-items-center justify-content-center position-absolute"
        style={{
          height: 220,
          width: 220,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          outline: "none",
        }}
      >
        <JComp />
        <SComp />
      </div>
    </Modal>
  );
}
