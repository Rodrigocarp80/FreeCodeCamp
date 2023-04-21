const http = require('http');

const servidor = http.createServer ((req,res) => {
    res.end('Hola Mundo y Argentina');
});


const PORT =3000;
servidor.listen(PORT,() => {
    console.log(`El servidor esta escuchando el puerto : ${PORT}`);
});