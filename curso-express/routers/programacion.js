const express = require('express');

const {programacion}= require('../datos/cursos').infoCursos;

const routerProgramacion = express.Router();

//Middleware
routerProgramacion.use(express.json());

routerProgramacion.get('/', (req,res) => {
    res.send(JSON.stringify(programacion));
});
routerProgramacion.get('/:lenguaje', (req,res) => {

    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter( cursos => cursos.lenguaje === lenguaje);
    if(resultados.length ===0){
        return res.status(404).send(`No se encontraron los cursos de ${lenguaje}`);
    }
    
    if(req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(resultados.sort((a,b) => a.vistas - b.vistas)));

    }
        res.send(JSON.stringify(resultados));

    
    
    
});

routerProgramacion.get('/:lenguaje/:nivel',(req,res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
    if (resultados.length === 0){
        return  res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }

    res.send(JSON.stringify(resultados));
});

routerProgramacion.post('/',(req,res) => {
         const cursoNuevo =req.body;
         programacion.push(cursoNuevo);
         res.send(JSON.stringify(programacion));
});

routerProgramacion.put('/:id',(req,res) => {
    const cursoActualizar = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >=0){
        programacion[indice]=cursoActualizar;
    }
    res.send(JSON.stringify(programacion));
});

module.exports = routerProgramacion;