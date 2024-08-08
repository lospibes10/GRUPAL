const router = require("express").Router() // Crea un router express

const {todosLosBarrios, barrioPorId, insertarBarrio, eliminarBarrio} = require('../controllers/controllers');


router.get('/barrios', todosLosBarrios); // obtener todos los barrios
router.get('/barrios/:id', barrioPorId); // obtener barrio por el id
router.post('/barrios', insertarBarrio); // insertar nuevo barrio
router.delete('/barrios/:id', eliminarBarrio)

// Exporta el router para poder importarlo en el archivo principal
module.exports = router;