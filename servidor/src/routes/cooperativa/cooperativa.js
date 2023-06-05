const {Router} = require('express')
const {obtenerCooperativas,
        obtenerCooperativaPorCiudad, 
        crearCooperativa,
        eliminarCooperativa,
        editarCooperativa
} = require('../../controllers/cooperativa/cooperativa')



const router = Router();


router.get('/cooperativas',obtenerCooperativas)
router.get('/cooperativas/:ciudad',obtenerCooperativaPorCiudad)
router.post('/cooperativas',crearCooperativa)
router.delete('/cooperativas/:id_cooperativa',eliminarCooperativa)
router.put('/cooperativas/:id_cooperativa',editarCooperativa)



module.exports = router;

