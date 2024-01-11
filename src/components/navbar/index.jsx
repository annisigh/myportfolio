import React, { useState } from "react";
// import { FaBars, FaReact } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.scss";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FontAwesomeIcon icon={faBriefcase} size={30} />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? (
            <HiX size={30} />
          ) : (
            <FontAwesomeIcon icon={faBars} size={30} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
