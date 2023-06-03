const {pool} = require('../../../conexion')


const obtenerEnvios = async(req,res)=>{
const respuesta = await pool.query('select  coo.ciudad as desde, coo.nombre as delacooperativa, o.nombres as envia,  d.ciudad as hacia, o.nombre_envio as elproducto, d.nombres as encargadopor, d.cedula as decedula from cooperativa coo inner join origen o on coo.id_cooperativa = o.id_cooperativa join destino d on o.id_origen= d.id_origen ')
res.status(200).json(respuesta.rows)
}





const obtenerEnvioPorCedula = async(req,res)=>{
    const cedula = req.params.cedula;
        const respuesta = await pool.query('select  coo.ciudad as desde, coo.nombre as deLaCooperativa, o.nombres as envia,  d.ciudad as hacia, o.nombre_envio as elProducto, d.nombres as encargadoPor, d.cedula as decedula from cooperativa coo inner join origen o on coo.id_cooperativa = o.id_cooperativa join destino d on o.id_origen= d.id_origen where d.cedula = $1',
        [
            cedula
        ])
        res.status(200).json(respuesta.rows)     
    res.status(401)
}


module.exports = {
    obtenerEnvios,
    obtenerEnvioPorCedula
}

