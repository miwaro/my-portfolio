import React from 'react';

const SimpleCricket = () => {
  return (
    <div className='portfolio-portfolioItem'>
        <div className='portfolio-portfolioItemText' id='portfolio-portfolioSiteText'>
            <h2 className='portfolio-portfolioItemTitle'>Simple Cricket</h2>
            <p>This website allows you to track the scores in a popular version of the dart game, Cricket. 
                React and Redux with hooks are implemented in this project to create a clean and stylish format to make sure you stay on target.         
            </p>
            <div className='portfolio-portfolioButtonContainer'>
                <div className='portfolio-portfolioButton'>
                        <a href='https://protected-plateau-24730.herokuapp.com/' className='button' target='blank'>Explore The App</a>
                    </div>
                <div className='portfolio-portfolioButton'>
                    <div className='portfolio-portfolioButton'>
                        <a href='https://github.com/miwaro/bar-darts' className='button' target='blank'>View Source Code</a>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='portfolio-portfolioItemImage'>
            <a href='#'  target='blank'><img src='/images/simple-cricket.png' className='portfolio-screenshot'></img></a>
        </div>
    </div>
  );
}

export default SimpleCricket;