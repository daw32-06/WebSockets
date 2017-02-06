var express = require('express');
var app = express();
var server = require("http").Server(app); // Esto crea el servidor HTTP
var io = require("socket.io")(server);
