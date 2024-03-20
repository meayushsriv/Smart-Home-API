import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import path from "path";
import ejs from "ejs";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://kodessphere-api.vercel.app/devices/rs9pPCR"
    );
    const data = response.data;
    res.status(200).render("index.ejs", { data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Handle fan form submission
app.post("/submitfan", async (req, res) => {
  try {
    const requestBody = {
      teamid: "rs9pPCR",
      device: "fan",
      value: req.body.value,
    };
    const response = await axios.post(
      "https://kodessphere-api.vercel.app/devices",
      requestBody
    );
    console.log(response.data);
    res.status(200).redirect("/");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Handle bulb form submission
app.post("/submitbulb", async (req, res) => {
  try {
    // Similar logic as above for bulb submission
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Handle AC form submission
app.post("/submitac", async (req, res) => {
  try {
    // Similar logic as above for AC submission
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Handle LED form submission
app.post("/submitled", async (req, res) => {
  try {
    // Similar logic as above for LED submission
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
