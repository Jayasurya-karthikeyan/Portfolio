import React from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import Education from "./Education";

function Body() {
  return (
    <div className="">
      <div className="snap-container">
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Work />
        </section>
        <section id="contact" className="pt-5 pt-md-0">
          <Contact />
        </section>
        {/* <section id="client">
          <Client />
        </section> */}
      </div>
    </div>
  );
}

export default Body;
