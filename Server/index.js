var express = require('express');
var app = express();
var path = require("path");
var mysql = require("mysql");
var http = require('http').Server(app);
var io = require('socket.io')(http);
var router = express.Router();

var pool = mysql.createPool({
	connectionLimit : 100,
	host 			: 'localhost',
	user			: 'root',
	password		: 'password',
	database		: 'socketDemo',
	debug			: false   
});

var db = require("./db");
var routes = require('../Routes/')(router,mysql,pool);

app.use('/',router);

http.listen(3000,function(){
	console.log("Lisen on 3000");
});

//Handle socket operation.
//on any connection listen for events.

io.on('connection', function(socket){
	console.log('We have user connected !');
	//This event will be emitted from client when someone add comments.
	socket.on('comment added', function(data){
		//Add the comment in database
		db.addComment(data.user,data.comment,mysql,pool,function(error,result){
			if(error){
				io.emit('error');
			}else{
				//on successful adition, emit event for client.
				socket.broadcast.emit("notify everyone",{user : data.user, comment : data.comment});
			}
		});
	});
});