const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URI);

app.use(express.json());
app.use('/api', authRoutes);

app.listen(3000, () => console.log('Server is running on port 3000'));