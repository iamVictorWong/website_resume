import { useEffect, useState } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    fetch('http://localhost:8000/skills')
      .then(response => response.json())
      .then(data => setSkills(data));
  }, []);

  return (
    <div className="skills-container">
      <div className="content-area">
        <div className="information">
          <h2>Skills</h2>
          {skills.technical_skills && (
            <div className="skills-section">
              <h3>Technical Skills</h3>
              <h4>Programming Languages</h4>
              <ul>
                {skills.technical_skills.programming_languages.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <h4>Web Development</h4>
              <ul>
                {skills.technical_skills.web_development.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <h4>Software Tools</h4>
              <ul>
                {skills.technical_skills.software_tools.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <h4>Operating Systems</h4>
              <ul>
                {skills.technical_skills.operating_systems.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
          {skills.software_development && (
            <div className="skills-section">
              <h3>Software Development</h3>
              <ul>
                {skills.software_development.software_development.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="image-container">
        <img src={"http://localhost:8000/images/pl_img.png"} alt="Profile" className="pl-icon" />
        </div>
      </div>
    </div>
  );
};

export default Skills;