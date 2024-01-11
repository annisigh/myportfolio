import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from "../../images/movieX.png";
import ImageTwo from "../../images/github.png";
import ImageThree from "../../images/life-timer.png";
import ImageFour from "../../images/myTunes.png";
import ImageFive from "../../images/blog.png";
import ImageSix from "../../images/travel.png";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "MovieX Website",
    image: ImageOne,
    link: "https://github.com/annisigh/MovieX",
    socialLink: "https://your-moviex-website-media-link",
  },
  {
    id: 3,
    name: "Github Profile App",
    image: ImageTwo,
    link: "https://github.com/annisigh/Github-Profile",
    socialLink: "https://your-github-profile-app-media-link",
  },
  {
    id: 2,
    name: "Life Timer Website",
    image: ImageThree,
    link: "https://github.com/annisigh/Life-Timer-Website",
    socialLink: "https://your-Life-timer-website-media-link",
  },
  {
    id: 2,
    name: "Travel Website",
    image: ImageFour,
    link: "https://github.com/annisigh/Life-Timer-Website",
    socialLink: "https://your-Life-timer-website-media-link",
  },
  {
    id: 2,
    name: "Blog Website",
    image: ImageFive,
    link: "https://github.com/annisigh/Life-Timer-Website",
    socialLink: "https://your-Life-timer-website-media-link",
  },
  {
    id: 2,
    name: "My Tunes Website",
    image: ImageSix,
    link: "https://github.com/annisigh/Life-Timer-Website",
    socialLink: "https://your-Life-timer-website-media-link",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  // {
  //   filterId: 3,
  //   label: "Design",
  // },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("=====================================");
  console.log(hoveredValue);
  console.log("=====================================");

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {(filteredValue === 1
            ? portfolioData
            : portfolioData.filter((item) => item.id === filteredValue)
          ).map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    {item.link && (
                      <button>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit
                        </a>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
