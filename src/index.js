const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

const extractDetailsFromRequest = require('./helpers/extract-details');

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));

let result = {}

app.use('/m/:id/:name', (req, res) => {
  const { id, name } = req.params
  const { host, ipAddress, userAgent } = extractDetailsFromRequest(req);
  console.log('result', result)
  if (result[id] && result[id][name]) {
    console.log('exists')
    result[id][name] = result[id][name] += 1
  } else {
    if (result[id]) {
      result[id][name] = 1
    } else {
      result[id] = { [name]: 1 }
    }
  }
  res.status(204).end()
});

module.exports = app;
