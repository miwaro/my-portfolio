import React from 'react';

const About = () => {

  return (
    <div className='about-contentContainer'>
      <div id="about">
        <h1 className='about-title'>About Me</h1>
        <div className='about-imageContainer'>
          <img src='/images/profile-pic3.jpg' className='about-pic' id='about-pic1'></img>
          <img src='/images/pro-profile-pic.jpg' className='about-pic' id='about-pic2'></img>
          <img src='/images/profile-pic2.jpg' className='about-pic' id='about-pic3'></img>
        </div>

        <p className='section-subtitle' id='about-subtitle'>
          Hi, my name is Michael and as you could guess, I am a web developer.
          I enjoy building visually appealing UIs that are both clean and intuitive.
          I have 5 years of experience building applications for companies and individuals using the latest front end technologies
          including the React library and Redux.
          <br />
        </p>
        <p className='section-subtitle' id='about-subtitle2'>
          Aside from coding, I enjoy playing the Najdorf variation of the sicilian defense (chess). I also enjoy classical guitar, music production, basketball, and
          exploring some of the amazing natural locations of this region.
        </p>
      </div>
      <hr />
    </div>
  );
}

export default About;