const express = require("express"); // Importa Express
const router = express.Router(); // Crea un enrutador

// Ruta principal para "/productos"
router.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Productos</title>
      <link rel="stylesheet" href="/css/styles.css">
    </head>
    <body>
      <div class="container mt-5">
        <h1>Lista de Productos</h1>
        <a href="/" class="btn">Volver al inicio</a>
      </div>
    </body>
    </html>
  `);
});

module.exports = router; // Exporta el enrutador
