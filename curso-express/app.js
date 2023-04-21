const express = require('express');

const app = express();

const{infoCursos} = require('./datos/cursos');

//Routers

const routerProgramacion =require('./routers/programacion');
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas')
app.use('/api/cursos/matematicas', routerMatematicas);

//Routing

app.get('/',(req,res) => {
    res.send('Mi primer servidor.Cursos de Express 2023');
});

app.get('/api/cursos', (req,res) => {
    res.send(JSON.stringify(infoCursos));
});

//Cursos de Matematicas
const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});