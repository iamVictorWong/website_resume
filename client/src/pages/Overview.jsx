import { useEffect, useState } from 'react';// Import the CSS file

const Overview = () => {
  const [overview, setOverview] = useState({});

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then(response => response.json())
      .then(data => setOverview(data));
  }, []);

  return (
    <div className="overview-container">
      <div className="content-area">
        <div className="information">
          <h1>{overview.name}</h1>
          <p>{overview.summary}</p>
          {overview.email && (
            <div>
              <h3>Contact Information</h3>
              <p>Email: {overview.email}</p>
            </div>
          )}
          {overview.linkedin && (
            <div>
              <h3>Social Links</h3>
              <p>
                LinkedIn: <a href={`https://${overview.linkedin}`} target="_blank" rel="noopener noreferrer">{overview.linkedin}</a>
              </p>
            </div>
          )}
          {overview.github && (
            <div>
              <p>
                GitHub: <a href={overview.github} target="_blank" rel="noopener noreferrer">{overview.github}</a>
              </p>
            </div>
          )}
        </div>
        <div className="image-container">
          {overview.icon_img && <img src={overview.icon_img} alt="Profile" className="overview-icon" />}
        </div>
      </div>
    </div>
  );
};

export default Overview;