/**
 * Define una aplicación Express que utiliza un controlador para manejar rutas API.
 * @author {Yoselyn}
 */

const express = require('express');
const app = express();
const controlador = require('./controlador');


/**
 * @description Middleware que agrega el controlador para manejar las rutas '/api'.
 * @param {string} '/api' El prefijo de la ruta bajo el cual se aplicará el middleware.
 * @param {Object} controlador El controlador que manejará las rutas bajo '/api'.
 */
app.use('/api', controlador);


/**
 * @const {number}
 * Puerto en el que se ejecutará el servidor.
 */
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});