import React from 'react';
import {
  Navbar, HaydnMurray, Skills, Portfolio,
} from './common';

import './styles/global.css';
import './App.css';

function App() {
  return (
    <section className="App">
      <Navbar />
      <HaydnMurray />
      <Skills />
      <Portfolio />
      {/* Contact Me Section */}
    </section>
  );
}

export default App;
