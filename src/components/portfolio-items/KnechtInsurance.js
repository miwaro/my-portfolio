import React from 'react';

const KnechtInsurance = () => {
    return (
        <div className='portfolio-portfolioItem'>
            <div className='portfolio-portfolioItemImage' id='portfolio-blindsTrackerImage'>
                <a href='https://knechtinsurance.com' target='blank'>
                    <img
                        src='/images/knecht-insurance.png'
                        className='portfolio-screenshot'
                        rel='noopener noreferrer'
                        alt='Songwriting-App'
                        width='600'
                        height='380'>
                    </img>
                </a>
            </div>
            <div className='portfolio-portfolioItemText' id='portfolio-blindsTrackerText'>
                <h2 className='portfolio-portfolioItemTitle'>Knecht Insurance</h2>
                <p>This is a modern website I built for an insurance broker utilizing HTML, CSS, JavaScript, and NodeJS.
                The client requested the inclusion of a customer contact form to enable prospective customers to request a service quote.
                To accomplish this, I powered the contact form with a NodeJS backend that seamlessly integrates with Gmail's API.
            </p>
                <div className='portfolio-portfolioButtonContainer'>
                    <div className='portfolio-portfolioButton'>
                        <a href='https://knechtinsurance.com/' className='button' target='blank'>Explore The App</a>
                    </div>
                    <div className='portfolio-portfolioButton'>
                        <a href='https://github.com/miwaro/knecht-insurance' className='button' target='blank'>Front-End Code</a>
                    </div>
                    <div className='portfolio-portfolioButton'>
                        <a href='https://github.com/miwaro/emailer-api' className='button' target='blank'>Back-End Code</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KnechtInsurance;