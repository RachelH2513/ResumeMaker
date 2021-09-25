require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const connectDB = require('../config/db');
// Connect Database
connectDB();

// use body parser to get data from POST requests
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded())

// Use API routes from the api folder
const apis = require("./api/weather_index");
app.use("/api", apis);

const basicinfo = require('./api/basicinfo');
app.use('/basicinfo', basicinfo)

const experience = require('./api/experience');
app.use('/experience', experience)

const path = require('path');

// If in production, then use static frontend build files.
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));