const express = require('express');
const morgan = require('morgan');

const app = express();


// -------- middleware -------- //
app.use(express.static('/public'));
app.use(morgan('short'));


// -------- crud -------- //
app.get('/', (req, res) => res.send('Hello World!'));


// -------- server -------- //
const port = 3000;
app.listen(port, () => console.log(`Bowling Score listening on port ${port}!`));
