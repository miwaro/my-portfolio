import React from 'react';

const About = () => {

  return (
    <div className='about-contentContainer'>
      <div id="about">
        <h1 className='section-title'>About Me</h1>
        <div className='about-imageContainer'>
          <img src='/images/profile-pic3.jpg' className='about-pic' id='about-pic1'></img>
          <img src='/images/pro-profile-pic.jpg' className='about-pic' id='about-pic2'></img>
          <img src='/images/profile-pic2.jpg' className='about-pic' id='about-pic3'></img>
        </div>

        <p className='section-subtitle' id='about-subtitle'>
          I am a front-end web developer driven by my passion to bring new ideas to life.
          I am proficient in the tools of the modern web, including React, Redux, and Javascript.
          I actively follow the evolution of these technologies and enjoy implementing their new features, like "Hooks".
          I enjoy pursuing challenging problems and using my expertise to develop creative, strategic solutions for them.
          I have a proven track record of designing and implementing production applications across several different technology stacks
          that have been used by businesses and individuals to solve real-world problems.
                <br />
        </p>
        <p className='section-subtitle' id='about-subtitle2'>
          Aside from coding, I enjoy playing the Najdorf variation of the sicilian defense (chess). I also enjoy classical guitar, basketball, and
          exploring some of the amazing natural locations of the Pacific Northwest.
            </p>
      </div>
      <hr />
    </div>
  );
}

export default About;