import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Social Follow</h3>
      <a
        href="https://www.youtube.com/c/jamesqquick"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/c/jamesqquick"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      <div class="social-container">
        <h3>Social Follow</h3>
      </div>
    </div>
  );
}
