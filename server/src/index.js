require("dotenv").config({ path: "./config.env" });

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use(require("./routes/record"));
// get driver connection
