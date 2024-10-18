const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    icon_img: "http://localhost:8000/images/icon_img_.jpg",
    name: "Victor Wong",
    linkedin: "linkedin.com/in/victor-wong-1520v",
    github: "https://github.com/iamVictorWong",
    email: "vicwong34@gmail.com",
    summary:
      "Seeking a summer 2024 Co-op placement for 4 months related to software development, web development, data analysis, helpdesk support and other IT related Positions.",
  });
});

module.exports = router;
