const config = require('./config');

const express = require('express');
const app = express();
const cors = require('cors');
const unirest = require('unirest');

// cors.
app.use(cors());

/**
 * Gets tickets.
 */
app.get('/', async (req, res) => {
  unirest.get(config.API_URL)
    .header("X-RapidAPI-Host", config.API_HOST)
    .header("X-RapidAPI-Key", config.API_KEY)
    .end(function (result) {
      res.json(result.body);
    });
});

/**
 * Start server.
 */
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

