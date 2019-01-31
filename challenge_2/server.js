const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

// -------- middleware -------- //
app.use(express.static('public'));
app.use(morgan('short'));

// -------- crud -------- //
app.get('/prices', (req, res) => {
  const CURRENCY = 'bpi';
  
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then(response => res.send(response.data[CURRENCY]))
    .catch(err => res.status(500).send(err));
});

// -------- server -------- //
const port = 3000;
app.listen(port, () => console.log(`CryptoViewer listening on port ${port}!`));
