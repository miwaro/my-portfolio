import React from 'react';


const Ringtones = () => {
  return (
    <div className='portfolio-portfolioItem'>
        <div className='portfolio-portfolioItemImage' id='portfolio-blindsTrackerImage'>
            <a href='https://my-tones.herokuapp.com/' target='blank'><img src='/images/ringtones.png' className='portfolio-screenshot'></img></a>
        </div>
        <div className='portfolio-portfolioItemText' id='portfolio-portfolioSiteText'>
            <h2 className='portfolio-portfolioItemTitle'>Phone Phonics</h2>
            <p>Phone Phonics is place where you can download free ringtones and texts.  
                The sounds are ones that I or my friends have produced and additional links are provided for their personal music. </p>
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
    </div>
  );
}

export default Ringtones;

