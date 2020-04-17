import React, { Fragment } from 'react';

const Footer = () => {
  return (
      <div className='footer-contentContainer'>
            <a href='https://www.linkedin.com/in/michael-rooze-b8b356108/' target='blank'><img src='images/linked-in.png'></img></a>
        
            <a href='https://github.com/miwaro' target='blank'><img src='images/github.png' className='contact-githubImage'></img></a>

        <p className='footer-text'>
             &copy; 2020
        </p>
        </div>

    
  );
}

export default Footer;