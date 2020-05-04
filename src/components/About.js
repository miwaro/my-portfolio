import React from 'react';

const About = () => {
  return (
    <div className='about-contentContainer' id="about">
        <div>
            <h1 className='section-title'>About Me</h1>
            <div className='about-imageContainer'>
                <img src='/images/profile-pic3.jpg' className='about-pic' id='about-pic1'></img>
                <img src='/images/profile-pic2.jpg' className='about-pic' id='about-pic2'></img>
                <img src='/images/profile-pic5.jpg' className='about-pic' id='about-pic3'></img>
            </div>
            <p className='section-subtitle' id='about-subtitle'>
            I am a front-end web developer driven to bringing new ideas to life. I am proficient in the tools of the modern web, including React and Redux. I actively follow the progression of these technologies and enjoy implementing their new features, like "Hooks". I enjoy pursuing challenging problems and developing creative solutions to them. I have a proven track record of designing and implementing production applications across several different technology stacks that have been used by businesses and individuals to solve real-world problems.
                <br />
            </p>
            <p className='section-subtitle' id='about-subtitle2'>
              Aside from coding, I enjoy playing chess, guitar, and basketball. I have also been exploring the beautiful Pacific Northwest since I moved here in May of 2019.
            </p>
            <div className='about-listContainer'>
                <div>
                    <p className='about-subheading'>
                        Languages &amp; Frameworks
                    </p>
                    <p className='about-list'>
                        <li>React/Redux (with Hooks)<br /></li>
                        <li>Typescript<br /></li>
                        <li>HTML/CSS/JS<br /></li>
                        <li>Material-UI<br /></li>
                        <li>Bootstrap<br /></li>
                        <li>Testing (Jest, Enzyme)<br /></li>
                    </p>
                </div>
                <div>
                    <p className='about-subheading'>
                        Dev-Tools
                    </p>
                    <p className='about-list'>
                        <li>Webpack<br /></li>
                        <li>Babel<br /></li>
                        <li>Git and Github<br /></li>
                        <li>Command Line/Terminal<br /></li>
                        <li>Heroku<br /></li>
                        <li>Google Domains<br /></li>
                        <li>Chrome Dev-Tools<br /></li>
                    </p>
                </div>
            </div>
            <div className='about-listContainer'>
                <div>
                    <p className='about-subheading'>
                        Courses &amp; Certificates
                    </p>
                    <p className='about-list'>
                        <li>Team Treehouse - Front-End Web Development Certificate<br /></li>
                        <li>Udemy - The Complete React Web Developer Course (With Redux)<br /></li>
                        <li>Udemy - The Complete Javascript Course 2018<br /></li>
                        <li>Udemy - Understanding Typescript<br /></li>
                        <li>Udemy - Bootstrap 4 From Scratch<br /></li>
                        <li>Udemy - Ultimate CSS Grid Course<br /></li>
                    </p>
                </div>
            </div>
        </div>
        <hr />
    </div>
  );
}

export default About;