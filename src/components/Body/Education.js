import React from "react";
import Separator from "../common/Separator";
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
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

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
    <div className="shade1 vh-100 p-4">
      <div className="section-title mt-5">Education</div>
      {/* <Typography variant='h3' >Education</Typography> */}
      <div className="school-card-wrap py-5 my-5">
        <Stack sx={{ width: "100%" }} spacing={4}>
          <Stepper
            alternativeLabel
            activeStep={2}
            connector={<QontoConnector />}
          >
            {data.map((school, index) => (
              <Step key={school}>
                <StepLabel StepIconComponent={QontoStepIcon}>
                  <Grid className="d-flex justify-content-center">
                    <div
                      className=" li-theme rounded li-shadow"
                      style={{ minWidth: 250 }}
                      key={index}
                    >
                      <CardContent className="d-flex flex-column justify-content-center">
                        <div className="d-flex justify-content-center">
                          {index + 1 == data.length ? (
                            <StyledBadge
                              overlap="circular"
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                              }}
                              variant="dot"
                            >
                              <Avatar
                                variant="circular"
                                alt="Remy Sharp"
                                src={school.schoolPic}
                                // className={classes.sizeAvatar}
                                sx={{ height: 150, width: 150 }}
                              />
                            </StyledBadge>
                          ) : (
                            <Avatar
                              variant="circular"
                              alt="Remy Sharp"
                              // className={`${classes.sizeAvatar} && "offset-5"`}
                              src={school.schoolPic}
                              sx={{ height: 150, width: 150 }}
                            />
                          )}
                        </div>
                        <Typography
                          className="text-white fw-600"
                          variant="h5"
                          component="div"
                          sx={{ mt: 1.5 }}
                        >
                          {school.name}
                        </Typography>
                        <Typography
                          sx={{ mb: 1.5 }}
                          color="text.secondary"
                          className="text-white"
                        >
                          {school.yearJoin} - {school.yearEnd}
                        </Typography>
                        <Typography variant="body2" className="text-white">
                          {school.qualification}
                          {school.domain ? (
                            <span>
                              <i class="bi bi-arrow-right"></i> {school.domain}{" "}
                            </span>
                          ) : null}
                        </Typography>
                        <Typography variant="h5" className="text-white">
                          {school.percentage}
                        </Typography>
                      </CardContent>
                    </div>
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
