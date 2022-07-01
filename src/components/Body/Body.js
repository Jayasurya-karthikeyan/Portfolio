import React from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import Client from "./Client";
import Education from "./Education";

function Body() {
  return (
    <div className="">
      <div className="">
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
        <section id="work">
          <Work />
        </section>
        <section id="contact">
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
