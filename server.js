require('dotenv').config({ path: './config.env' });
const app = require('./app');
const mongoose = require('mongoose');
const PORT = 4000;

const db = process.env.DB

mongoose.connect(db).then(() => {
    console.log('Connected to database');
})

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
