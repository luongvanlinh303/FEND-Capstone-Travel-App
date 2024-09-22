const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const listen = require("../server/listen-server-running");

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("dist"));

// Trip data validation
const validateTripData = (data) => {
  const { location, startDate, endDate, temperature, humidity } = data;
  return location && startDate && endDate && temperature && humidity;
};

// Handle trip data
const handleTripData = (data) => {
  return data;
};

// Routes
app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});

app.post("/save-trip", (req, res) => {
  const tripData = req.body;

  if (!validateTripData(tripData)) {
    return res.status(400).json({ error: "Missing required trip data fields" });
  }

  try {
    const savedTripData = handleTripData(tripData);
    res.status(200).json(savedTripData);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request" });
  }
});

app.listen(port, () => listen(port));
