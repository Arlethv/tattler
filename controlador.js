const express = require('express');
const ruta = express.Router();
const Restaurante = require('./modelo');

ruta.post('/modelo', async (req, res) => {
  try {
    const nuevoRestaurante = new Restaurante(req.body);
    await nuevoRestaurante.save();
    res.status(201).json(nuevoRestaurante);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el restaurante' });
  }
});


ruta.get('/modelo', async (req, res) => {
  try {
    const restaurantes = await Restaurante.find();
    res.status(200).json(restaurantes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los restaurantes' });
  }
});


module.exports = ruta;
