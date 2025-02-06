const express = require("express");
const cors = require("cors");
const productRoutes = require("./src/api/routes/productRoutes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api", productRoutes);

// Porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
