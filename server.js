const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.get('/', (req, res) => res.send("API running"));

const PORT = process.env.port || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
