import React from 'react';

import KnechtInsurance from './portfolio-items/KnechtInsurance';
import SimpleCricket from './portfolio-items/SimpleCricket';
import PortfolioPage from './portfolio-items/PortfolioPage';
import InvoiceGenerator from './portfolio-items/InvoiceGenerator';
import Songwriter from './portfolio-items/Songwriter';
import Ringtones from './portfolio-items/Ringtones';

const Portfolio = () => {
  return (
    <div className='portfolio-contentContainer' id="projects">
        <div>
            <h1 className='section-title'>MY PROJECTS</h1>
            <p className='section-subtitle'>
                Below are some of the projects I've completed. I've included links to the applications themselves, 
                as well as links to the Github repository for each app. Please feel free to explore both the applications and their source code!
            </p>
            <hr />
        </div>
        <KnechtInsurance />
        <hr />
        <SimpleCricket />
        <hr />
        <Ringtones />
        <hr />
        <InvoiceGenerator />
        <hr />
        <Songwriter />
        <hr />
        <PortfolioPage />
        <hr />
    </div>
  );
}

export default Portfolio;