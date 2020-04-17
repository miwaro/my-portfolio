import React from 'react';

const Contact = () => {
  return (
    <div className='contact-contentContainer'>
        <h1 className='section-title'>Contact</h1>
        <p className='contact-subtitle'>
        Interested in working together? Contact me directly by clicking the "Hire Me" button!
        </p>
        <div className='portfolio-portfolioButtonContainer'>
            <div className='contact-contactButton'>
                <a href='mailto:mikerooze12@gmail.com' className='button'>Hire Me</a>
            </div>
        </div>
    </div>
  );
}

export default Contact;