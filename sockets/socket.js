const { io } = require('../index');


// Mensagens de sockets

io.on('connection', client => {
    console.log ('Cliente conectado');         

    client.on('disconnect', () => { 
        console.log('Cliente desconectado')
    });

    client.on('mensagem', (payload)=> {
        console.log('Mensagem!!!', payload);


            io.emit('mensagem', {admin: 'Nova mensagem'});

    });

  });