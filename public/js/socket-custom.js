var socket = io();
socket.on('connect', function(){
    console.log('Conectado al servidor');
});



socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor');
});

//Enviar información
socket.emit('enviarMensaje', {
    usuario:'Sergio',
    mensaje:'Hola mundo'
}, function(response){
    console.log('Respuesta server:', response);
});

//Escuchar información
socket.on('enviarMensaje', function(respuesta){
    console.log('Servidor', respuesta);

});