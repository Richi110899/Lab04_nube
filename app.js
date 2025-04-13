const express = require("express"); // Importa el framework Express
const app = express(); // Crea una instancia de la aplicación Express
const port = 9000; // Define el puerto donde se ejecutará la app

const clientesRouter = require("./routes/clientes"); // Importa las rutas de clientes
const productosRouter = require("./routes/productos"); // Importa las rutas de productos

app.use(express.static("public")); // Sirve archivos estáticos desde la carpeta 'public'

app.use("/clientes", clientesRouter); // Usa las rutas de clientes en la URL /clientes
app.use("/productos", productosRouter); // Usa las rutas de productos en la URL /productos

app.get("/", (req, res) => {
  // Ruta principal que responde con un mensaje simple
  res.send("Bienvenido a la API de ejemplo");
});

app.listen(port); // Inicia el servidor en el puerto 9000 sin mostrar mensaje en consola
