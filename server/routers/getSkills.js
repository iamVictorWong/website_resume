const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    technical_skills: {
      programming_languages: [
        "Java",
        "JavaScript",
        "SQL",
        "MySQL",
        "Python",
        "C++",
      ],
      web_development: [
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "Express.js",
        "Bootstrap",
      ],
      software_tools: ["Git", "GitHub", "VS Code", "Android Studio"],
      operating_systems: ["Windows", "Linux"],
    },
    software_development: {
      software_development: [
        "Software Development Life Cycle (SDLC)",
        "Agile Methodology",
        "Scrum",
        "Kanban",
        "Waterfall Model",
      ],
    },
    databases: { databases: ["MySQL", "MongoDB", "Oracle"] },
    academic_projects: {
      academic_projects: [{
            title: "Online Bookstore project",
            description: "Migrating from Vanilla.JS to Node.JS. Set up own server by MongoDB. For front-end server with React library for front-end server and Express framework for backend server.",
            },
            {
            title: "Traveling Agency Booking Platform",
            description: "Applied data validation logics by JavaScript, fetch API for details of flight tickets such as departure date and location. Used Bootstrap to optimize the UI design and UX.",
            },
            {
            title: "POS receipt printing system (Java)",
            description: "Showcased the encapsulation, inheritance and polymorphism logics.",
            },
        ],
      },
    // cloud_services: {cloud_services: ["AWS", "Azure", "Google Cloud Platform"]},
    other: ["MS Office", "Photoshop", "Illustrator", "JIRA", "Canva"],
    soft_skills: [
      "Language: Mandarin, Cantonese, and English",
      "Strong Communication",
      "Team Collaboration and Leadership",
      "Analytical thinking",
      "Prioritization",
      "Strategic analysis",
      "Workflow optimization",
      "Self-motivated",
    ],
  });
});

module.exports = router;
