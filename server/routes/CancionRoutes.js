const express = require ('express');

const CancionControllers = require ('../controllers/controller')
const CancionRoutes = express.Router();


CancionRoutes.post ('/song/create', CancionControllers.createSong);
CancionRoutes.put('/song/add/comment/:id', CancionControllers.agregarComentario)

module.exports = CancionRoutes;

