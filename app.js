const cookieParser = require("cookie-parser");
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');

var app = express();


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var publicationRouter = require('./routes/Publication');

app.set('view engine', 'html');
// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());
app.use(express.json());
//adicionado
app.use(session({
  secret: 'super secret session key',
  resave: false,
  saveUninitialized: true,
}));

app.use('/publication',publicationRouter);


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.use('/users', usersRouter);


app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(process.env.PORT || 3333);

module.exports = app;

  