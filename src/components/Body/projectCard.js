import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip, Grid } from "@mui/material";
// import ReactHowler from "react-howler";

function ProjectCard({ project }) {
  return (
    // <div className="project-card m-1 p-3 d-flex">
    <div className="col-12 col-lg-4">
      <Card
        sx={{ m: 2 }}
        className="li-theme li-shadow text-white"
        style={{ borderRadius: 25 }}
      >
        <CardActionArea className="px-3">
          <CardMedia
            component="img"
            // height="200"
            className="mx-auto "
            sx={{ height: 300 }}
            image={project.image}
            alt="project_image"
          />
          <CardContent>
            <Typography
              gutterBottom
              className="fw-bold text-white"
              variant="h5"
              component="div"
            >
              {project.title}
            </Typography>
            <Typography
              variant="body2"
              className="text-white"
              color="text.secondary"
              sx={{ m: 1 }}
            >
              {project.about}
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                <div className="project-tags">
                  {project.tags.map((tag) => {
                    return (
                      <label className="tag p-1 px-2 m-1 da-font br-15 bg-white px-3 fw-bold">
                        {tag}
                      </label>
                    );
                  })}
                </div>
              </Typography>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {project.demo && (
            <a
              className=" px-3 py-2 mx-3 li-shadow da-theme td-none text-white"
              target="_blank"
              href={project.demo}
            >
              <i class="bi bi-globe2"> Demo</i>
            </a>
          )}
          {project.github && (
            <a
              className=" px-3 py-2 mx-3 li-shadow da-theme td-none text-white"
              target="_blank"
              // href={project.github}
            >
              <i class="devicon-github-original"> GitHub</i>
            </a>
          )}
        </CardActions>
      </Card>
    </div>
    // </div>
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
