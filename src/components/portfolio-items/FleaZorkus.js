import React from 'react';

const FleaZorkus = () => {
    return (
        <div className='portfolio-portfolioItem'>
            <div className='portfolio-portfolioItemImage' id='portfolio-blindsTrackerImage'>
                <a href='https://thefleazorkus.com' target='blank'>
                    <img
                        src='/images/theFleaZorkus.png'
                        className='portfolio-screenshot'
                        rel='noopener noreferrer'
                        alt='the-Flea-Zorkus-App'
                        width='600'
                        height='380'>
                    </img>
                </a>
            </div>
            <div className='portfolio-portfolioItemText' id='portfolio-blindsTrackerText'>
                <h2 className='portfolio-portfolioItemTitle'>The Flea Zorkus</h2>
                <p>
                    This is a web application I constructed in Wordpress. The featured artist, Ken Zell, is an industrial artist based out of Portland, Oregon. The site features
                    categories containing photographs of his work, videos, and a contact form.
                </p>
                <div className='portfolio-portfolioButtonContainer'>
                    <div className='portfolio-portfolioButton'>
                        <a href='https://thefleazorkus.com/' className='button' target='blank'>Explore The App</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FleaZorkus;