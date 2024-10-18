import { useEffect, useState } from "react";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/education")
      .then((response) => response.json())
      .then((data) => setEducation(data));
  }, []);

  return (
    <div className="education-container">
      <div className="content-area">
        <div className="information">
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <h3>{edu.degree}</h3>
              <p>
                <strong>Institution:</strong> {edu.institution}
              </p>
              <p>
                <strong>Year:</strong> {edu.year}
              </p>
              <p>
                <strong>CGPA:</strong> {edu.cgpa}
              </p>
              {edu.achievements && edu.achievements.length > 0 && (
                <div>
                  <h4>Achievements:</h4>
                  <ul>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="image-container">
          <img src={"http://localhost:8000/images/school_img.png"} alt="Profile" className="overview-icon" />
        </div>
      </div>
    </div>
  );
};

export default Education;
