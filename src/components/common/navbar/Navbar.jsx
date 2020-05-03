import React from 'react';

import './Navbar.css';

function Navbar() {
  return (
    <section className="navigation-bar">
      <section className="navigation-logo">
        HM
      </section>
      <section className="navigation-buttons">
        <section className="navigation-button">
          Home
        </section>
        <section className="navigation-button">
          Blog
        </section>
        <section className="navigation-button">
          Portfolio
        </section>
      </section>
    </section>
  );
}

export default Navbar;
