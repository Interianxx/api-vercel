const express = require("express");
const cors = require("cors");
const products = require("./products");
const services = require("./services"); // Importamos servicios

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to our online shop API...");
});

// Rutas de productos
app.get("/products", (req, res) => {
  res.send(products);
});

// Rutas de servicios
app.get("/services", (req, res) => {
  res.send(services);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
