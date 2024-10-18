const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      degree: "Computer Programming",
      institution:
        "Humber Polytechnic Institute of Technology and Advanced Learning, Toronto, Ontario",
      year: "2023-2025",
      achievements: [
        "Dean List - Fall 2023",
        "Dean List - Winter 2024",
      ],
      cgpa: "93.9/100",
      school_img: "http://localhost:8000/images/school_img.png",
    },
    {
      degree: "BBA (HONS) International Shipping and Transport Logistics",
      institution: "The Hong Kong Polytechnic University, Hong Kong",
      year: "2015-2019",
      achievements: [
        "Capstone Project: graded: A+, CASE STUDY - To improve the sustainability of a factory by enhancing operation efficiency.",
      ],
      cgpa: "3.08/4.0",
      school_img: "http://localhost:8000/images/school_img.png",
    },
  ]);
});

module.exports = router;
