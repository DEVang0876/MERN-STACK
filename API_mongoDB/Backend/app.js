var createError = require('http-errors');
require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose = require('mongoose');
var app = express();


mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.7')
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('MongoDB Connection Failed:', err.message || err));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS for React dev server and general local use
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:3000',
    'http://127.0.0.1:3000'
  ],
  credentials: false
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});





app.use(function (req, res, next) {
  next(createError(404));
});


app.use(function (err, req, res, next) {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// Allow running `node app.js` directly (useful during development with nodemon)
if (require.main === module) {
  const http = require('http');
  const port = parseInt(process.env.PORT, 10) || 5001; // avoid macOS AirPlay on 5000
  app.set('port', port);
  const server = http.createServer(app);
  server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}
