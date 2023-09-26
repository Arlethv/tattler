/**
 * Este módulo proporciona funciones relacionadas con la obtención de restaurantes desde MongoDB.
 * @author {Yoselyn}
 * @version 1.0
 */

const { MongoClient } = require('mongodb');

/**
 * @const {string}
 * URI de conexión a la base de datos
 */
const uri = 'mongodb://localhost:27017/tattler';
const client = new MongoClient(uri);


/**
 * @function getRestaurantes
 * @description Función para obtener la colección de restaurantes desde la base de datos.
 * @throws {Error} Si ocurre un error al conectarse o acceder a la colección.
 * @returns {Collection} La colección de restaurantes.
 */
async function getRestaurantes() {
  try {
    await client.connect();
    const db = client.db('tattler');
    const coleccion = db.collection('restaurantes');
    return coleccion;
  } catch (error) {
    throw error;
  }
}


module.exports = {
  getRestaurantes
};