const {pool} = require('../../../conexion')

const obtenerCooperativas = async(req, res)=>{
const respuesta = await pool.query('select * from cooperativa')
res.status(200).json(respuesta.rows);
}

const obtenerCooperativaPorCiudad = async(req,res)=>{
    const ciudad = req.params.ciudad;
    const respuesta = await pool.query('select nombre,terminal,ciudad from cooperativa where ciudad = $1',
    [
        ciudad
    ])
    res.status(200).json(respuesta.rows)
}


const crearCooperativa = async(req,res)=>{
const {id_cooperativa,nombre,ciudad,terminal} = req.body;
const respuesta = await pool.query('insert into cooperativa(id_cooperativa,nombre,ciudad,terminal) values($1,$2,$3,$4)',
[id_cooperativa,
 nombre,
 ciudad,
 terminal   
]
)
res.json({
    message: 'Cooperativa creada sastifactoriamente',
    body:{
        cooperativa: {nombre,ciudad,terminal}
    }
})

}


module.exports = {
    obtenerCooperativas,
    crearCooperativa,
    obtenerCooperativaPorCiudad
}

