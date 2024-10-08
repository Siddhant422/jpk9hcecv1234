const cors = require('cors');
const express = require('express');
const app = express();
const router = require('./routes/routes');

app.use(cors());

app.use(express.json());
app.use(router);

module.exports = app;
