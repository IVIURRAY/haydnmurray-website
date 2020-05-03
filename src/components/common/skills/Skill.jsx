import React from 'react';
import { string } from 'prop-types';

import './Skill.css';

function Skill(props) {
  const { icon, text } = props;
  return (
    <section className="skill-container">
      <img className="skill-icon" src={icon} alt="skill-icon" />
      <span className="skill-text">
        {text}
      </span>
    </section>
  );
}

Skill.propTypes = {
  icon: string.isRequired,
  text: string.isRequired,
};

export default Skill;
