const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      role: "Store Associate (Part-Time)",
      company: "Uniqlo Canada",
      location: "Toronto, Ontario",
      duration: "Jan. 2024",
      responsibilities: [
        "Analyze sales data to optimize product placement and manage multiple customer inquiries, improving efficiency and customer satisfaction through data-driven decisions.",
      ],
    },
    {
      role: "E-Commerce Operation Executive (E-Commerce Division)",
      company: "Dah Chong Hong Holdings Limited (A CITIC COMPANY)",
      location: "Hong Kong",
      duration: "Oct. 2022 - Aug. 2023",
      responsibilities: [
        "Drove a monthly sales revenue of CAD$125,000 approximately by operating multiple E-commerce platforms, including own online shops and brand D2C platform.",
        "Established an O2O operational protocol for frontline functions (stores, warehouse fulfillment and logistics) within 3 weeks, ensuring integration of digital and physical operations for 13 local stores.",
        "Located the potential items and categories and addressed potential sales losses by 8% monthly by analyzing data reports with Excel and Google Analytics, enabling daily visualization through Power BI.",
        "Boosted platform engagement by nearly 20% and 12% up in customer satisfaction ratings by enhancing of UI/UX, and collaborated with the IT team to maintain platform service excellence.",
        "Achieved a 10% increase in website traffic and a 2% rise in conversion rates through assisting digital marketing campaigns including social media content, email campaigns, SEO, SEM, and display advertising.",
      ],
      keySkills: [
        "Nosql Db",
        "PowerBI visualization",
        "project management",
        "data analysis",
        "UI/UX enhancement",
        "collaboration with IT teams",
      ],
    },
    {
      role: "E-commerce Executive",
      company: "GREEN MONDAY",
      location: "Hong Kong",
      duration: "Dec. 2021 - Oct. 2022",
      responsibilities: [
        "Achieved CAD $170,000 in revenue for a seasonal campaign through targeted marketing strategies, resulting in a 25% increase in sales compared to the previous year.",
        "Led and managed seasonal campaign projects and achieved a 95% on-time delivery rate and surpassed sales projections by 10% approximately.",
        "Conducted dashboard and customer data analysis using tools such as Google Analytics and MySQL from Oracle NetSuite. Identified key insights leading to a 0.5-0.8% increase in website conversion rates and a 2-4% improvement in customer retention through targeted marketing strategies monthly.",
        "Managed SEM to boost conversion rates by 2-4% and ROI by 9%. Developed impactful Facebook and IG Ads, increasing engagement by 12% and growing follower base by 10%.",
        "Actively participated in the revamping project of the E-shop website and APP, accelerating User Acceptance Testing (UAT) and enhancing UI/UX.",
      ],
      keySkills: [
        "Google Analytics",
        "MySQL",
        "project management",
        "digital marketing (SEM)",
        "UI/UX testing",
        "GA4",
      ],
    },
    {
      role: "E-commerce Operation Executive (Project-based)",
      company: "BAOZUN HONGKONG LIMITED",
      location: "Hong Kong",
      duration: "Sept. 2021 - Nov. 2021",
      responsibilities: [
        "Launched 1,500+ products on Shopee and Lazada in the APAC market, completing the project within Q3.",
        "Facilitated communication between brand representatives and platforms, enhancing response times and ensuring a 100% customer satisfaction rate.",
        "Improved response time and issue resolution by 100% accuracy through facilitating communication between brand representatives and platforms.",
      ],
      keySkills: [
        "E-commerce platform setup (Shopee, Lazada)",
        "customer satisfaction",
        "project management",
      ],
    },
    {
      role: "E-commerce Sales Executive",
      company: "HK DECOMAN TECHNOLOGY LIMITED",
      location: "Hong Kong",
      duration: "Mar. 2021 - Sept. 2021",
      responsibilities: [
        "Achieved CAD $170,000 in revenue for an exhibition campaign, surpassing the target by 50%.",
        "Maintained accurate departmental records and reports, enhancing decision-making efficiency by 20%.",
      ],
      keySkills: [
        "Stock management",
        "operational efficiency",
        "reporting accuracy",
      ],
    },
    {
      role: "Shipping Analyst",
      company: "YULU INTERNATIONAL LIMITED",
      location: "Hong Kong",
      duration: "Sept. 2019 - Jan. 2021",
      responsibilities: [
        "Generated monthly reports, identifying cost-saving opportunities and revenue growth strategies, resulting in a 5-6% increase in monthly revenue.",
        "Improved shipment efficiency, reducing lead time by 20% and increasing customer satisfaction ratings by 15%.",
        "Optimized order planning, resulting in a 30% reduction in stock backlog and a 25% decrease in order processing time, ensuring smooth operation of goods stock flow.",
      ],
      keySkills: ["Data analysis", "reporting", "process optimization"],
    },
  ]);
});

module.exports = router;
