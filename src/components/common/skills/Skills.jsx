import React from 'react';
import Skill from './Skill';
import {
  Python, Java, JavaScript, CSharpe, AWS, ReactJS,
  Redux, Photoshop, PermierPro, Github, Blender,
} from '../../../media/icons';

import './Skills.css';

function Skills() {
  return (
    <>
      <span className="skills-title">Skills</span>
      <section className="skills-section">


        <section className="skills-skill">
          <section className="skill-title">
            Languages
          </section>
          <Skill icon={Python} text="Python" />
          <Skill icon={Java} text="Java" />
          <Skill icon={JavaScript} text="JavaScript" />
          <Skill icon={CSharpe} text="C#" />
        </section>

        <section className="skills-skill">
          <section className="skill-title">
            Frameworks
          </section>
          <Skill icon={AWS} text="AWS" />
          <Skill icon={ReactJS} text="React JS" />
          <Skill icon={ReactJS} text="React Native" />
          <Skill icon={Redux} text="Redux" />
        </section>

        <section className="skills-skill">
          <section className="skill-title">
            Other
          </section>
          <Skill icon={Photoshop} text="Photoshop" />
          <Skill icon={PermierPro} text="Premier Pro" />
          <Skill icon={Github} text="Git" />
          <Skill icon={Blender} text="Blender" />
        </section>

      </section>
    </>
  );
}

export default Skills;
