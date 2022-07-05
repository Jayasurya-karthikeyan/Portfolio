import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

function Mob({ isOpen, setIsOpen }) {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="toggle"
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
            className=" shade4 vh-100 position-absolute"
            style={{ right: 0, top: 0, width: "100vw" }}
          >
            <div
              className=" m-3 col-11 text-end "
              onClick={() => setIsOpen(!isOpen)}
            >
              <CloseIcon className="text-white close-btn"></CloseIcon>
            </div>
            <div
              style={{ height: "90vh" }}
              className=" col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <div className="td-none my-3" onClick={() => setIsOpen(!isOpen)}>
                <a
                  className="font5 fam5 fw-bold td-none"
                  style={{ fontSize: 25 }}
                  href="#about"
                >
                  About
                </a>
              </div>
              <div className="td-none my-3" onClick={() => setIsOpen(!isOpen)}>
                <a
                  className="font5 fam5 fw-bold td-none"
                  style={{ fontSize: 25 }}
                  href="#education"
                >
                  Education
                </a>
              </div>
              <div className="td-none my-3" onClick={() => setIsOpen(!isOpen)}>
                <a
                  className="font5 fam5 fw-bold td-none"
                  style={{ fontSize: 25 }}
                  href="#projects"
                >
                  Projects
                </a>
              </div>
              <div className="td-none my-3" onClick={() => setIsOpen(!isOpen)}>
                <a
                  className="font5 fam5 fw-bold td-none"
                  style={{ fontSize: 25 }}
                  href="#skills"
                >
                  Skills
                </a>
              </div>
              <div className="td-none my-3" onClick={() => setIsOpen(!isOpen)}>
                <a
                  className="font5 fam5 fw-bold td-none"
                  style={{ fontSize: 25 }}
                  href="#experience"
                >
                  Experience
                </a>
              </div>
              <div className="td-none my-3" onClick={() => setIsOpen(!isOpen)}>
                <a
                  className="font5 fam5 fw-bold td-none"
                  style={{ fontSize: 25 }}
                  href="#contact"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Mob;
