const {pool} = require('../../../conexion')

const obtenerOrigenes = async(req,res)=>{
    const respuesta = await pool.query('select nombres as envia, nombre_envio as encomienda, co.ciudad as desde from origen join cooperativa co on co.id_cooperativa = origen.id_cooperativa')
 res.status(200).json(respuesta.rows)
}


const obtenerOrigen2 = async(req,res)=>{
    const respuesta = await pool.query('select * from origen')
    res.status(200).json(respuesta.rows)
}


const obtenerOrigenPorCedula = async(req,res)=>{
 const cedula = req.params.cedula;
 const respuesta = await pool.query('select nombres as envia, nombre_envio as encomienda, co.ciudad as desde from origen join cooperativa co on co.id_cooperativa = origen.id_cooperativa where origen.cedula = $1 ',
 [
    cedula
 ])
 res.status(200).json(respuesta.rows);



}




const crearOrigen = async(req,res)=>{
    const {id_origen,id_cooperativa,nombres,cedula,nombre_envio} = req.body;
    const respuesta = await pool.query('insert into origen(id_origen,id_cooperativa,nombres,cedula,nombre_envio) values($1,$2,$3,$4,$5)',
    [id_origen,
     id_cooperativa,
     nombres,
     cedula,
     nombre_envio   
    ]
    )
    res.json({
        message: 'origen agregado sastifactoriamente',
        body:{
            origen: {nombres,
                    cedula,
                    nombre_envio}
        }
    })
}




module.exports = {
    obtenerOrigenes,
    obtenerOrigen2,
    obtenerOrigenPorCedula,
    crearOrigen
}






