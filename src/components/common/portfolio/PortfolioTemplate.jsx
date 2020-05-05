import React from 'react';

import './PortfolioTemplate.css';
import { string } from 'prop-types';

function PortfolioTemplate(props) {
  const { title } = props;
  return (
    <section className="portfolio-item">
      <section className="portfolio-item__image" />
      <section className="portfolio-item__info">
        <section className="portfolio-item__info-title">
          {title}
        </section>
        <section className="portfolio-item__info-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Ullam atque quidem consequatur reiciendis ad doloribus,
          architecto nulla aspernatur harum molestiae repellendus iure
          voluptates. Repellendus, voluptates rem. Velit possimus
          fuga asperiores?
        </section>
      </section>
    </section>
  );
}

PortfolioTemplate.propTypes = {
  title: string.isRequired,
};

export default PortfolioTemplate;
