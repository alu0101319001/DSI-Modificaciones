import {accessSync, constants, watchFile} from 'fs';
import {spawn} from 'child_process';

if (process.argv.length !== 4) {
  console.log('Please, specify a file and select a field');
} else {
  const filename = process.argv[2];
	const field = process.argv[3];

	try {
		accessSync(filename, constants.F_OK); 
		console.log(`Starting to watch file ${filename}`);

		watchFile(`${filename}`, () => {
			console.log(`\nFile ${filename} has been modified`);
			const cut = spawn('cut', ['-d', ',', '-f', `${field}`, `${filename}`]);
			let cutOutput = '';
			cut.stdout.on('data', (piece) => cutOutput += piece);
			// cut.stdout.pipe(process.stdout);

			cut.on('close', () => {
				const cutArray = cutOutput.split(/\s+/);
				if (cutArray.length === 0) {
					console.log(`The field is not valid`);
				} else {
					console.log(cutArray.toString());
				}
			});
		});
	} catch (err) {
		console.log(`File ${filename} does not exist`);
	}
}
