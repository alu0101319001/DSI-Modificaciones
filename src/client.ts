import * as net from 'net';

if (process.argv.length != 4) {
    console.error('Introduce a Linux comand and arguments');
} else {
    const command = process.argv[2];
    const arg = process.argv[3];

    const client = net.connect({port: 60300});
    
    client.write(JSON.stringify({'type': 'execute',
    'command': command, 'arg': arg}) + '\n');

    let wholeData = '';
    client.on('data', (dataChunk) => {
        wholeData += dataChunk;
    });
    
    client.on('end', () => {
      const message = JSON.parse(wholeData);
      
      if (message.type === 'answerOK') {
        console.log('Result obtain of server:');
        console.log(message.output);
      } else if (message.type === 'answerERROR') {
        console.log('Error obtain of server:');
        console.log(message.output);
      }
    }); 
}

