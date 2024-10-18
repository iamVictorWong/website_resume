const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const cors = require("cors");


// middlelware
// app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));
// routes
// app.get("/", (req, res) => {
//   res.send("Welcome to our Assignment");
// });
app.use('/', require('./routers/getOverview'));
app.use('/education', require('./routers/getEdu'));
app.use('/experience', require('./routers/getExp'));
app.use('/skills', require('./routers/getSkills'));

// app.use("/fetch", require("./routers/fetch_router"));
// app.use("/save", require("./routers/save_router"));

// app.use("/getEdu", require("./routers/getEdu"));
// app.use("/getExp", require("./routers/getExp"));
// app.use("/getOverview", require("./routers/getOverview"));


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use("", (req, res) => {
  res.status(404).send("Page not found");
});


