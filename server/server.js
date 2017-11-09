// var mysql = require('mysql');
//
// var con = mysql.createConnection({
//   host: 'joshhall.me',
//   user: "joshhall_dev",
//   password: "LoganDarts",
//   database: "joshhall_Darts"
// });
//
// con.connect(function(err) {
//   if (err) {
//       console.log(err.code);
//       console.log(err.fatal);
//       throw err;
//   }
//   console.log("Connected!");
// });

const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

// const {generateMap, runPy} = require('./utils/sql');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 8080;

console.log(publicPath);

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
//var io = require('socket.io').listen(server);

app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});

io.on('connection', (socket) => {
    socket.emit('test', "whoop");
    console.log('connection');
    socket.on('generateMap', (map, callback) => {
        console.log(map.message);
        var newMessage = wow(map.message);
        newMessage.then((data) => {
            console.log(data);
            socket.emit('newMap', data);
            console.log('emit newmap');
        }). catch((err) => {
            console.log(err);
        });

       callback();
     });
});


const wow = ((message) => {
    return new Promise((res, rej) => {
        console.log(message);
        res(message);
    });
});
