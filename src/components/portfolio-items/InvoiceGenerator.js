import React from 'react';


const InvoiceGenerator = () => {
  return (
    <div className='portfolio-portfolioItem'>
        <div className='portfolio-portfolioItemText' id='portfolio-portfolioSiteText'>  
            <h2 className='portfolio-portfolioItemTitle'>Invoice Generator</h2>
            <p>
                Here is a prototype that I constructed for a client launching a small business geared toward freelance developers. 
                Through the app, users can fill out a form that automatically populates the required invoice fields.  
                The app includes a wide array of options including the ability to calculate discounts or taxes.  
                I developed additional customizations that allow the user to personalize the theme, add notes, and much more.      
            </p>
            <div className='portfolio-portfolioButtonContainer'>
                <div className='portfolio-portfolioButton'>
                        <a href='https://invoice-generation-app.herokuapp.com/' className='button' target='blank'>Explore The App</a>
                    </div>
                <div className='portfolio-portfolioButton'>
                    <div className='portfolio-portfolioButton'>
                        <a href='https://github.com/miwaro/invoice-generator' className='button' target='blank'>View Source Code</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='portfolio-portfolioItemImage' id='portfolio-blindsTrackerImage'>
            <a href='https://invoice-generation-app.herokuapp.com/' target='blank'>
                <img src='/images/Invoice.png' className='portfolio-screenshot'
                     rel='noopener noreferrer' alt='Songwriting-App' width='600' height='380'>
                </img>
            </a>
        </div>
    </div>
  );
}

export default InvoiceGenerator;

