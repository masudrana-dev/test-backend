const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

function dbConnection() {
    mongoose.connect(process.env.mongoDb_URI)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.error('Connection error:', err);
        });
}

module.exports = dbConnection;
