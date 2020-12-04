import React from 'react';


const InvoiceGenerator = () => {
  return (
    <div className='portfolio-portfolioItem'>
        <div className='portfolio-portfolioItemImage' id='portfolio-blindsTrackerImage'>
            <a href='https://invoice-generation-app.herokuapp.com/' target='blank'><img src='/images/invoice.png' height="475" width="400" className='portfolio-screenshot'></img></a>
        </div>
        <div className='portfolio-portfolioItemText' id='portfolio-portfolioSiteText'>
            <h2 className='portfolio-portfolioItemTitle'>Invoice Generator</h2>
            <p>Here is a prototype that I constructed for a client who is starting a small business geared towards helping out freelance developers.  
                Users can fill out a form which automatically populates the fields in the invoice.  
                Many options are included such as calculating a discount or taxes.  You can customize the theme, add notes, and much more.       
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
    </div>
  );
}

export default InvoiceGenerator;

