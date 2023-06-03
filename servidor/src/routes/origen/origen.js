const {Router} = require('express')
const {obtenerOrigenes,obtenerOrigenPorCedula, crearOrigen, obtenerOrigen2} = require('../../controllers/origen/origen')

const router = Router();


router.get('/origenes',obtenerOrigenes)
router.get('/origenes2',obtenerOrigen2)
router.get('/origenes/:cedula',obtenerOrigenPorCedula)
router.post('/origenes',crearOrigen)



module.exports = router;


