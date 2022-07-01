import React, { useState } from "react";
import emailjs from "emailjs-com";
import Separator from "../common/Separator";
import SocialComponent from "../common/socialComponent";
// import { Button } from "react-bootstrap";
import { LoadingButton } from "@mui/lab";
// import { SaveIcon } from '@mui/icons-material';
import SendIcon from "@mui/icons-material/Send";
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
// import { SendIcon } from "@mui/icons-material";
const useStyles = makeStyles({
  input: {
    color: "blue",
  },
});
function Contact() {
  const classes = useStyles();
  const [load, setLoad] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    // console.log();
    if (
      e.target.Name.value != "" &&
      e.target.Email.value != "" &&
      e.target.Message.value != ""
    ) {
      emailjs
        .sendForm(
          "service_48oufqf",
          "template_6v96pon",
          e.target,
          "user_O6598bUuItick374hkQ9o"
        )
        .then(() => {
          setLoad(false);
          alert("Feedback sent!");
        })
        .catch((err) => {
          setLoad(false);
          alert(err);
        });
    } else {
      setLoad(false);
      alert("Incomplete fields! \nPlease fill in the fields");
    }
  };

  return (
    <div className="shade1 vh-100 p-4">
      <div className="section-title">Contact</div>
      <div className="contact-container p-4 ">
        <div className="contact-left text-center text-white">
          <h5>
            Wanna Contact Me ? Click your favorite social media icon and text me
          </h5>
          <div className="p-auto">
            <SocialComponent />
          </div>
        </div>
        <div className="download p-3 text-center">
          <Button
            variant="contained"
            color="success"
            download
            href={require("../../assets/Resume.pdf").default}
          >
            Download Resume &nbsp; <i class="bi bi-download"> </i>
          </Button>
        </div>
        <div className="feedback-container  p-5">
          <h2 className="text-center text-white">Your Valuable Feedback</h2>
          <form
            className="my-3"
            onSubmit={(e) => {
              setLoad(true);
              sendEmail(e);
            }}
          >
            <div className="py-2 offset-1 offset-sm-4 row">
              <TextField
                id="Name"
                name="Name"
                label="Name"
                variant="standard"
                className="col-10 col-sm-6 text-white"
              />
              {/* <label className="col-5 col-sm-2 px-0">Name</label>
              <input className="col-5 col-sm-4" type="text"  /> */}
            </div>

            <div className="py-2 offset-2 offset-sm-4 row">
              <TextField
                id="Email"
                name="Email"
                label="Email"
                variant="standard"
                className="col-10 col-sm-6 text-white"
              />
              {/* <label className="col-5 col-sm-2 px-0">Email</label>
              <input className="col-5 col-sm-4" type="text" name="Email" /> */}
            </div>

            <div className="py-2 offset-2 offset-sm-4 ">
              {/* <span className="col-5 col-sm-2 px-0"> */}
              <TextField
                id="Feedback"
                label="Feedback"
                multiline
                className=" col-10 col-sm-6 text-white"
                // inputProps={{
                //   color: "#fff",
                // }}
                // sx={{
                //   color: "white",
                // }}
                
                maxRows={4}
                variant="standard"
                name="Message"
              />
              {/* <label className="">Feedback</label>
              // </span>
              <textarea className="col-5 col-sm-4" name="Message" rows="3" /> */}
            </div>

            <div className="py-2 text-center">
              {load ? (
                <LoadingButton
                  loading
                  loadingPosition="end"
                  // startIcon={<SaveIcon />}
                  variant="outlined"
                >
                  {"  "}Send
                </LoadingButton>
              ) : (
                // <Button
                //   variant="contained"
                //   color="error"
                //   type="submit"
                //   className="col-3 col-sm-1"
                //   // endIcon={<SendIcon />}
                // >
                //   Send
                // </Button>
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  className="col-3 col-sm-1"
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
