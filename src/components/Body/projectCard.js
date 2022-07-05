import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip, Grid } from "@mui/material";
// import im1 from "../assets/bank.jpg";
// import im2 from "../assets/bank.jpg";
// import im3 from "../assets/fds.jpg";
// import ReactHowler from "react-howler";
import { motion } from "framer-motion";
import im1 from "../../assets/APE.jpg";
import im2 from "../../assets/user.jpg";
import im3 from "../../assets/Project-one.jpg";

function ProjectCard({ project, ind }) {
  const imag = [
    im1,
    "https://searchengineland.com/wp-content/seloads/2017/10/internet-of-things-smart-ss-1920.gif",
    im2,
    "https://leverageedu.com/blog/wp-content/uploads/2020/05/e-commerce-.jpg",
    im3,
  ];
  return (
    <div
      className="m-sm-2 my-3 my-sm-2 col-12 col-md-8 col-lg-5 overflow-hidden "
      style={{ borderRadius: 25 }}
    >
      <motion.div
        className="shade4 li-shadow text-white h-100"
        style={{ borderRadius: 25 }}
        initial={{
          orginX: 0,
          opacity: 0,
          scale: 2,
          zIndex: -2,
        }}
        whileInView={{ x: 0, opacity: [0, 1], scale: 1, zIndex: 0 }}
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.3,
          delay: 0.3,
        }}
      >
        <div className="px-0 px-xs-2 px-md-3 d-flex flex-column  justify-content-between h-100">
          <div>
            <img
              component="img"
              // height="200"
              style={{ width: "100%" }}
              src={imag[ind]}
              className="br-20 mt-0 mt-md-2 prj-img"
              alt="project_image"
            />
          </div>
          <div className="px-3 px-md-2 h-100">
            <div className="fw-bold font2 fw-bold fam4 mb-1 mb-lg-2 mt-1 prj-title">
              {project.title}
              <div className="text-white ms-xl-3 prj-abt">
                <div className="fw-500 my-lg-1">{project.about}</div>
                <div className="text-white prj-tag">
                  <div className="d-flex  flex-wrap col-12">
                    {project.tags.map((tag) => {
                      return (
                        // <div className=" col-4  col-xxl-3 col-xl-4 col-md-4 px-1">
                        <div className="p-1 px-3 m-1 font3 rounded-pill bg-white text-center fw-700 tag-font ">
                          {tag}
                        </div>
                        // </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-1 pb-3">
            {project.demo && (
              <a
                className="action px-3 py-3 py-lg-2 mx-3 mt-2 mt-lg-0 li-shadow shade2 td-none text-white br-10"
                target="_blank"
                href={project.demo}
              >
                <i class="bi bi-globe2"> </i>Demo
              </a>
            )}
            {project.github && (
              <a
                className="action px-3 py-3 py-lg-2 mx-3 mt-2 mt-lg-0 li-shadow shade2 td-none text-white br-10"
                target="_blank"
                href={project.github}
              >
                <i class="devicon-github-original"></i> GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
    /* <div className="project-info ">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" target="_blank" href={project.demo}>
              <div className="link-button">
                <i class="bi bi-globe2"></i> Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-git" target="_blank" href={project.github}>
              <div className="link-button">
                <i class="devicon-github-original"></i>GitHub
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <lable className="tag p-1 px-2 m-1">{tag}</lable>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo col-sm-6" />
    </div> */
  );
}

export default ProjectCard;
