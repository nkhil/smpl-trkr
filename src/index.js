const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { metricsEmitter } = require('./controller/metrics');

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));

app.use('/t/:userId/:sourceId', (req, res) => {
  const { userId, sourceId } = req.params
  res.status(204).end()
  metricsEmitter({ userId, sourceId })
});

module.exports = app;
