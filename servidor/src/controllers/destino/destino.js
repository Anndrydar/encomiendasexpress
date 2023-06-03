const {pool} = require('../../../conexion')



const obtenerDestinos = async(req,res)=>{
const respuesta = await pool.query('select * from destino')
res.status(200).json(respuesta.rows)
}


const crearDestino = async(req,res) =>{
    const {id_destino,id_origen,nombres,cedula,ciudad} = req.body;
    const respuesta = await pool.query
    ('insert into destino(id_destino,id_origen,nombres,cedula,ciudad) values($1,$2,$3,$4,$5)',
    [id_destino,
     id_origen,
     nombres,
     cedula,
     ciudad   
    ]
    )
    res.json({
      message: 'Destino agregado sastifactoriamente',
      body:{
        destino: {nombres,cedula,ciudad}
      }
    })
}

const obtenerDestinoByCedula = async(req,res) =>{
const cedula = req.params.cedula;
const respuesta = await pool.query('select * from destino where destino.cedula = $1',
[
  cedula
])
res.status(200).json(respuesta.rows)
}

module.exports = {
obtenerDestinos,
crearDestino,
obtenerDestinoByCedula
}














