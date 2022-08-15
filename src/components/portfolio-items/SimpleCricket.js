import React from 'react';

const SimpleCricket = () => {
    return (
        <div className='portfolio-portfolioItem'>
            <div className='portfolio-portfolioItemText' id='portfolio-portfolioSiteText'>
                <h2 className='portfolio-portfolioItemTitle'>Cricket Tracker</h2>
                <p>
                    Cricket-Tracker is a web application that tracks your score in Cricket, a popular version of darts.
                    React and Redux with hooks are implemented in this project as well as the preprocessor, SCSS to create a clean and stylish format to ensure you stay on target.
                </p>
                <div className='portfolio-portfolioButtonContainer'>
                    <div className='portfolio-portfolioButton'>
                        <a href='https://miwaro.github.io/cricket-tracker/' className='button' target='blank'>Explore The App</a>
                    </div>
                    <div className='portfolio-portfolioButton'>
                        <a href='https://protected-plateau-24730.herokuapp.com/' className='button' target='blank'>Previous Version</a>
                    </div>
                    <div className='portfolio-portfolioButton'>
                        <div className='portfolio-portfolioButton'>
                            <a href='https://github.com/miwaro/cricket-tracker' className='button' target='blank'>View Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id='portfolio-loaderGalleryImage'>
                <a href='https://miwaro.github.io/cricket-tracker/' target='blank'>
                    <img
                        src='/images/cricketTracker.png'
                        className='portfolio-screenshot'
                        rel='noopener noreferrer'
                        alt='cricket-tracker'
                        width='600'
                        height='380'
                    >
                    </img>
                </a>
            </div>
        </div>
    );
}

export default SimpleCricket;

