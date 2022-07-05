import React from "react";
import { WorkData } from "../../data/workData";
import Title from "../common/Title";
import { motion } from "framer-motion";

function Work() {
  const data = WorkData;
  return (
    <div className="min-vh-100 shade1 p-4 px-1 px-sm-2 px-md-3 px-xl-4 pt-5 pt-md-4">
      <Title title="EXPERIENCE" />
      <div className="col-12 col-xxl-11 mx-auto row d-flex justify-content-evenly  pt-4">
        {data.map((work) => {
          return (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
              className=" col-11 col-sm-10 col-md-8 col-lg-5  shade10 li-shadow br-10 my-2 my-md-4 pe-0 d-sm-flex justify-content-between align-items-center "
            >
              <div className="d-sm-none pe-3 d-flex justify-content-center justify-content-sm-start">
                <img
                  src={work.companyLogo}
                  className="m-3 work-logo"
                  alt={work.company}
                />
              </div>
              <img
                src={work.companyLogo}
                className="m-3 work-logo d-none d-sm-block"
                alt={work.company}
              />
              <div className="work-info glassy2 py-3 px-3 br-10 h-100 w-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="text-white fw-bold fam3 work-com">
                    {work.company}
                  </div>
                  <div className="text-white fam2 fw-600 work-des">
                    {work.designation}
                  </div>
                  <div className="text-white fam6 fw-500 work-des">
                    {work.dateJoin} -{work.dateEnd}
                  </div>
                  <div
                    className="text-white fam6 fw-500 br-10 col-8 bg-white mb-3"
                    style={{ height: 3 }}
                  ></div>
                  <div className="text-white fam4 work-pro">
                    Product -{" "}
                    <a
                      href={work.demo}
                      target="_blank"
                      className="td-node text-white fam4 font2 cursor-pointer"
                    >
                      {work.work}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* <Separator /> */}
    </div>
  );
}

export default Work;
