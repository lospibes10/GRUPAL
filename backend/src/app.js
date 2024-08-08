// Requerir Express.js para crear un servidor web
const express = require('express');

// Crear una instancia de la aplicación Express para representar el servidor
const app = express();

const routes = require('../src/routes/routes'); // Importar el archivo de rutas
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // Parsear JSON

app.use(routes);

// Iniciar el servidor y escuchar solicitudes en el puerto 3000
app.listen(3000, () => {
  console.log('El servidor está funcionando en el puerto 3000'); // Mensaje de confirmación
});