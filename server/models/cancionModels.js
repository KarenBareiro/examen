const mongoose = require('mongoose');
const {ComentarioSchema} = require ('./comentarioModels')

// Definimos el esquema de datos para los chistes
const CancionSchema =  mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  comentarios: [ComentarioSchema]
});

const Cancion = mongoose.model ('cancion',CancionSchema);

module.exports = Cancion;