var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);



http.listen(8005, function () {
    console.log('Listening to port 8005');
});

io.on('connection', function (socket) {
    socket.on("user_connected", function (user_id) {
        users[user_id] = socket.id;
        io.emit('updateUserStatus', users);
        console.log("user connected "+ user_id);
    });

    // socket.on('disconnect', function() {
    //     var i = users.indexOf(socket.id);
    //     users.splice(i, 1, 0);
    //     io.emit('updateUserStatus', users);
    //     console.log(users);
    // });

    // socket.on('joinGroup', function(data) {
    //     data['socket_id'] = socket.id;
    //     if (groups[data.group_id]) {
    //         console.log("group already exist");
    //         var userExist = checkIfUserExistInGroup(data.user_id, data.group_id);

    //         if (!userExist) {
    //             groups[data.group_id].push(data);
    //             socket.join(data.room);
    //         } else {
    //             var index = groups[data.group_id].map(function(o) {
    //                 return o.user_id;
    //             }).indexOf(data.user_id);

    //             groups[data.group_id].splice(index,1);
    //             groups[data.group_id].push(data);
    //             socket.join(data.room);
    //         }
    //     } else {
    //     console.log("nwe group");
    //         groups[data.group_id] = [data];
    //         socket.join(data.room);
    //     }

    //     console.log('socket-id: '+ socket.id+' - user-id: '+data.user_id);
    //     console.log(groups);
    // });
});
