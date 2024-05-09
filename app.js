const express = require('express');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('./public'));

//Express routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
