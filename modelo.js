const { Schema } = mongoose;
const mongoose = require('mongoose');

const restauranteSchema = new Schema({
  direccion: {
    edificio: String,
    coordenadas: [Number],
    calle: String,
    codigo_postal: String,
  },
  distrito: String,
  tipo_cocina: String,
  calificaciones: [
    {
      fecha: Date,
      puntuacion: Number,
    },
  ],
  comentarios: [
    {
      fecha: Date,
      comentario: String,
    },
  ],
  nombre: String,
  id_restaurante: String,
});

const Restaurante = mongoose.model('Restaurante', restauranteSchema);

module.exports = Restaurante;
