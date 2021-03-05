import React from 'react';

import KnechtInsurance from './portfolio-items/KnechtInsurance';
import SimpleCricket from './portfolio-items/SimpleCricket';
import PortfolioPage from './portfolio-items/PortfolioPage';
import InvoiceGenerator from './portfolio-items/InvoiceGenerator';
import Songwriter from './portfolio-items/Songwriter';
import Ringtones from './portfolio-items/Ringtones';
import MadHoney from './portfolio-items/MadHoney';

const Portfolio = () => {
  return (
    <div className='portfolio-contentContainer' id="projects">
      <div>
        <h1 className='section-title'>MY PROJECTS</h1>
        <p className='section-subtitle'>
          Below I've shared various projects which demonstrate my proficiency as a front-end web developer.
          I've provided the links to each application as well as their corresponding Github repositories.
          Please feel free to explore both the applications and their source code!
            </p>
        <hr />
      </div>
      <hr />
      <InvoiceGenerator />
      <hr />
      <KnechtInsurance />
      <hr />
      <SimpleCricket />
      <hr />
      <Songwriter />
      <hr />
      <Ringtones />
      <hr />
      <MadHoney />
      <hr />
      <PortfolioPage />
      <hr />
    </div>
  );
}

export default Portfolio;