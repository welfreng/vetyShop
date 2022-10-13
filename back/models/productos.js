const mongoose = require('mongoose')

const productosSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: [true, 'Por favor registra el nombre del Producto.'],
        trim: true,
        maxLength: [120,'El nombre del Producto no debe exceder los 120 caracteres.']
    },
    precio:{
        type: Number, 
        required: [true, 'Por favor registre el precio del Producto'],
        maxLength: [8, "El precio del Producto no puede estar por encima de 99'999.999"],
        default: 0.0
    },
    descripcion: {
        type: String,
        required: [true, 'Por favor registre una descripcion para el Producto.']
    },
    calificacion: {
        type: Number,
        default: 0
    },
    imagen:[
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    categoria: {
        type: String,
        required: [true, 'Por favor seleccione la categoria del Producto.'],
        enum: {
            values: [
                'Alimento seco',
                'Alimento humedo',
                'Accesorios',
                'Medicamentos',
                'Snacks',
                'Juguetes'
            ]
        },
        vendedor: {
            type: String,
            required: [true, 'Por favor registre el vendedor del Producto.']
        },
        inventario: {
            type: Number,
            required: [true, 'Por favor registre el Stock del Producto.'],
            maxLength: [5, 'Cantidad maxima del producto no puede sobrepasar 99999.'],
            default: 0
        },
        numCalificaciones: {
            type: Number,
            default: 0
        },
        opiniones: [
            {
                nombreCliente:{
                    type: String,
                    required: true
                },
                rating: {
                    type: Number,
                    required: true
                },
                comentario: {
                    type: String,
                    required: true
                }
            }
        ],
        fechaCreacion: {
            type: Date,
            default: Date.now
        }
    }


})

module.exports = mongoose.model('productos', productosSchema)