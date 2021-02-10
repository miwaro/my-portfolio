import React from 'react';

const Skills = () => {
    return (
        <div id="skills">
            <div>
                <h2 className='skills-title'>Skills</h2>
            </div>

            <div className='about-listContainer'>
                <div className="frames">
                    <p className='about-subheading'>
                        Frameworks &amp; <br></br>Languages
                    </p>
                    <p className='about-list'>
                        <li>React<br /></li>
                        <li>Redux<br /></li>
                        <li>HTML5<br /></li>
                        <li>CSS/SCSS<br /></li>
                        <li>Javascript<br /></li>
                        <li>Typescript<br /></li>
                        <li>NodeJS<br /></li>
                        <li>Express<br /></li>
                        <li>Material-UI<br /></li>
                        <li>Bootstrap<br /></li>
                        <li>Wordpress<br /></li>
                        <li>Jest<br /></li>
                    </p>
                </div>

                <div className="tools">
                    <p className='about-subheading'>
                        Dev-Tools
                    </p>
                    <li>Webpack<br /></li>
                    <li>Babel<br /></li>
                    <li>Git and Github<br /></li>
                    <li>Bash<br /></li>
                    <li>Heroku<br /></li>
                    <li>Google Domains<br /></li>
                    <li>Chrome Dev-Tools<br /></li>
                </div>

                <div className="certs">
                    <p className='about-subheading'>
                        Courses &amp; Certificates
                    </p>
                    <li>Team Treehouse - Front-End Web-Dev Certificate<br /></li>
                    <li>Udemy - The Complete React Web Dev Course<br /></li>
                    <li>Udemy - The Complete Javascript Course 2018-2020<br /></li>
                    <li>Udemy - Understanding Typescript<br /></li>
                    <li>Udemy - The Complete Node.js Developer Course</li>
                    <li>Udemy - Bootstrap 4 From Scratch<br /></li>
                    <li>Udemy - Ultimate CSS Grid Course<br /></li>
                </div>
                <div className="logos">
                    <img src='images/react.png' className='logos-img'></img>
                    <img src='images/redux.png' className='logos-img'></img>
                    <img src='images/html.webp' className='logos-img'></img>
                    <img src='images/js.png' className='logos-img'></img>
                    <img src='images/typescript.webp' className='logos-img'></img>
                    <img src='images/material.png' className='logos-img'></img>
                    <img src='images/bootstrap-stack.png' className='logos-img'></img>
                    <img src='images/scss.jpg' className='logos-img'></img>
                    <img src='images/jest.png' className='logos-img'></img>
                    <img src='images/express.png' className='logos-img'></img>
                </div>
            </div>
            <hr></hr>
        </div>
    )
};

export default Skills;



