/*const EvenEmitter = require('events');

const emisorProductos= new EvenEmitter();

emisorProductos.on('compra',(total) =>{

    console.log(`Se ralizo una compra por $${total}`);
});

emisorProductos.emit('compra',500);
*/
//------------------------------------
const promesaCumplida = false;

const miPromesa = new Promise((resolve,reject) => {

    setTimeout(() =>{

        if(promesaCumplida){
            resolve('Promesa Cumplida!');
        }else{
            reject('Promesa rechazada...')
        }
    },3000);
});

/*miPromesa.then((valor) =>{
    console.log(valor);
});*/

const manejarPromesaCumplida = (valor) =>{
    console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) =>{
    console.log(razonRechazo);
};

 miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);