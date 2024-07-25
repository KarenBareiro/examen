const Cancion = require ('../models/cancionModels')

// Función para crear un nuevo chiste
module.exports.createSong = async (req, res) => {
    // const cancion = new Cancion ({ // Creamos una nueva instancia de Joke con los datos recibidos en el cuerpo de la solicitud (req.body)
    //   title: req.body.joke,
    // });
  
    try {
      const newSong = await Cancion.create(req.body); // Guardamos el nuevo chiste en la base de datos
      res.status(201).json(newSong); // Devolvemos el chiste creado como respuesta con estado 201 (creado) en formato JSON
    } catch (error) {
      res.status(400).json({ message: error.message }); // Manejamos errores de validación y devolvemos un mensaje de error
    }
  };
  

  module.exports.agregarComentario = async (req, res) => {
    try {
        const findSong = await Cancion.findOne({_id: req.params.id});
        if(!findSong){
            res.statusMessage = 'Cancion no encontrada.';
            return res.status(404).json({mensaje: 'Cancion no encontrada.'});
        }
        const foundSong = await Cancion.findOneAndUpdate({_id: req.params.id}, {$push: {comentarios: req.body.comentario}}, {new: true})
        res.json(foundSong);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    // Cancion.findOne({_id: req.params.id})
    //     .then((cursoEncotrado) => {
    //         if(!cursoEncotrado){
    //             res.statusMessage = 'Curso no encontrado.';
    //             return res.status(404).json({mensaje: 'Curso no encontrado.'});
    //         }
    //         Estudiantes.findOneAndUpdate({correo: req.body.correo}, {$push: {cursos: cursoEncotrado}}, {new: true})
    //             .then((estudianteActualizado) => {
    //                 return res.status(200).json(estudianteActualizado);
    //             })
    //             .catch((error) => {
    //                 return res.status(400).json(error);
    //             });
    //     })
    //     .catch((error) => {
    //         return res.status(400).json(error);
    //     });
}