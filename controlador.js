/**
 * @description Este archivo define las rutas de la API relacionadas con el modelo MVC.
 * @author {Yoselyn}
 * @version 1.0
 */

const express = require('express');
const rutaApi = express.Router();
const modelo = require('./modelo');



/**
 * @route GET /api/restaurantes
 * @description Ruta para obtener todos los restaurantes.
 * @param {Object} req objeto de solicitud HTTP.
 * @param {Object} res objeto de respuesta HTTP.
 */
rutaApi.get('/tattler', async (req, res) => {
  try {
    const coleccion = await modelo.getRestaurantes();
    const restaurantes = await coleccion.find({}).toArray();
    res.json(restaurantes);
  } catch (error) {
    console.error('Error al obtener los datos de restaurantes:', error);
    res.status(500).json({ error: 'Error en del servidor' });
  }
});

module.exports =rutaApi;
