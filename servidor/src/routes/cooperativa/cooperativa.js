const {Router} = require('express')
const {obtenerCooperativas,
        obtenerCooperativaPorCiudad, 
        crearCooperativa} = require('../../controllers/cooperativa/cooperativa')



const router = Router();


router.get('/cooperativas',obtenerCooperativas)
router.get('/cooperativas/:ciudad',obtenerCooperativaPorCiudad)
router.post('/cooperativas',crearCooperativa)



module.exports = router;

