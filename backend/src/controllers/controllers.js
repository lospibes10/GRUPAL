const connection = require("../database/database");

// Controlador para obtener todos los barrios
const todosLosBarrios = async (req, res) => {
    const sql = 'SELECT * FROM barrio'; //  Consulta SQL para obtener todos los barrios
    console.log('Ejecutando consulta para obtener todas las tareas'); // Mensaje de depuración

connection.query(sql, (error, results) => {
    if (error) {
        console.error('Error al obtener tarea:', error); //  Registrar error en consola
        res.status(500).send('Error al obtener tarea'); //  Enviar respuesta de error
        return; //  Salir de la función si hay error
    }
      console.log('Tareas obtenidas:', results); //  Mensaje de depuración
      res.json(results); // Enviar resultados al cliente
    });
}

const barrioPorId = async (req, res) => {
    const idBarrio = parseInt(req.params.id); // Obtener ID del parámetro de ruta
    // console.log('Obteniendo tarea con ID:', idBarrio); //  Mensaje de depuración
    try {
        const [consulta] = await connection.promise().query("SELECT * FROM barrio WHERE idBarrio = ?",[idBarrio]); // Consulta SQL para obtener barrio por ID
        if (consulta.length===0) {
            console.log('Barrio no encontrado con ID:', idBarrio); //  Mensaje de depuración
            res.status(404).send('Barrio no encontrado'); //  Enviar respuesta de no encontrado
            return; //  Salir de la función si no se encuentra el barrio
          
        }
    
        res.json(consulta)
        res.status(200)
    } catch (error) {
        
        console.error('Error al obtener barrio:', error); // Registrar error en consola
        res.status(500).send('Error al obtener barrio'); // Enviar respuesta de error
        
        return; //  Salir de la función si hay error
    }
    

}

const insertarBarrio = async (req, res) => {
    // primer paso: obtener datos del cuerpo de la solicitud
    console.log('req.body:', req.body);

    const {descripcion}  = req.body;
    try {
         await connection.promise().query("INSERT INTO barrio (descripcion) VALUES (?)",[descripcion]);
        res.status(201).json({message: "barrio agregado con exito"})
        if (!descripcion ) {
          res.status(400).send('Falta información obligatoria'); // Enviar respuesta de error (código 400)
          return; // Salir de la función si faltan datos
        }
        
    } catch (error) {
        console.error('Error al crear tarea:', error); // Registrar error en consola
        res.status(500).send('Error al crear tarea'); // Enviar respuesta de error (código 500)
        return; // Salir de la función si hay error en la consulta
        
    }
    
}


const eliminarBarrio = async (req, res) => {
    // se obtiene el ID de la tarea a eliminar
    const idBarrio = parseInt(req.params.id); // Extraer el ID del parámetro de la URL

    try {
        const [consulta] = await connection.promise().query("DELETE FROM barrio WHERE idBarrio = ?",[idBarrio]); // Consulta SQL para obtener barrio por ID
        if (consulta.affectedRows === 0) {
            console.log('Barrio no encontrado con ID:', idBarrio); //  Mensaje de depuración
            res.status(404).send('Barrio no encontrado'); //  Enviar respuesta de no encontrado
            return; //  Salir de la función si no se encuentra el barrio
          
        }
    
        res.send('Barrio eliminado correctamente');
        res.status(200)
    } catch (error) {
        
        console.error('Error al obtener barrio:', error); // Registrar error en consola
        res.status(500).send('Error al obtener barrio'); // Enviar respuesta de error
        
        return; //  Salir de la función si hay error
    }

} 

module.exports = {
    todosLosBarrios,
    barrioPorId,
    insertarBarrio,
    eliminarBarrio
}