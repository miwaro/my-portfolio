import React from "react";

const Skills = () => {
  return (
    <div id="skills">
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-container">
        <div className="skill-headers">
          <p className="subheading">Frameworks &amp; Languages</p>
          <p className="subheading">Dev-Tools</p>
        </div>

        <div className="lang-dev-container">
          <p className="languages">
            <li>React</li>
            <li>Redux</li>
            <li>Next.js</li>
            <li>HTML5</li>
            <li>CSS/SCSS</li>
            <li>Material-UI</li>
            <li>Jenkins</li>
          </p>
          <p>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Bootstrap</li>
            <li>Wordpress</li>
            <li>Jest</li>
          </p>
          <p>
            <li>Webpack</li>
            <li>Babel</li>
            <li>Git Github Bitbucket</li>
            <li>Jira</li>
            <li>Bash</li>
            <li>Google Domains</li>
            <li>Chrome Dev-Tools</li>
          </p>
        </div>

        <div className="logos">
          <img src="images/react.png" className="logos-img"></img>
          <img src="images/redux.png" className="logos-img"></img>
          <img src="images/html.webp" className="logos-img"></img>
          <img src="images/js.png" className="logos-img"></img>
          <img src="images/typescript.webp" className="logos-img"></img>
          <img src="images/material.png" className="logos-img"></img>
          <img src="images/bootstrap-stack.png" className="logos-img"></img>
          <img src="images/scss.jpg" className="logos-img"></img>
          <img src="images/jest.png" className="logos-img"></img>
          <img src="images/express.png" className="logos-img"></img>
        </div>
      </div>

      <hr></hr>
    </div>
  );
};

export default Skills;
