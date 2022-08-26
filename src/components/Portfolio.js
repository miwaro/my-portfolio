import React from 'react';

import KnechtInsurance from './portfolio-items/KnechtInsurance';
import SimpleCricket from './portfolio-items/SimpleCricket';
import PortfolioPage from './portfolio-items/PortfolioPage';
import InvoiceGenerator from './portfolio-items/InvoiceGenerator';
import Songwriter from './portfolio-items/Songwriter';
import Ringtones from './portfolio-items/Ringtones';
import FleaZorkus from './portfolio-items/FleaZorkus';
import ChanceChess from './portfolio-items/ChanceChess';
import Bis from './portfolio-items/BIS';
import Beaverton from './portfolio-items/Beaverton';
import Angi from './portfolio-items/Angi';

const Portfolio = () => {
  return (
    <div className='portfolio-contentContainer' id="projects">
      <div>
        <h1 className='section-title'>My Projects</h1>
        <p className='section-subtitle'>
          Below I've shared various projects which demonstrate my proficiency as a web developer.
          I've provided the links to each application as well as their corresponding GitHub repositories.
          Please feel free to explore both the applications and their source code!
        </p>
        <hr />
      </div>
      <hr />
      <Bis />
      <hr />
      <Beaverton />
      <hr />
      <Angi />
      <hr />
      <SimpleCricket />
      <hr />
      <KnechtInsurance />
      <hr />
      <InvoiceGenerator />
      <hr />
      <ChanceChess />
      <hr />
      <Ringtones />
      <hr />
      <FleaZorkus />
      <hr />
      <PortfolioPage />
      <hr />
      <Songwriter />
      <hr />
    </div>
  );
}

export default Portfolio;