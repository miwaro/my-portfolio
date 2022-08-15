import React from 'react';

const ChanceChess = () => {
    return (
        <div className='portfolio-portfolioItem'>
            <div className='portfolio-portfolioItemImage' id='portfolio-blindsTrackerImage'>
                <a href='https://miwaro.github.io/chance-chess/' target='blank'>
                    <img
                        src='/images/ChanceChess.png'
                        className='portfolio-screenshot'
                        rel='noopener noreferrer'
                        alt='chance-chess-app'
                        width='600'
                        height='380'>
                    </img>
                </a>
            </div>
            <div className='portfolio-portfolioItemText' id='portfolio-blindsTrackerText'>
                <h2 className='portfolio-portfolioItemTitle'>Chance Chess</h2>
                <p>
                    This is an online multiplayer chess game I invented where moves are dictated by cards drawn from a deck.
                    The front end consists of React, Redux, the Chess.js library, and SCSS. The backend utilizes the WebSocket API.
                    Currently, the server is still under construction, but will be updated soon.
                </p>
                <div className='portfolio-portfolioButtonContainer'>
                    <div className='portfolio-portfolioButton'>
                        <a href='https://miwaro.github.io/chance-chess/' className='button' target='blank'>Explore The App</a>
                    </div>
                    <div className='portfolio-portfolioButton'>
                        <div className='portfolio-portfolioButton'>
                            <a href='https://github.com/miwaro/chance-chess' className='button' target='blank'>View Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChanceChess;