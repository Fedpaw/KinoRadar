require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT ?? 3000;
const path = require('path');
const index = require('./routes/index');
const movies = require('./routes/movies');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', index);
app.use('/movies', movies);

app.listen(PORT, () => {
  console.log(`Port started on ${PORT}`);
});
