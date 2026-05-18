const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

app.use('/movies', require('./routes/movies'));
app.use('/actors', require('./routes/actors'));

app.get('/', (req, res) => res.redirect('/movies'));

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});