const express = require('express');

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');
// TODO: import your diagnostics route

const app = express();

app.use('/notes', notesRouter);
// TODO: Initialize diagnostics route

module.exports = app;
