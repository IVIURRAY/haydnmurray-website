import React from 'react';
import PortfolioTemplate from './PortfolioTemplate';

import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <span className="portfolio-title">Portfolio</span>
      <PortfolioTemplate title="Francine Alaxandra" />
      <PortfolioTemplate title="A R T &nbsp;  M A R T" />
      <PortfolioTemplate title="Something Else" />
    </section>
  );
}

export default Portfolio;
