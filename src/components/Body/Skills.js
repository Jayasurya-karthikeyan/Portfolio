import React from "react";
import { SkillsData } from "../../data/skillsData";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Title from "../common/Title";
import { motion } from "framer-motion";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function Skills() {
  const data = SkillsData;
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="shade3 min-vh-100 pb-5 pb-md-0 pt-3 pt-md-0">
      <div className="px-1 px-sm-2 px-md-3 px-xxl-3 pt-5 pt-md-0">
        <Title title="SKILLS" />
        <div className="d-flex mb-5 flex-column justify-content-center mx-md-2 mx-lg-3 mx-xxl-5 px-xl-3 px-xxl-5">
          {data.map((data, index) => {
            // index = index + 1;
            return (
              <div className="my-1 my-xxl-2 border border-2 border-white li-shadow br-20 py-1 py-xl-2 py-xxl-2 d-md-flex justify-content-center align-items-center">
                {/* <h3>{data.type}</h3> */}
                {/* <div className="skills-list d-flex "> */}
                {/* <div>
                  <Accordion
                    expanded={expanded === "panel" + index}
                    onChange={handleChange("panel" + index)}
                    xs={12}
                    sm={6}
                  >
                    <AccordionSummary
                      aria-controls={"panel" + index + "d-content"}
                      id={"panel" + index + "d-header"}
                    > */}
                {/* {console.log("panel" + index)} */}
                <motion.div
                  initial={{
                    x: "-99%",
                    opacity: 0,
                    // scale: 0,
                  }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.2,
                    delay: 0.2,
                  }}
                  className="text-white fw-800 fam2 col-md-2 ms-4 ms-md-3 ms-xxl-4 skill-cat"
                >
                  {data.type}
                </motion.div>
                {/* </AccordionSummary>
                    <AccordionDetails className="d-flex p-5"> */}
                <div className=" p-1 p-md-2 p-xl-3 w-100 d-flex flex-wrap justify-content-center align-items-center">
                  {/* <div className="text-white h1">{data.list.length}</div> */}
                  {data.list.map((skill, i) => {
                    // console.log(data[index].list.length);
                    return (
                      <motion.div
                        key={i}
                        initial={{
                          rotateX: 720,
                          x: i + 1 <= data.list.length / 2 ? "-95%" : "95%",
                          opacity: 0,
                          scale: 0,
                        }}
                        whileInView={{ rotateX: 0, x: 0, scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.3,
                          delay: 0.2,
                        }}
                        // drag
                        className="li-shadow shade6 mt-1 br-10 py-1 px-1 mx-2 d-flex flex-column justify-content-around skl-box"
                        // style={{ width: 80, height: 110 }}
                      >
                        {skill.img ? (
                          <div className="text-center">
                            <img
                              src={skill.img}
                              className="skl-img"
                              alt={skill.name}
                            />
                          </div>
                        ) : (
                          <div className="font1 text-center d-flex flex-column justify-content-center pt-2 skl-icon">
                            {skill.icon}
                          </div>
                        )}
                        <div className="font1 text-center mb-1 fam2 fw-700 skl-name">
                          {skill.name}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                {/* </AccordionDetails>
                  </Accordion>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
