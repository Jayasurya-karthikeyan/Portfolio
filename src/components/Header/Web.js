import React from "react";

function Web() {
  return (
    <div className="d-flex">
      <div className="col-6">
        <a className="fw-bold text-white td-none navlinks ms-lg-5" >
          JS
        </a>
      </div>
      <div className="col-6 d-flex justify-content-around">
        <a className="fw-bold text-white td-none navlinks" href="#education">
          Education
        </a>
        <a className="fw-bold text-white td-none navlinks" href="#projects">
          Projects
        </a>
        <a className="fw-bold text-white td-none navlinks" href="#skills">
          Skills
        </a>
        <a className="fw-bold text-white td-none navlinks" href="#work">
          Work
        </a>
        <a className="fw-bold text-white td-none navlinks" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
