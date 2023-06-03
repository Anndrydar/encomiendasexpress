const express = require('express');
const cors = require("cors");


const app = express();
PORT = process.env.PORT || 3000;
//cors
app.use(cors());
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/cooperativa/cooperativa'));
app.use(require('./routes/envios/envios'))
app.use(require('./routes/origen/origen'))
app.use(require('./routes/destino/destino'))




app.listen(PORT);
console.log('Servidor corriendo por el puerto', PORT);