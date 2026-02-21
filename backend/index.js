const express = require('express');
const cors = require('cors');
const prisma = require('./prisma/db');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', async (req, res) => {
  try {
    const userCount = await prisma.user.count();
    res.json({ status: "OK", users: userCount });
  } catch (err) {
    res.status(500).json({ status: "Error", message: err.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));