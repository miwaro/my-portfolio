import React from "react";

const About = () => {
  return (
    <div className="about-contentContainer">
      <div id="about">
        <h1 className="about-title">About Me</h1>
        <div className="about-imageContainer">
          <img
            src="/images/profile-pic3.jpg"
            className="about-pic"
            id="about-pic1"
          ></img>
          <img
            src="/images/pro-profile-pic.jpg"
            className="about-pic"
            id="about-pic2"
          ></img>
          <img
            src="/images/profile-pic2.jpg"
            className="about-pic"
            id="about-pic3"
          ></img>
        </div>

        <p className="section-subtitle" id="about-subtitle">
          Hi, my name is Michael and as you could guess, I am a software
          developer. I have 6 years of experience building applications for
          companies and individuals using the latest technologies including the
          React and Redux libraries. I have been involved in every step of the
          software development lifecycyle from planning to testing and
          deployment.
          <br />
        </p>
        <p className="section-subtitle" id="about-subtitle2">
          Aside from coding, I enjoy playing the Najdorf variation of the
          sicilian defense (chess). I also enjoy classical guitar, music
          production, basketball, and exploring some of the amazing natural
          locations of Colorado. Recently, I have picked up mountain biking as
          well as bouldering, and I can't forget to mention my favorite video
          game, Zelda.
        </p>
      </div>
      <hr />
    </div>
  );
};

export default About;
