const User = require("../models/auth")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require ("../middleware/catchAsyncErrors")

//Registrar un nuevo usuario /api/usuario/registro
exports.registroUsuario = catchAsyncErrors(async(req, res,next)=>{
    const {nombre, email, password} = req.body;
    
    const user = await User.create({
        nombre,
        email,
        password,
        avatar:{
            public_id:"0CA0QjRxqFwoTCIj95vK3gPsCFQAAAAAdAAAAABAE",
            url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fes%2Fvectors%2Fmujer-usuario-avatar-perfil-2022387%2F&psig=AOvVaw1ainpRYtjTP8i1u2jynRrd&ust=1666961033806000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIj95vK3gPsCFQAAAAAdAAAAABAE"
        }
    })
    res.status(201).json({
        success:true,
        user
    })
})