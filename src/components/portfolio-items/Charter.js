import React from "react";

const Charter = () => {
  return (
    <div className="portfolio-portfolioItem">
      <div
        className="portfolio-portfolioItemText"
        id="portfolio-blindsTrackerText"
      >
        <h2 className="portfolio-portfolioItemTitle">Charter Communications</h2>
        <p>
          I primarily worked on two projects, FMS and Helios. FMS provides
          multiple features to assist sales support in managing “fallouts”,
          issues that need to be resolved to complete orders. Helios is an
          internal testing harness for the Charter ordering services. It allows
          developers, business analysts, and QA testers to validate the
          succesful and failure cases for the various ordering scenarios of the
          different clients. Both projects were built with React, Material UI
          and the React's Context API.
        </p>
        <div className="portfolio-portfolioButtonContainer">
          <div className="portfolio-portfolioButton">
            <a
              href="https://corporate.charter.com/"
              className="button"
              target="blank"
            >
              Explore The App
            </a>
          </div>
        </div>
      </div>
      <div
        className="portfolio-portfolioItemImage"
        id="portfolio-blindsTrackerImage"
      >
        <a href="https://corporate.charter.com/" target="blank">
          <img
            src="/images/charter.png"
            className="portfolio-screenshot"
            rel="noopener noreferrer"
            alt="charter-app"
            width="600"
            height="380"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Charter;
