const express = require('express')
const router= express.Router();

router.route("/usuario/registro").post(registroUsuario)

module.exports = router;