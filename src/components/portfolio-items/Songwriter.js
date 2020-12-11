import React from 'react';

const Songwriter = () => {
  return (
    <div className='portfolio-portfolioItem'>
        <div className='portfolio-portfolioItemImage' id='portfolio-blindsTrackerImage'>
            <a href='https://www.songwriting-inspirationator.com/#/progressionator' target='blank'>
                <img src='/images/songwriting.png' className='portfolio-screenshot'></img>
            </a>
        </div>
        <div className='portfolio-portfolioItemText' id='portfolio-blindsTrackerText'>
            <h2 className='portfolio-portfolioItemTitle'>Songwriting-Inspirationator</h2>
            <p>  I collaborated with a colleague of mine on this really unique project.  
                It gives songwriters a wide array of options to enhance their approach to songwriting. 
                Specific features I developed include mapping chord extensions, tooltip labeling, and SCSS styles.     
               
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
    </div>
  );
}

export default Songwriter;