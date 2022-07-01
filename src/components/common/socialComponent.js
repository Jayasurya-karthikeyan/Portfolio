import React from "react";
import { SocialData } from "../../data/socialData";

function SocialComponent() {
  const data = SocialData;
  return (
    <div className="social-contact h3 d-flex justify-content-center">
      {data.map((social) => {
        return (
          <a href={social.link}>
            <div className="social-icon-div m-3 ">
              <div className="social-icon">{social.icon}</div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialComponent;
