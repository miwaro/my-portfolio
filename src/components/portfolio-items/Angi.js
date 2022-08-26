import React from 'react';

const Angi = () => {
    return (
        <div className='portfolio-portfolioItem'>
            <div className='portfolio-portfolioItemImage' id='portfolio-blindsTrackerImage'>
                <a href='https://www.angi.com/' target='blank'>
                    <img
                        src='/images/Angi.png'
                        className='portfolio-screenshot'
                        rel='noopener noreferrer'
                        alt='angi-app'
                        width='600'
                        height='380'>
                    </img>
                </a>
            </div>
            <div className='portfolio-portfolioItemText' id='portfolio-blindsTrackerText'>
                <h2 className='portfolio-portfolioItemTitle'>Angi (formerly Angie's List)</h2>
                <p>This is a web application where service providers can manage
                    jobs for their customers by adding notes, communicate with clients via a chat service, as well as post progress pictures.
                    (The project is not public-facing but I have attached the company's website for reference.)
                </p>
                <div className='portfolio-portfolioButtonContainer'>
                    <div className='portfolio-portfolioButton'>
                        <a href='https://www.angi.com/' className='button' target='blank'>Explore The App</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Angi;