const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const carRoutes = require("./routes/carRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');

dotenv.config();

const app = express();

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;
