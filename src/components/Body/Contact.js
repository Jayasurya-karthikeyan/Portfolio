import React, { useState } from "react";
import emailjs from "emailjs-com";
import SocialComponent from "../common/socialComponent";
import SendIcon from "@mui/icons-material/Send";
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Title from "../common/Title";
import Loader from "../common/Loader";
import MovingIcon from "@mui/icons-material/Moving";
import resume from "../../assets/Resume.pdf";
import { motion } from "framer-motion";
import { useRef } from "react";

const useStyles = makeStyles({
  input: {
    color: "blue",
  },
});
const styles = (theme) => ({
  multilineColor: {
    color: "red",
  },
});
function Contact() {
  // const classes = useStyles();
  const form = useRef();

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [feed, setFeed] = useState("");

  const [load, setLoad] = useState(false);
  const [success, setSuccess] = useState(false);
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   console.log("Hi");

  //   emailjs
  //     .sendForm(
  //       "service_48oufqf",
  //       "template_6v96pon",
  //       form.current,
  //       "user_O6598bUuItick374hkQ9o"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  const sendEmail = (e) => {
    e.preventDefault();
    setLoad(true);
    console.log(form.current);
    // console.log();
    // if (name != "" && mail != "" && feed != "") {
    if (
      e.target.Name.value != "" &&
      e.target.Email.value != "" &&
      e.target.Message.value != ""
    ) {
      emailjs
        .sendForm(
          "service_48oufqf",
          "template_6v96pon",
          form.current,
          "user_O6598bUuItick374hkQ9o"
        )
        .then(() => {
          setLoad(false);
          setSuccess(true);
          setTimeout(() => setSuccess(false), 4000);
        })
        .catch((err) => {
          setLoad(false);
          alert(err);
        });
    } else {
      setLoad(false);
      alert("Incomplete fields! \nPlease fill in the fields");
    }
    e.target.reset();
  };

  return (
    <div className="shade2 min-vh-100 d-flex flex-column justify-content-between position-relative">
      <div className="p-lg-4 pt-1 pt-md-4 pt-xl-2 pt-xxl-4 shade1 min-vh-100 br-con position-relative flex-column justify-content-between justify-content-md-start">
        <Title title="CONTACT" />
        <div className="px-3 py-3 px-md-2 px-lg-0">
          <div className="col-12 col-lg-10 mb-4 mb-lg-0 mt-md-5 pt-3 pt-lg-0 bg-con">
            <div className="px-sm-3 px-md-2 px-lg-2 d-md-flex align-items-center ">
              <div className="col-12 col-md-8 col-xl-9 px-2 px-sm-5">
                <div className="text-center font5 val-fed">
                  Your Feedback/Query
                </div>

                {/* <form className="bg-white" ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="Name" />
                  <label>Email</label>
                  <input type="email" name="Email" />
                  <label>Message</label>
                  <textarea name="Message" />
                  <input type="submit" value="Send" />
                </form> */}
                <form
                  className="my-1 my-sm-3 py-2 d-flex flex-column align-items-center justify-content-center col-12"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <motion.div
                    className=" col-12 col-md-11 col-xl-7 py-3"
                    initial={{ x: -100, scale: 0, opacity: 0 }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                  >
                    <input
                      id="Name"
                      name="Name"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      className="bg-transparent px-3 py-2 text-white br-10 w-100 t-field"
                      style={{ border: "2px solid white" }}
                      placeholder="Name"
                    />
                    {/* <label className="col-5 col-sm-2 px-0">Name</label>
              <input className="col-5 col-sm-4" type="text"  /> */}
                  </motion.div>

                  <motion.div
                    className="py-3 col-12 col-md-11 col-xl-7"
                    initial={{ x: -100, scale: 0, opacity: 0 }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                  >
                    <input
                      id="Email"
                      name="Email"
                      type="text"
                      onChange={(e) => setMail(e.target.value)}
                      className="bg-transparent px-3 py-2 t-field text-white br-10 w-100"
                      style={{ border: "2px solid white" }}
                      placeholder="Email"
                    />
                    {/* <label className="col-5 col-sm-2 px-0">Email</label>
              <input className="col-5 col-sm-4" type="text" name="Email" /> */}
                  </motion.div>

                  <motion.div
                    className="col-12 col-md-11 col-xl-7 py-3"
                    initial={{ x: -100, scale: 0, opacity: 0 }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      delay: 0.1,
                      bounce: 0.4,
                    }}
                  >
                    {/* <span className="col-5 col-sm-2 px-0"> */}
                    <textarea
                      rows="3"
                      id="Feedback"
                      label="Feedback"
                      onChange={(e) => setFeed(e.target.value)}
                      type="text"
                      className="bg-transparent t-field px-3 py-2 text-white br-10 w-100"
                      style={{ border: "2px solid white" }}
                      placeholder="FeedBack"
                      name="Message"
                    />
                    {/* <label className="">Feedback</label>
              // </span>
              <textarea className="col-5 col-sm-4" name="Message" rows="3" /> */}
                  </motion.div>

                  <motion.div
                    className="py-2 d-flex justify-content-center"
                    initial={{ x: -10, scale: 0, opacity: 0 }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      delay: 0.1,
                      bounce: 0.4,
                    }}
                  >
                    {load && <Loader />}
                    {/* // ) : ( */}
                    {/* // <Button
                    //   variant="contained"
                    //   color="error"
                    //   type="submit"
                    //   className="col-3 col-sm-1"
                    //   // endIcon={<SendIcon />}
                    // >
                    //   Send
                    // </Button>*/}
                    <motion.div
                      className=" shade6 mx-auto px-4 t-field py-1 br-10 fw-bold li-shadow cursor-pointer font1"
                      whileHover={{
                        scale: 1.1,
                        // boxShadow: "0px 0px 8px #fff",
                        transition: {
                          // repeat: Infinity,
                          type: "spring",
                          duration: 0.5,
                        },
                      }}
                    >
                      <input
                        type="submit"
                        value="Send"
                        className="t-field fw-bold font1 bg-transparent border-0"
                      />
                    </motion.div>
                    {/* // )} */}
                  </motion.div>

                  {success && (
                    <motion.div
                      className="position-absolute py-3 col-11 col-md-9 fw-600 col-lg-3 br-20 shade4 font1 t-field  m-1 m-sm-2 m-lg-3 px-3 px-md-4 "
                      style={{ top: 0, left: 0 }}
                      initial={{ y: -100, scale: 0, opacity: 0 }}
                      animate={{ y: 0, scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        // delay: 10,
                        type: "spring",
                        bounce: 0.4,
                      }}
                    >
                      Feedback Sent successfully!!
                      {/* <label className="col-5 col-sm-2 px-0">Email</label>
              <input className="col-5 col-sm-4" type="text" name="Email" /> */}
                    </motion.div>
                  )}
                </form>
              </div>
              {/* <div className=" bg-white br-10" style={{ height: 500 ,width:5 }}></div> */}
              <div className="p-3 text-center d-flex flex-column justify-content-center mx-auto col-10 col-md-4 col-xl-3">
                <motion.div
                  initial={{ y: 150, scale: 0, opacity: 0 }}
                  whileInView={{ y: 0, scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    type: "spring",
                    bounce: 0.2,
                  }}
                  className="font5 mb-2 mb-md-4 val-fed"
                >
                  Resume
                </motion.div>
                <motion.div
                  initial={{ y: 200, scale: 0, opacity: 0 }}
                  whileInView={{ y: 0, scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    type: "spring",
                    bounce: 0.2,
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      // repeat: Infinity,
                      type: "spring",
                      duration: 0.5,
                    },
                  }}
                  className=" px-4 py-2 my-2 shade3 fam3 fw-500 br-10 li-shadow cursor-pointer"
                >
                  <a
                    className=" td-none t-field text-white fam3 py-1"
                    download
                    target="_blank"
                    href={resume}
                  >
                    Download CV &nbsp; <i class="bi bi-download sicio"> </i>
                  </a>
                </motion.div>
                <motion.div
                  initial={{ y: 100, scale: 0, opacity: 0 }}
                  whileInView={{ y: 0, scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    type: "spring",
                    bounce: 0.2,
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      // repeat: Infinity,
                      type: "spring",
                      duration: 0.5,
                    },
                  }}
                  className=" px-4 py-2 my-2 shade3 fam3 fw-500 t-field br-10 li-shadow td-none text-white cursor-pointer"
                >
                  <a
                    className="td-none text-white t-field "
                    target="_blank"
                    href={resume}
                  >
                    View CV &nbsp; <MovingIcon className="socio" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="position-absolute d-none d-lg-block py-4"
          style={{ bottom: 0, right: 0 }}
        >
          <SocialComponent vertical />
        </div>
        <div
          className="shade6 py-3 d-lg-none col-12 d-flex justify-content-center"
          style={{ bottom: 0, right: 0, borderRadius: "15px 15px 0px 0px" }}
        >
          <SocialComponent />
        </div>
      </div>
    </div>
  );
}

export default Contact;
