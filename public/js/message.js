var socket = io('http://localhost:8080/');


$('#wow').click(function () {
    socket.emit('generateMap',
    {message: "This is a new string at the end of file"},
    function() {
        console.log('emit genMap');
    });
});


socket.on('newMap', function genTable(data) {
    console.log(data);
    var para = document.createElement("P");
    para.innerHTML = data;

    var paraDiv = document.getElementById("para");
    paraDiv.innerHTML = "";
    paraDiv.appendChild(para);
});
