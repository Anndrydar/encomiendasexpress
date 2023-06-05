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


const eliminarCooperativa = async(req,res)=>{
const id_cooperativa = req.params.id_cooperativa;
const borrado = await pool.query('delete from cooperativa where id_cooperativa = $1',
[
    id_cooperativa
]) 
res.json({
    message: 'Cooperativa eliminada sastifactoriamente',
})
}



const editarCooperativa  = async(req,res)=>{
const id_cooperativa = req.params.id_cooperativa;
const {nombre,ciudad,terminal} = req.body;
const edicion = await pool.query('update cooperativa set nombre = $1, ciudad = $2, terminal = $3 where id_cooperativa = $4',[
     nombre,
     ciudad,
     terminal,
     id_cooperativa
])
res.json({
    message:'Cooperativa actualizada sastifactoriamente'
})
}


module.exports = {
    obtenerCooperativas,
    crearCooperativa,
    obtenerCooperativaPorCiudad,
    eliminarCooperativa,
    editarCooperativa
}

