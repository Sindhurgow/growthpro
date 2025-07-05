const express = require("express");
const cors = require("cors");
const { generateHeadline } = require("./data");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/business-data", (req, res) => {
  const { name, location } = req.body;
  const rating = (Math.random() * 1 + 4).toFixed(1); // 4.0–5.0
  const reviews = Math.floor(Math.random() * 500 + 50);
  const headline = generateHeadline(name, location);
  res.json({ rating, reviews, headline });
});

app.get("/regenerate-headline", (req, res) => {
  const { name, location } = req.query;
  const headline = generateHeadline(name, location);
  res.json({ headline });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
