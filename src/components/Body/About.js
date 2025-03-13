import React from "react";
import surya from "../../assets/surya2.png";
import { motion } from "framer-motion";

function About() {
  const slashVariants = {
    // hidden: { scale: 0 },
    visible: {
      scale: [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      opacity: [1, 1, 1, 1, 1, 1, 0, 0],
      transition: {
        duration: 4,
        delay: 1.5,
        repeat: Infinity,
        type: "spring",
        bounce: 0.8,
      },
    },
  };
  const JsVariants = {
    visible: {
      rotate: [0, -5, 0, 5, 0],
      transition: { duration: 0.8, repeat: Infinity },
    },
  };

  return (
    <div
      className="d-flex shade2 vh-100 vw-100 "
      onScroll={() => console.log("scrolled")}
    >
      <div className="top d-flex abt-text flex-column py-2 py-sm-3 py-md-5 align-items-center align-items-md-start justify-content-md-evenly justify-content-center h-100">
        <motion.div
          initial={{ opacity: 0, scale: 1, x: -100 }}
          whileInView={{ scale: 1, opacity: 100, x: 0 }}
          transition={{
            duration: 0.1,
            delay: 0.3,
            type: "tween",
            stiffness: 20,
          }}
          // style={{ minHeight: 100, minWidth: 100 }}
          className="text-white fw-bold px-md-5 py-3 d-flex col-12 flex-column align-items-center align-items-lg-start"
        >
          <div
            className="fam3 font5 mb-2 d-flex name"
            // style={{ textAlign: "left" }}
          >
            <motion.div
              variants={JsVariants}
              initial="hidden"
              animate="visible"
              // style={{ fontSize: 100 }}
              className="font4 fam3 name "
            >
              J
            </motion.div>
            aya
            <motion.div
              variants={JsVariants}
              initial="hidden"
              animate="visible"
              // style={{ fontSize: 100 }}
              className="font4 fam3 name"
            >
              s
            </motion.div>
            urya
          </div>
          <div className="fam3 font5 mb-2 d-flex name">Karthikeyan</div>
          {/* <p>
            An IT Student, works in Web Development and aspiries to learn new
            technologies.
          </p>
          <h2>Developer, Designer, Learner</h2> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1, x: 100 }}
          whileInView={{ scale: 1, opacity: 100, x: 0 }}
          transition={{
            duration: 0.1,
            delay: 0.7,
            type: "tween",
            stiffness: 20,
          }}
          className="text-white col-12 px-2 px-sm-5 py-3 text-center text-lg-start"
        >
          {/* <div style={{ fontSize: 50 }}> Jayasurya Karthikeyan</div> */}
          <div className="fam5 fw-500 abt-des mb-2 mb-sm-3 mb-md-5">
            &nbsp; &nbsp; An aspiring young talent with 2 years experience in
            <span className="fw-bold font5"> Full stack development{" "}</span>
            {/*  with a versatile know
            <span className="fw-bold font5">Automation testing</span> with */}
            impressive problem-solving skills and a progressive mindset to learn
            new technologies
          </div>
          <div className="fam3 fw-600 font6 my-3 d-flex ddl justify-content-center justify-content-lg-start">
            <div className="overflow-hidden text-center text-lg-start">
              <motion.div
                // initial={{ x: 300 }}
                animate={{
                  x: [300, 0, 0, 0, 0, 0, 0, 0, 300, 300, 300, 300, 300, 300],
                }}
                transition={{
                  duration: 4,
                  delay: 1.5,
                  repeat: Infinity,
                  type: "sprinng",
                  bounce: 0.8,
                }}
                className="fam3"
              >
                Developer
              </motion.div>
            </div>
            <motion.span
              initial="hidden"
              animate="visible"
              variants={slashVariants}
              className="text-white fam3 mx-2"
            >
              |
            </motion.span>
            <div className="overflow-hidden">
              <motion.div
                // initial={{ x: 300 }}
                animate={{
                  x: [
                    -350, 0, 0, 0, 0, 0, 0, 0, -350, -350, -350, -350, -350,
                    -350,
                  ],
                }}
                transition={{
                  duration: 4,
                  delay: 1.5,
                  repeat: Infinity,
                  type: "sprinng",
                  bounce: 0.8,
                }}
                className="fam3"
              >
                Problem Solver
              </motion.div>
            </div>
            <motion.span
              variants={slashVariants}
              initial="hidden"
              animate="visible"
              className="text-white fam3 mx-2"
            >
              |
            </motion.span>
            <div className="overflow-hidden">
              <motion.div
                // initial={{ x: 300 }}
                animate={{
                  x: [
                    -300, 0, 0, 0, 0, 0, 0, 0, -300, -300, -300, -300, -300,
                    -300,
                  ],
                }}
                transition={{
                  duration: 4,
                  delay: 1.5,
                  repeat: Infinity,
                  type: "sprinng",
                  bounce: 0.8,
                }}
                className="fam3"
              >
                Learner
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 1, y: 500 }}
        animate={{ scale: 1, opacity: 100, y: 0 }}
        transition={{
          duration: 0.2,
          delay: 0.7,
          type: "tween",
          stiffness: 20,
        }}
        className="surya abt-img mx-5 d-flex align-items-end mt-auto d-none d-lg-block"
        style={{ height: "88%" }}
      >
        <img
          src={surya}
          alt="https://www.linkedin.com/in/jaya-surya-karthikeyan-108a641a5/"
          height="100%"
        />
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
