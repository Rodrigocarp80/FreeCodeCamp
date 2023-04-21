/*const curso = require('./curso.json');

console.log(curso.titulo);*/

let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVisitas": 45642,
    "numLikes": 21125,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
};

//Cadena de caracteres en formato Json
//Objeto -> cadena de caracteres
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

//Cadena de caracteres -> objeto

let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);