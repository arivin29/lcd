// var electron = require("electron");
var express = require("express");
var app = express();
var routes = require('./routers/indek');

app.set('views', './views'); // specify the views directory
app.set('view engine', 'ejs');

//=======================
//soket.io
var io = require('socket.io').listen(app.listen(5000));
/* Socket IO Start Over Here */
io.sockets.on('connection', function (socket) {
    socket.emit('message', {bt:'-00'});
    socket.emit('message','10');

        console.log('Client connected...');
    //socket.emit('message');
    socket.on('send', function (data) {
        console.log(data);
        io.sockets.emit('message', data);
    });
});



//========================
app.use('/', routes);
app.use(express.static('public'));


app.listen(3000, "127.0.0.1");
// electron.app.on("ready", function () {
//   var main = new electron.BrowserWindow({width: 800, height: 600});
//   main.on("closed", electron.app.quit);
//   main.webContents.openDevTools();
//   main.loadURL("http://127.0.0.1:3000/");
// });
