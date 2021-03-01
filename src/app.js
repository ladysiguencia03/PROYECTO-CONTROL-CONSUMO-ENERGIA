const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/crud-mongo')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

const indexRoutes = require('./routers/index');

app.set('port', process.env.PORT || 1020);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))

app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });