const producto = require('../models/productos')
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));   //imortar fetc con trampa


//ver lista de productos
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
    const productos= await producto.find();
if (!productos){
    return res.status(404).json({
        success:false,
        error:true
    })
}

    res.status(200).json({
        success: true,
        count: productos.length,
        productos
    })
})

//ver productos por id
exports.getProductById = catchAsyncErrors(async(req, res, next) => {
    const product = await producto.findById(req.params.id)
    if (!product){

        return next(new ErrorHandler("producto no encontrado, 400"))

        /*
        //metodo viejo
        return res.status(404).json({
            success: false,
            message: 'No se encontro ese producto',
            error:true
        })
        */
    }
    res.status(200).json({
        success: true,
        message: 'Aqui debajo encuentras informacion sobre tu producto',
        product
    })
})


//actualizar o editar un producto 
exports.updateProduct = catchAsyncErrors(async(req, res, next) =>{
    let product = await producto.findById(req.params.id)
    if (!product){  //verificamos si llega null 
        return res.status(404).json({
            success: false,
            message: 'No se encontro ese producto'
        })
    }

    product = await producto.findByIdAndUpdate(res.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json({
        success:true,
        message:'Producto actualizado correctamente',
        product
    })
})

//eliminar producto
exports.deleteProduct = catchAsyncErrors(async(req, res, next) =>{
    const product = await producto.findById(req.params.id)
    if (!product){  //verificamos si llega null 
        return res.status(404).json({
            success: false,
            message: 'No se encontro ese producto'
        })
    }

    await product.remove();
    res.status(200).json({
        succes:true,
        message: 'Producto eliminado correctamente'
    })
})

//Crear nuevo Producto /api/productos
exports.newProduct=catchAsyncErrors(async(req, res, next)=>{
    const product= await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
})


//utilizacion del fetch
//ver todos los productos
function verProductos(){
    fetch('http://127.0.0.1:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos();

//ver por id
function verProductosPorId(id){
    fetch('http://127.0.0.1:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}