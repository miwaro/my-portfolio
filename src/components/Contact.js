import React from 'react';

const Contact = () => {
  return (
    <div className='contact-contentContainer'  id="contact">
      <h1 className='section-title'>Contact</h1>
      <p>Interested in working together? Contact me directly by clicking button below!</p>
          <div className='contact-contactButton'>
            <a href='mailto:mikerooze12@gmail.com' className='button'>Hire Me</a>
          </div>
            <a href='https://www.linkedin.com/in/michael-rooze-b8b356108/' target='blank'>
              <div className="linked">
              <p>Connect with me on LinkedIn</p>
              <img src='images/linked-in.png'></img>
              </div>
            </a>
            <a href='https://github.com/miwaro' target='blank'>
              <div className="git">
                <p>Check out my repos</p>
                <img src='images/github.png' className='contact-githubImage'></img>
              </div>  
            </a>  
      </div>
  );
}

export default Contact;