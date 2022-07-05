import React, { useEffect, useRef } from "react";
import ProjectCard from "./projectCard";
import { ProjectData } from "../../data/projectData";
import Title from "../common/Title";
import { motion } from "framer-motion";
import { useState } from "react";

function Projects() {
  const data = ProjectData;
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() =>
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  );
  return (
    <div className="shade1 min-vh-100 pt-4 pt-md-0 mt-0 ">
      <div className="mx-1 mx-sm-2  mx-xxl-4 mx-3 mx-xl-4 p-2 py-2 px-1 py-xl-2">
        <Title title="PROJECTS" />
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className="d-none d-sm-block col-11 mx-auto mt-4 mt-md-3 mt-xl-2 mt-xxl-3 shade2 br-20 p-3 p-lg-4 overflow-auto d-flex justify-content-start"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="col-12 d-flex"
            // style={{ overflowY: "hidden", overflowY: "auto" }}
          >
            {data.map((project, i) => {
              return (
                // <span key={i}>
                <ProjectCard project={project} ind={i} />
                // </span>
              );
            })}
          </motion.div>
        </motion.div>
        {/* <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className=" d-sm-none col-11 mx-auto mt-5 shade2 br-20 p-4 overflow-auto d-flex justify-content-start"
        > */}
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="col-12 d-sm-none"
          // style={{ overflowY: "hidden", overflowY: "auto" }}
        >
          {data.map((project, i) => {
            return (
              // <span key={i}>
              <ProjectCard project={project} ind={i} />
              // </span>
            );
          })}
        </motion.div>
        {/* </motion.div> */}
      </div>
      {/* <div className="my-5 mx-4"><Separator /></div> */}
    </div>
  );
}

export default Projects;
