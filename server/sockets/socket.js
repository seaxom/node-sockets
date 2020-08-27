const {io} = require('../server')
io.on('connection',(client)=>{

    console.log('Usuario conectado');


    client.emit('enviarMensaje',{

        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', ()=>{
        console.log("Usuario desconectado");
    });


    //escuchar el cliente
    client.on('enviarMensaje',(data, callback)=>{
      console.log(data);

      client.broadcast.emit('enviarMensaje', data );





 /*  
        if(message.usuario){
            callback({
                resp: 'todo salio bien'
            });
        }else{
            callback({
                resp: 'todo salio mal'
            })
        } */
        
    })

});
