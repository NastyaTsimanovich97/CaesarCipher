const fs = require('fs');
const readlineStreams = require('./readlineStreams');

const errorText = 'Some error happens with output file. Please check your output file and restart the program!';

exports.writeOutputFile = (fileName, data) => {
  fs.readFile(fileName, 'utf8', (err, readData) => {
    if (err) {
      console.error(errorText);
      readlineStreams.writeStringStdout(data);
    } else {
      const writeableStream = fs.createWriteStream(fileName);
      writeableStream.write(`${readData}${readData ? ' ' : ''}${data}`);
      writeableStream.on('error', (err) => {
        console.error(errorText);
        readlineStreams.writeStringStdout(data);
      });
      writeableStream.on('end', () => {
        process.exit(0);
      });
    }
  });
};
