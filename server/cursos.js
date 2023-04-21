const infoCursos = {
    'programacion': [
        {
            id: 1,
            titulo: 'Aprende python',
            lenguaje:'python',
            vistas: 15000,
            nivel : 'basico'
        },
        {
            id:2,
            titulo: 'Python intermedio',
            lenguaje: 'pyrhon',
            visitas: 16546,
            nivel: 'intermedio'
        },
        {
            id: 3,
            titulo: 'Aprende JavaScript',
            lenguaje:'javascrip',
            vistas: 10000,
            nivel : 'basico'
        }
        
    ],
    'matematicas':[
    {
        id:1,
        titulo: 'Aprende Calculo',
        tema: 'calculo',
        vistas: 12552,
        nivel: 'basico'
    },
    {
        id:2,
        titulo: 'Aprende Algebra',
        tema: 'algebra',
        vistas: 15252,
        nivel: 'intermedio'
    }
    ]
}

module.exports.infoCursos= infoCursos;