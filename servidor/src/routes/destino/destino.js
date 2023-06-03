const {Router} = require('express')
const {obtenerDestinos, crearDestino,obtenerDestinoByCedula} = require('../../controllers/destino/destino')

const router = Router()


router.get('/destinos',obtenerDestinos)
router.post('/destinos',crearDestino)
router.get('/destinos/:cedula',obtenerDestinoByCedula)



module.exports = router;



