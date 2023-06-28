import React from "react";

const Bis = () => {
  return (
    <div className="portfolio-portfolioItem">
      <div
        className="portfolio-portfolioItemImage"
        id="portfolio-blindsTrackerImage"
      >
        <a href="https://www.bisonline.com/" target="blank">
          <img
            src="/images/BIS.png"
            className="portfolio-screenshot"
            rel="noopener noreferrer"
            alt="bis-app"
            width="600"
            height="380"
          ></img>
        </a>
      </div>
      <div
        className="portfolio-portfolioItemText"
        id="portfolio-blindsTrackerText"
      >
        <h2 className="portfolio-portfolioItemTitle">
          Business Information Systems
        </h2>
        <p>
          The main project I contributed to was called "Star". "Star" is a
          React/Redux web application that provides multiple features to assist
          county clerks across the state of Tennessee in the handling of
          transactions for new license plates and vehicle registrations as well
          as the management of inventory.
        </p>
        <div className="portfolio-portfolioButtonContainer">
          <div className="portfolio-portfolioButton">
            <a
              href="https://www.bisonline.com/"
              className="button"
              target="blank"
            >
              Explore The App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bis;
