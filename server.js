const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan'); // allow us to log request on the console when ever we make a request
const bodyParser = require('body-parser');
const path = require('path');

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;
// log requests
app.use(morgan('tiny'));

// parse request to body-parser

app.use(bodyParser.urlencoded({ extended: true }));

// set view engine

app.set('view engine', 'ejs');

// load assets

app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
