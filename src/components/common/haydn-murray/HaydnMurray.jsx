import React from 'react';
import { LinkedIn, Github } from '../../../media/icons';

import './HaydnMurray.css';

function HaydnMurray() {
  return (
    <section className="haydn-murray">
      <section className="haydn-murray-info">
        <section className="haydn-murray-name">
          Haydn Murray
        </section>
        <section className="haydn-murray-description">
          I&apos;m a software engineer based in London, England.
        </section>
        <section className="haydn-murray-icons">
          <a className="haydn-murray-icon-container" href="https://www.linkedin.com/in/haydnmurray" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn Icon" className="haydn-murray-icon" />
          </a>
          <a href="https://github.com/IVIURRAY" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="Github Icon" className="haydn-murray-icon" />
          </a>
        </section>
      </section>
      <section className="haydn-murray-image" />
    </section>
  );
}

export default HaydnMurray;
