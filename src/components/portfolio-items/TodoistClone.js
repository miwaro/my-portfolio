import React from 'react';


const SimpleCricket = () => {
  return (
    <div className='portfolio-portfolioItem'>
        <div className='portfolio-portfolioItemImage' id='portfolio-blindsTrackerImage'>
            <a href='https://knechtinsurance.com' target='blank'><img src='/images/todoist-preview.png' className='portfolio-screenshot'></img></a>
        </div>
        <div className='portfolio-portfolioItemText' id='portfolio-portfolioSiteText'>
            <h2 className='portfolio-portfolioItemTitle'>Todoist (Clone)</h2>
            <p>This is NOT your typical to-do application.  This fully responsive app takes advantage of React Custom Hooks and Context and is styled with SCSS using the BEM naming methodology.  Take a look at the code!
            </p>
            <div className='portfolio-portfolioButtonContainer'>
                <div className='portfolio-portfolioButton'>
                        <a href='https://protected-plateau-24730.herokuapp.com/' className='button' target='blank'>Explore The App</a>
                    </div>
                <div className='portfolio-portfolioButton'>
                    <div className='portfolio-portfolioButton'>
                        <a href='https://github.com/miwaro/todoist-tut' className='button' target='blank'>View Source Code</a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  );
}

export default SimpleCricket;

