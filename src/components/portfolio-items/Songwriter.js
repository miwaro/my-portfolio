import React from 'react';

const Songwriter = () => {
  return (
    <div className='portfolio-portfolioItem'>
        <div className='portfolio-portfolioItemText' id='portfolio-blindsTrackerText'>
            <h2 className='portfolio-portfolioItemTitle'>songwriting-Inspirationator</h2>
            <p> Here is a project by Alex Totheroh that I added a few features too.  I would appreciate an opportunity to talk about the specific features I implemented for this really creative website.
            </p>
            <div className='portfolio-portfolioButtonContainer'>
                <div className='portfolio-portfolioButton'>
                    <a href='https://www.songwriting-inspirationator.com/#/progressionator' className='button' target='blank'>Explore The App</a>
                </div>
                <div className='portfolio-portfolioButton'>
                    <a href='https://github.com/alextotheroh/songwriting-inspirationator' className='button' target='blank'>Front-End Code</a>
                </div>
                <div className='portfolio-portfolioButton'>
                    <a href='https://github.com/miwaro/emailer-api' className='button' target='blank'>Back-End Code</a>
                </div>
                
            </div>
        </div>
        <div className='portfolio-portfolioItemImage' id='portfolio-blindsTrackerImage'>
            <a href='https://www.songwriting-inspirationator.com/#/progressionator' target='blank'>
                <img src='/images/songwriting.png' className='portfolio-screenshot'></img>
            </a>
        </div>
    </div>
  );
}

export default Songwriter;