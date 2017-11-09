//This is for my website
//var socket = io('http://192.154.231.67:8080/');
//This is for testing locally
var socket = io();

$('#wow').click(function () {
    console.log('click');
    socket.emit('generateMap',
    {message: "This is a new string at the end of file"},
    function() {
        console.log('emit genMap');
    });
});

socket.on('test', function (data) {
    console.log(data);
});

socket.on('newMap', function genTable(data) {
    console.log(data);
    var para = document.createElement("P");
    para.innerHTML = data;

    var paraDiv = document.getElementById("para");
    paraDiv.innerHTML = "";
    paraDiv.appendChild(para);
});
