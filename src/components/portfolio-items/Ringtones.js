import React from 'react';


const Ringtones = () => {
  return (
    <div className='portfolio-portfolioItem'>
        <div className='portfolio-portfolioItemImage' id='portfolio-blindsTrackerImage'>
            <a href='https://my-tones.herokuapp.com/' target='blank'><img src='/images/invoice.png' height="475" width="400" className='portfolio-screenshot'></img></a>
        </div>
        <div className='portfolio-portfolioItemText' id='portfolio-portfolioSiteText'>
            <h2 className='portfolio-portfolioItemTitle'>Phone Phonics</h2>
            <p></p>
            <div className='portfolio-portfolioButtonContainer'>
                <div className='portfolio-portfolioButton'>
                        <a href='https://my-tones.herokuapp.com/' className='button' target='blank'>Explore The App</a>
                    </div>
                <div className='portfolio-portfolioButton'>
                    <div className='portfolio-portfolioButton'>
                        <a href='https://github.com/miwaro/invoice-generator' className='button' target='blank'>View Source Code</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Ringtones;

