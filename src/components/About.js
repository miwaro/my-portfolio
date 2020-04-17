import React from 'react';

const About = () => {
  return (
    <div className='about-contentContainer'>
        <div>
            <h1 className='section-title'>About Me</h1>
            <div className='about-imageContainer'>
                <img src='/images/profile-pic3.jpg' className='about-pic' id='about-pic1'></img>
                <img src='/images/profile-pic2.jpg' className='about-pic' id='about-pic2'></img>
                <img src='/images/profile-pic5.jpg' className='about-pic' id='about-pic3'></img>
            </div>
            <p className='section-subtitle' id='about-subtitle'>
            I am a front-end web developer passionate about bringing ideas to life using web technologies. I am proficient in the tools of the modern web, including React, Node.js, and Express. I am a highly motivated self-starter, and I enjoy tackling challenging problems. I have a proven track record of designing and implementing production applications across several different technology stacks that have been used by businesses and individuals to solve real-world problems.
                <br />
            </p>
            <p className='section-subtitle' id='about-subtitle2'>
              Aside from coding, I enjoy playing chess, guitar, and basketball. I have also been exploring the beautiful Pacific Northwest since I moved here in May of 2019.
            </p>
            <p className='section-subtitle' id='about-subtitle3'>
            Prior to becoming a web developer, I attended Indiana State University and graduated with a degree in Physical Education, but ultimately decided that the path of technology and web solutions was a better fit for me.
            </p>
            <div className='about-listContainer'>
                <div>
                    <p className='about-subheading'>
                        Languages and Frameworks:
                    </p>
                    <p className='about-list'>
                        React<br />
                        Redux<br />
                        Node.js<br />
                        Express<br />
                        Typescript<br />
                        HTML<br />
                        CSS<br />
                        SASS<br />
                        Javascript<br />
                        Material-UI<br />
                        Bootstrap<br />
                        Testing (Jasmine, Karma)<br />
                    </p>
                </div>
                <div>
                    <p className='about-subheading'>
                        Dev Tools:
                    </p>
                    <p className='about-list'>
                        Webpack<br />
                        Babel<br />
                        Git and Github<br />
                        Command Line/Terminal<br />
                        Heroku<br />
                        Google Domains<br />
                        Chrome Developer Tools<br />
                    </p>
                </div>
            </div>
            <div className='about-listContainer'>
                <div>
                    <p className='about-subheading'>
                        Courses and Certificates:
                    </p>
                    <p className='about-list'>
                        Team Treehouse - Front-End Web Development Certificate<br />
                        Udemy - The Complete React Web Developer Course (With Redux)<br />
                        Udemy - The Complete Javascript Course 2018<br />
                        Udemy - The Complete Node.js Developer Course<br />
                        Udemy - Understanding Typescript<br />
                        Udemy - Bootstrap 4 From Scratch<br />
                        Udemy - Ultimate CSS Grid Course<br />
                    </p>
                </div>
            </div>
        </div>
        <hr />
    </div>
  );
}

export default About;