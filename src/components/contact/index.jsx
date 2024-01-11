import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
// import { BsInfoCircleFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { Animate } from "react-simple-animate";
// import { FaLeetcode } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";
import "material-icons/iconfont/material-icons.css";
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<FontAwesomeIcon icon={faAddressCard} size={30} />}
      />

      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button>Submit</button>
          </div>
        </Animate>

        <div className="contact__content__social-links">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/annisigh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.hackerrank.com/profile/luckysingh7282"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaHackerrank size={30} />
          </a>
          <a
            href="https://leetcode.com/luckysingh7282/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="data:image/png;base64,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" // Replace with the path to your LeetCode icon image
              alt="LeetCode Icon"
              width="30"
              height="30"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
