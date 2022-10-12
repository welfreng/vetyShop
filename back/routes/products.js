const express = require("express")
const router = express.Router();

const { getProducts, newProduct, getProductById, updateProduct, deleteProduct } = require("../controllers/productsController") //traemos la respuesta del json desde el controlador

router.route('/productos').get(getProducts); //Ruta para ver los productos listados
router.route('/producto/nuevo').post(newProduct);  //establecemos la ruta para guardar el producto
router.route('/producto/:id').get(getProductById); //Ver los productos por id
router.route('/producto/:id').put(updateProduct);  //actualizar productos 
router.route('/producto/:id').delete(deleteProduct);

module.exports = router;