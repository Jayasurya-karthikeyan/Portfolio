import React from "react";

function Mob({ isOpen, setIsOpen }) {
  return (
    <div className="mob">
      <div className="close" onClick={() => setIsOpen(!isOpen)}>
        <i class="bi bi-x-circle-fill"></i>
      </div>
      <div className="mob-options">
        <div className="web-option">
          <a href="#education">Education</a>
        </div>
        <div className="web-option">
          <a href="#projects">Projects</a>
        </div>
        <div className="web-option">
          <a href="#skills">Skills</a>
        </div>
        <div className="web-option">
          <a href="#work">Work</a>
        </div>
        <div className="web-option">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Mob;
