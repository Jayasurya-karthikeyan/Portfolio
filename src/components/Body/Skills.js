import React from "react";
import Separator from "../common/Separator";
import { SkillsData } from "../../data/skillsData";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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
    <div className="shade1 vh-100">
      <div className="p-4 ">
        <div sx={{ mb: 2 }} className="h1 text-white fw-bold">
          Skills
        </div>
        <div className="skills-container">
          {data.map((data, index) => {
            index = index + 1;
            return (
              <div className="skills-section-title my-2 ">
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
                <div className="text-white h3">{data.type}</div>
                {/* </AccordionSummary>
                    <AccordionDetails className="d-flex p-5"> */}
                <div className="d-flex p-3">
                  {data.list.map((skill) => {
                    return (
                      <div className="li-shadow shade1 br-10 px-2 mx-3 d-flex flex-column justify-content-center  ">
                        <div className="text-white skill-icon">{skill.icon}</div>
                        <label className="text-white px-auto ">
                          {skill.name}
                        </label>
                      </div>
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
