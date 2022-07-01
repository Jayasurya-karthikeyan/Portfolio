import React from "react";
import { WorkData } from "../../data/workData";
import Separator from "../common/Separator";

function Work() {
  const data = WorkData;
  return (
    <div className="shade1 vh-100 p-4">
      <div className="section-title">Work</div>
      <div className="  work-list d-flex px-5 ">
        {data.map((work) => {
          return (
            <div className="br-10 m-3 mx-5 px-4 pt-4 pb-2 col-12 col-sm-5 d-flex da-theme li-shadow">
              <img
                src={work.companyLogo}
                className=""
                style={{
                  height: "100px",
                }}
              />
              <div className="work-info">
                <div className="text-white fw-bold h4">{work.company}</div>
                <div className="text-white work-dates">
                  <label>{work.dateJoin}</label> - <label>{work.dateEnd}</label>
                </div>
                <div className="text-white work-desc">
                  <p>{work.work}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <Separator /> */}
    </div>
  );
}

export default Work;
