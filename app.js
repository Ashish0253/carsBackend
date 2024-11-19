const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const carRoutes = require("./routes/carRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');
// const __swaggerDistPath = require("./index");

const path = require('path');
const { fileURLToPath } = require('url');

// __filename and __dirname are available by default in CommonJS
const __swaggerDistPath = path.join(__dirname, "node_modules", "swagger-ui-dist");

// console.log(__swaggerDistPath);
 // Just to verify the path

dotenv.config();

const app = express();

app.use('/api/docs', express.static(__swaggerDistPath, {index: false}), swaggerUi.serve, swaggerUi.setup(swaggerSpecs, {customCssUrl: process.env.CSS_URL}));

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;
