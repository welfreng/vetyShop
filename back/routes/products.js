const express = require("express")
const router = express.Router();

const { getProducts, newProduct } = require("../controllers/productsController") //traemos la respuesta del json desde el controlador

router.route('/productos').get(getProducts) //establecemos desde que ruta qeuremos ver el getproducts
router.route('/producto/nuevo').post(newProduct)  //establecemos la ruta
module.exports = router;