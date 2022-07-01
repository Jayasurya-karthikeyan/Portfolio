import React from "react";
import ProjectCard from "./projectCard";
import { ProjectData } from "../../data/projectData";
import Separator from "../common/Separator";

function Projects() {
  const data = ProjectData;
  return (
    <div className="projects shade1 vh-100">
      <div className="m-4 p-4">
        <div className="section-title">Projects</div>
        <div className="col-12 row d-flex justify-content-around">
          {data.map((project) => {
            return (
              // <div className="col-6">
              <ProjectCard project={project} className="col-12 col-sm-6" />
              // </div>
            );
          })}
        </div>
      </div>
      <div className="my-5 mx-4">{/* <Separator /> */}</div>
    </div>
  );
}

export default Projects;
