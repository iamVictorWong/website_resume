import { useEffect, useState } from 'react';

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/experience')
      .then(response => response.json())
      .then(data => setExperience(data));
  }, []);

  return (
    <div className="experience-container">
      <div className="content-area">
        <div className="information">
          <h2>Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.role}</h3>
              <p><strong>Company:</strong> {exp.company}</p>
              <p><strong>Location:</strong> {exp.location}</p>
              <p><strong>Duration:</strong> {exp.duration}</p>
              <h4>Responsibilities:</h4>
              <ul>
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
              {exp.keySkills && exp.keySkills.length > 0 && (
                <div>
                  <h4>Key Skills:</h4>
                  <ul>
                    {exp.keySkills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="image-container">
          <img src={"http://localhost:8000/images/working_img.jpg"} alt="Profile" className="overview-icon" />
        </div>
      </div>
    </div>
  );
};

export default Experience;