import React from "react";
import { EducationData } from "../../data/educationData";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { makeStyles } from "@material-ui/core";
import { Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Title from "../common/Title";
import { motion } from "framer-motion";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: -1,
      left: -1,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(1.4)",
      opacity: 0,
    },
  },
}));

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#fff",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#fff",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#fff",
    // boxShadow:"0px "
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#fff",
    zIndex: 1,
    fontSize: 30,
  },
  "& .QontoStepIcon-circle": {
    width: 18,
    height: 18,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon text-white fw-bold bg-success rounded-circle p-1" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

// const steps = [
//   "Select campaign settings",
//   "Select campaign settings",
//   "Create an ad group",
//   "Create an ad",
// ];
const useStyles = makeStyles((theme) => ({
  sizeAvatar: {
    height: theme.spacing(10),
    width: theme.spacing(10),
    // display: "none",
    position: "absolute",
  },
  stepper: {
    display: "flex",
    flexDirection: "column-reverse",
  },
}));

function Education() {
  const data = EducationData;
  const classes = useStyles();

  return (
    <div className="shade1 min-vh-100 p-4 pt-5 pt-xl-2 pt-xxl-5">
      <Title title="EDUCATION" />
      {/* <Typography variant='h3' >Education</Typography> */}
      <div className="py-2 py-md-5 my-4 my-md-5 my-xl-3 my-xxl-5">
        <Stack className="d-none d-md-block" sx={{ width: "100%" }} spacing={4}>
          <Stepper
            alternativeLabel
            activeStep={2}
            connector={<QontoConnector />}
          >
            {data.map((school, index) => (
              <Step key={school}>
                <StepLabel StepIconComponent={QontoStepIcon}>
                  <Grid className="d-flex justify-content-center">
                    <motion.div
                      initial={{ rotateY: 180 }}
                      whileInView={{ rotateY: 0 }}
                      drag
                      dragConstraints={{
                        top: 0,
                        left: -10,
                        right: 10,
                        bottom: 50,
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.8,
                      }}
                      className="scl-box shade3 br-20 li-shadow px-0 mt-md-4 d-flex flex-column justify-content-center"
                      key={index}
                    >
                      <div className="d-flex justify-content-center py-3">
                        <img
                          alt={school.name}
                          className="tl-avatar"
                          src={school.schoolPic}
                        />
                      </div>
                      <div className="shade2 w-100 px-2 py-3 br-20 li-y-shadow">
                        <div className="text-white fw-600 fam1 scl-name">
                          {school.name}
                        </div>
                        <div className="text-white fw-300 scl-year fam4">
                          {school.yearJoin} - {school.yearEnd}
                        </div>
                        <div className="text-white fam6 fw-300 scl-year">
                          {school.qualification}{" "}
                          {school.domain && (
                            <ArrowRightAltIcon className="scl-year" />
                          )}{" "}
                          {school.domain}
                        </div>
                        <div className=" fam4 font4 fw-bold scl-name">
                          {school.percentage}
                        </div>
                      </div>
                    </motion.div>
                  </Grid>
                  {/* <div className="school-card col-4 col-sm-6 offset-3 justify-content-center border border-3 border-dark rounded py-4">
                    <div key={index} className="school-info px-1">
                      <div className="school-schoolPic">
                        <img className="schoolPic" src={school.schoolPic} />
                      </div>
                      <h4 className="school-name">
                        {school.name}{" "}
                        <div>
                          [ {school.yearJoin} - {school.yearEnd}]
                        </div>
                      </h4>
                      <div className="school-location">{school.location}</div>
                      <div className="school-qualification">
                        {school.qualification}{" "}
                        {school.domain ? (
                          <span>
                            <i class="bi bi-arrow-right"></i> {school.domain}{" "}
                          </span>
                        ) : null}
                      </div>
                      <div className="school-location h5">
                        {school.percentage}
                      </div>
                    </div>
                  </div> */}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>
        <Timeline className="d-md-none tl-mar">
          {data.map((school, ind) => (
            <TimelineItem key={ind}>
              <TimelineSeparator>
                {ind + 1 != data.length ? (
                  <>
                    <Check
                      className="text-white bg-success rounded-circle "
                      sx={{ fontSize: 20 }}
                    />
                    <TimelineConnector />
                  </>
                ) : (
                  <div
                    className="p-1 rounded-circle border border-4 border-white"
                    style={{ marginLeft: -3 }}
                  ></div>
                )}
              </TimelineSeparator>
              <TimelineContent>
                <Grid className=" ms-1 mb-4">
                  <motion.div
                    initial={{ x: 180 }}
                    whileInView={{ x: 0 }}
                    // drag
                    // dragConstraints={{
                    //   top: 0,
                    //   left: -10,
                    //   right: 10,
                    //   bottom: 50,
                    // }}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.4,
                    }}
                    className="scl-box shade3 br-20 li-shadow px-0 mt-md-4 d-flex justify-content-center align-items-center"
                    // key={ind}
                  >
                    <div className="d-flex justify-content-center py-1 px-2">
                      <img
                        alt={school.name}
                        className="tl-avatar"
                        src={school.schoolPic}
                      />
                    </div>
                    <div className="shade2 w-100 px-2 py-3 br-20 li-lx-shadow">
                      <div className="text-white fw-600 fam1 scl-name">
                        {school.name}
                      </div>
                      <div className="text-white fw-300 scl-year fam4">
                        {school.yearJoin} - {school.yearEnd}
                      </div>
                      <div className="text-white fam6 fw-300 scl-year">
                        {school.qualification}{" "}
                        {school.domain && (
                          <ArrowRightAltIcon className="scl-year" />
                        )}{" "}
                        {school.domain}
                      </div>
                      <div className=" fam4 font4 fw-bold scl-name">
                        {school.percentage}
                      </div>
                    </div>
                  </motion.div>
                </Grid>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
        {/* {data.map((school, index) => {
          return (
            <>
              <div className="school-card d-flex col-12 col-sm-8 justify-content-center border border-3 border-dark rounded py-4 m-3">
                <div key={index} className="school-info px-5 ">
                  <h4 className="school-name">
                    {school.name} [ {school.yearJoin} - {school.yearEnd}]
                  </h4>
                  <div className="school-location">{school.location}</div>
                  <div className="school-qualification">
                    {school.qualification}{" "}
                    {school.domain ? (
                      <span>
                        <i class="bi bi-arrow-right"></i> {school.domain}{" "}
                      </span>
                    ) : null}
                  </div>
                  <div className="school-location h5">{school.percentage} </div>
                </div>
                <div className="school-schoolPic">
                  <img className="schoolPic" src={school.schoolPic} />
                </div>
              </div>
            </>
          );
        })} */}
      </div>
      {/* <Separator /> */}
    </div>
  );
}

export default Education;
