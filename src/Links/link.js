import React from "react";
import "./link.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Link = () => {
  return (
    <>
      <div className="link-container">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/vaibhav-bhosale-97162b1a7/"
          id="first"
        >
          <FontAwesomeIcon className="linkd-icon" icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/vaibhavbhosale10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="git-icon" icon={faGithub} />
        </a>
        <a
          href="https://www.facebook.com/vaibhav.bhosale.1010/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="facebook-icon" icon={faFacebook} />
        </a>
        <a
          href="https://twitter.com/Vaibhav1078"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="twitter-icon" icon={faTwitter} />
        </a>
      </div>
    </>
  );
};

export default Link;
