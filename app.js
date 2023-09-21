const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;
const mongoURL = 'mongodb://localhost:27017'; 
const dbName = 'tattler';
const client = new MongoClient(mongoURL);


client.on('connect', () => {
  console.log('Conectado a MongoDB');
});

client.on('close', () => {
  console.log('Conexion de MongoDB Finalizada');
});


client.on('error', (err) => {
  console.error('Error al conectar a MongoDB:', err);
});

// Conectar a MongoDB
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Conexión a MongoDB exitosa');
  } catch (error) {
    console.error('Error de conexión a MongoDB', error);
  }
}
connectToMongoDB();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rutas
app.get('/', (req, res) => {
  res.json({ message: '¡Bienvenido a la API de Tattler!' });
});

// Inicializar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
