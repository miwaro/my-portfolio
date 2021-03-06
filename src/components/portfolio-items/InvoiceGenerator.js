import React from 'react';


const InvoiceGenerator = () => {
    return (
        <div className='portfolio-portfolioItem'>

            <div className='portfolio-portfolioItemText' id='portfolio-portfolioSiteText'>
                <h2 className='portfolio-portfolioItemTitle'>Invoice Generator</h2>
                <p>
                    Here is a prototype that I constructed for a client launching a small business geared toward helping freelance developers.
                    Users can create an invoice and generate a printable PDF.
                    The app includes a wide array of options including the ability to calculate discounts or taxes.
                    Additionally, the user can customize the theme as well as append notes to the document.
            </p>
                <div className='portfolio-portfolioButtonContainer'>
                    <div className='portfolio-portfolioButton'>
                        <a href='https://form-tree-invoice-generator.herokuapp.com/' className='button' target='blank'>Explore The App</a>
                    </div>
                    <div className='portfolio-portfolioButton'>
                        <div className='portfolio-portfolioButton'>
                            <a href='https://form-tree-invoice-generator.herokuapp.com/' className='button' target='blank'>View Source Code</a>
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

