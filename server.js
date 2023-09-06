const app = require('./app');
const PORT = process.env.PORT || 3000;
const socket = require('socket.io');

const server=app.listen(PORT, ()=>{

    console.log('Server creado OK');

})

const io=socket(server);

io.on('connection', function(socket){

    console.log('Un Clinte se conecto'+" "+ socket.id);

})