const {Router} = require('express')

const router = Router();

const {obtenerEnvios, obtenerEnvioPorCedula} = require('../../controllers/envios/envios')

router.get('/envios',obtenerEnvios)
router.get('/envios/:cedula',obtenerEnvioPorCedula)


module.exports = router;