const mongoose = require('mongoose');

// Definimos el esquema de datos para los chistes
const ComentarioSchema =  mongoose.Schema({
  autor: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  }
});

const Comentario = mongoose.model ('comentario',ComentarioSchema);

module.exports = {Comentario, ComentarioSchema}