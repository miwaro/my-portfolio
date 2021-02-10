import React from 'react';

const MadHoney = () => {
    return (
        <div className='portfolio-portfolioItem'>
            <div className='portfolio-portfolioItemText' id='portfolio-blindsTrackerText'>
                <h2 className='portfolio-portfolioItemTitle'>Mad Honey</h2>
                <p>
                    This is a wordpress site I made for a couple of clients in a local Portland band, Mad Honey.
                    Google analytics are installed to help track and report website traffic. Smartsupp, a customer/fan interaction chat app is also installed to help connect the clients with their fans.
                    I will also be including eCommerce for their merchandise sales.
                </p>
                <div className='portfolio-portfolioButtonContainer'>
                    <div className='portfolio-portfolioButton'>
                        <a href='https://madhoneytheband.com/' className='button' target='blank'>Explore The App</a>
                    </div>
                </div>
            </div>
            <div className='portfolio-portfolioItemImage' id='portfolio-blindsTrackerImage'>
                <a href='https://madhoneytheband.com' target='blank'>
                    <img
                        src='/images/madHoneyScreenshot.png'
                        className='portfolio-screenshot'
                        rel='noopener noreferrer'
                        alt='MadHoney-App'
                        width='600'
                        height='380'>
                    </img>
                </a>
            </div>
        </div>
    );
}

export default MadHoney;