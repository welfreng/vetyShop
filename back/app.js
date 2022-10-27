const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/errors")

app.use(express.json());

//importar rutas
const productos = require("./routes/products")
const usuarios= require("/routes/auth")

app.use('/api', productos) //sujeto a decision (ruta del navegador)
app.use('/api', usuarios)

//Middleware para manejar errores
app.use(errorMiddleware)

module.exports = app