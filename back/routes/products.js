const express = require("express")
const router = express.Router();

const { getProducts } = require("../controllers/productsController") //traemos la respuesta del json desde el controlador

router.route('/productos').get(getProducts) //establecemos desde que ruta qeuremos ver el getproducts

module.exports = router;