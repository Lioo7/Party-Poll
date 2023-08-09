require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { connect } = require('./config/database');
const logger = require('./config/logger');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the database
connect(process.env.MONGODB_URI);

// Routes

// Start the server
const server = app.listen(port, () => {
    logger.info(`Server started on http://localhost:${port}`);
});

module.exports = { app, server };
