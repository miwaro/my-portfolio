import React from 'react';


const Ringtones = () => {
    return (
        <div className='portfolio-portfolioItem'>

            <div className='portfolio-portfolioItemText' id='portfolio-portfolioSiteText'>
                <h2 className='portfolio-portfolioItemTitle'>Phone Phonics</h2>
                <p>I created Phone Phonics as a website hub to download free ringtones and text tones.
                The website currently features tracks produced by myself and my peers, with the capability to expand its library globally.
            </p>
                <div className='portfolio-portfolioButtonContainer'>
                    <div className='portfolio-portfolioButton'>
                        <a href='https://my-tones.herokuapp.com/' className='button' target='blank'>Explore The App</a>
                    </div>
                    <div className='portfolio-portfolioButton'>
                        <div className='portfolio-portfolioButton'>
                            <a href='https://github.com/miwaro/phone-phonics' className='button' target='blank'>View Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='portfolio-portfolioItemImage' id='portfolio-blindsTrackerImage'>
                <a href='https://my-tones.herokuapp.com/' target='blank'>
                    <img src='/images/ringtones.png' className='portfolio-screenshot'
                        rel='noopener noreferrer' alt='Songwriting-App' width='600' height='380'>
                    </img>
                </a>
            </div>
        </div>
    );
}

export default Ringtones;

