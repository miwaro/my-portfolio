import React from 'react';

const Beaverton = () => {
    return (
        <div className='portfolio-portfolioItem'>

            <div className='portfolio-portfolioItemText' id='portfolio-blindsTrackerText'>
                <h2 className='portfolio-portfolioItemTitle'>Beaverton Toyota</h2>
                <p>This is a web application built primarily with the React library, utilizing Redux for global state management.
                    It provides multiple features and tools for handling the management of car sales in the automotive retail industry.
                    (The project is not public-facing but I have attached the company's website for reference.)
                </p>
                <div className='portfolio-portfolioButtonContainer'>
                    <div className='portfolio-portfolioButton'>
                        <a href='https://www.beavertontoyota.com/' className='button' target='blank'>Explore The App</a>
                    </div>
                </div>
            </div>
            <div className='portfolio-portfolioItemImage' id='portfolio-blindsTrackerImage'>
                <a href='https://www.beavertontoyota.com/' target='blank'>
                    <img
                        src='/images/Beaverton.png'
                        className='portfolio-screenshot'
                        rel='noopener noreferrer'
                        alt='beaverton-app'
                        width='600'
                        height='380'>
                    </img>
                </a>
            </div>
        </div>
    );
}

export default Beaverton;