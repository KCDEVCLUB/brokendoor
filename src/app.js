const express = require('express');
const app = express();
// internal
const routes = require('./routes');

app.use('/', routes);

module.exports = app;
