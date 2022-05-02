import * as net from 'net';
import {spawn} from 'child_process';

const server = net.createServer((connection) => {
  console.log('A client has connected.');

  connection.on('data', (dataJSON) => {
    const message = JSON.parse(dataJSON.toString());

    if (message.type === 'execute') {
      console.log('Ejecutando comando del cliente...');
      const spwCommand = spawn(message.command, [message.arg]);
  
      let spwOut = '';
      spwCommand.stdout.on('data', (piece) => {
        spwOut += piece;
      });

      connection.on('end', () => {
        clearTimeout(timer);
      });

      let out = '';
        
      spwCommand.on('close', () => {
        console.log('Devolviendo respuesta del comando al cliente...');
        out = JSON.stringify({'type': 'answerOK',
         'command': message.comand,
         'output': spwOut}) + '\n';
      });
  
      spwCommand.stderr.on('data', (err) => {
        console.log('Devolviendo error al cliente...');
        out = JSON.stringify({'type': 'answerERROR',
        'command': message.comand,
        'output': err.toString()}) + '\n';
      });

      spwCommand.on('error', (err) => {
        console.log('Devolviendo error al cliente...');
        out = JSON.stringify({'type': 'answerERROR',
        'command': message.comand,
        'output': err}) + '\n';
      });

      const timer = setTimeout(() => {
        connection.write(out);
        connection.end();
      }, 500);
    } 
  });

  connection.on('close', () => {
    console.log('A client has disconnected');
  });
});

server.listen(60300, () => {
  console.log('Waiting for clients to connect.');
});
