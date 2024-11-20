import React, { useState } from "react";
import Web from "./Web";
import Mob from "./Mob";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu"; //{" "}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="col-12 d-flex justify-content-end "
      // style={{ zIndex: "3 !important" }}
    >
      {/* <div className="brand px-lg-5 px-3 d-flex justify-content-between align-content-center">
        <div className="mx-3 logo bg-warning fw-bold py-2 px-3 rounded-circle li-shadow">
          JS
        </div>
        <div className="name pt-0 fw-bold">Jayasurya</div>
      </div> */}
      {/* <div className="col-12 ">
        <div className=" col-12">
          <div className="d-none d-md-block col-12">
            <Web />
          </div> */}
      {/* </div> */}
      {/* <div className="mob-menu"> */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="toggle-btn"
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -500, opacity: 0 }}
            transition={{
              duration: 0.2,
              type: "spring",
              bounce: 0.2,
            }}
            onClick={() => setIsOpen(!isOpen)}
            className="  d-md-none "
          >
            <MenuIcon className="m-3 text-white fw-bold tog-btn" />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div>
            <Mob isOpen={isOpen} setIsOpen={setIsOpen} />
          </motion.div>
        )}
      </AnimatePresence>
      {/* </div> */}
      {/* // </div> */}
    </div>
  );
}

export default Header;
