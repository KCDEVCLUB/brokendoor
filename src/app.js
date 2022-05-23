const express = require('express');
const path = require('path');
const app = express();
// internal
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(process.cwd(), 'dist')));
app.use('/', routes);

module.exports = app;
