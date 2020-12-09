import React from 'react';

const Contact = () => {
  return (
    <div className='contact-contentContainer'  id="contact">
        <h1 className='section-title'>Contact</h1>
        
        <div className='contact-subtitle'>
          <p >
          Interested in working together? Contact me directly by clicking button below!
          </p>
          <div className='portfolio-portfolioButtonContainer'>
            <div className='contact-contactButton'>
                <a href='mailto:mikerooze12@gmail.com' className='button'>Hire Me</a>
            </div>
          </div>
        </div>
        

            <div className="linked">
              <p>Connect with me on LinkedIn</p>
              <a href='https://www.linkedin.com/in/michael-rooze-b8b356108/' target='blank'>
                <img src='images/linked-in.png'></img>
              </a>
            </div>

            <div className="git">
              <p>Check out my repos</p>
              <a href='https://github.com/miwaro' target='blank'>
                <img src='images/github.png' className='contact-githubImage'></img>
              </a>
            </div>  
        </div>
  );
}

export default Contact;