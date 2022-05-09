import * as express from 'express';
// import {join} from 'path';
import {spawn} from 'child_process';

const app = express();

// app.use(express.static(join(__dirname, '../src/public')));

app.get('/execmd', (req, res) => {
    if (!req.query.cmd) {
        return res.send({
            error: 'A command has to be provied',
        });
    } else if (!req.query.arg) {
        return res.send({
            error: 'An argument has to be provied',
        });
    }
    console.log(req.query);
    const argsString: string = req.query.arg as string;
    let argsArray: string[];
    if (argsString === 'empty') {
        argsArray = [];
    } else {
        argsArray = argsString.split(' ');
    }
    const cmdSpawn = spawn(req.query.cmd as string, argsArray);

    let cmdOutput = '';
    cmdSpawn.stdout.on('data', (piece) => cmdOutput += piece);
    cmdSpawn.stderr.on('data', (err) => {
        return res.send({
            error: `Error in spawn - stderr: ${err}`,
        });
    });

    cmdSpawn.on('close', () => {
        return res.send({
            output: cmdOutput,
        });
    });

    cmdSpawn.on('error', (err) => {
        return res.send({
            error: `Error in spawn - error: ${err}`,
        });
    });
    return;
});

app.get('*', (_, res) => {
    return res.send({
        err: '<h1>404<h1>',
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
