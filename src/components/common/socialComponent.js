import React from "react";
import { SocialData } from "../../data/socialData";
import { motion } from "framer-motion";

function SocialComponent({ vertical }) {
  const data = SocialData;
  return (
    <motion.div
      className={`${
        vertical ? "" : "d-flex"
      } social-contact h3 justify-content-center overflow-hidden`}
    >
      {data.map((social, index) => {
        return (
          <motion.div
            initial={{ x: vertical ? "-100%" : 0, y: vertical ? 0 : "80%" }}
            whileInView={{ x: 0, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.4 + index * 0.1,
              type: "spring",
              bounce: 0.7,
            }}
          >
            <a href={social.link} target="_blank">
              <div className="social-icon-div m-1 m-sm-2 m-md-3 m-xl-2 m-xxl-3 p-2">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`${!vertical ? "font1" : "font5"}  socio`}
                >
                  {social.icon}
                </motion.div>
              </div>
            </a>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default SocialComponent;
