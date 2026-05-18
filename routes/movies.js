const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const Actor = require('../models/Actor');

// Listar películas
router.get('/', async (req, res) => {
  const movies = await Movie.find().populate('actors');
  res.render('movies/index', { movies });
});

// Formulario nueva película
router.get('/new', async (req, res) => {
  const actors = await Actor.find();
  res.render('movies/new', { actors });
});

// Crear película
router.post('/', async (req, res) => {
  await Movie.create(req.body);
  res.redirect('/movies');
});

// Formulario editar
router.get('/:id/edit', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  const actors = await Actor.find();
  res.render('movies/edit', { movie, actors });
});

// Actualizar película
router.post('/:id', async (req, res) => {
  await Movie.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/movies');
});

// Eliminar película
router.post('/:id/delete', async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.redirect('/movies');
});

module.exports = router;