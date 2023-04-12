const estatusPedido = () => {
 
    return   Math.random() < 0.8 ;
};

const miPedidoDePizza = new Promise((resolve,reject) => {

    setTimeout(() => {

        if(estatusPedido()){
            resolve('Pedido Exitoso de su pizza');
        }else{
            reject('Ocurrio un error.Intente nuevamente');
        }

    },3000);
});

/*const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
    console.log(mensajeDeError);
};

miPedidoDePizza.then(manejarPedido, rechazarPedido);*/

miPedidoDePizza
    .then ((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
   /* .then(null, (mensajeDeError) => {
        console.log(mensajeDeError);
    });*/

    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });

    