const express = require('express');
const router = express.Router();
const Actor = require('../models/Actor');

// Listar actores
router.get('/', async (req, res) => {
  const actors = await Actor.find();
  res.render('actors/index', { actors });
});

// Formulario nuevo actor
router.get('/new', (req, res) => {
  res.render('actors/new');
});

// Crear actor
router.post('/', async (req, res) => {
  await Actor.create(req.body);
  res.redirect('/actors');
});

// Eliminar actor
router.post('/:id/delete', async (req, res) => {
  await Actor.findByIdAndDelete(req.params.id);
  res.redirect('/actors');
});

module.exports = router;