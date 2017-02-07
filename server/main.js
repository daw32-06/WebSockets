var app = require('express')();
var http = require("http").Server(app); // Esto crea el servidor HTTP
var io = require("socket.io")(http);    // Esto contiene el servidor HTTP y la Aplicacion express



/**
* Cuando la app reciba una peticion get de la raiz ejecute una funcion que recibe
* un request y un response y que  mande un estado 200 y muestre hola mundo
**/

app.get('/',function(req,res){
    res.sendfile('index.htm');     //res.status(200).send(div);
});


io.on('connection', function(socket){
    console.log('Un usuario se acaba de conectar');
});


http.listen(8080, function() {
    console.log("El servidor esta corriendo en http://localhost:8080");
});
