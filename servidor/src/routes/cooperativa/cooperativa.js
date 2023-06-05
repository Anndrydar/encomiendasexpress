const {Router} = require('express')
const {obtenerCooperativas,
        obtenerCooperativaPorCiudad, 
        crearCooperativa,
        eliminarCooperativa
} = require('../../controllers/cooperativa/cooperativa')



const router = Router();


router.get('/cooperativas',obtenerCooperativas)
router.get('/cooperativas/:ciudad',obtenerCooperativaPorCiudad)
router.post('/cooperativas',crearCooperativa)
router.delete('/cooperativas/:id_cooperativa',eliminarCooperativa)



module.exports = router;

