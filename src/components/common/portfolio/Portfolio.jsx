import React from 'react';
import PortfolioTemplate from './PortfolioTemplate';

import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <span className="portfolio-title">Portfolio</span>
      <PortfolioTemplate />
      <PortfolioTemplate />
      <PortfolioTemplate />
    </section>
  );
}

export default Portfolio;
