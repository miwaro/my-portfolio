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
          As a contractor for Charter, I primarily worked on two React projects,
          FMS and Helios. FMS provides multiple features to assist sales
          activation agents in managing “fallouts”, issues that need to be
          resolved to complete orders for internet/tv/mobile. Helios assists
          internal teams in testing buyflows with various channel partners. It
          also allows teams to view offers, products, and prices as well as
          enter incorrect data to create fallouts.
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
