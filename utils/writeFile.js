const fs = require('fs');
const readlineStreams = require('./readlineStreams');

const errorText = 'Some error happens with output file. Please check your output file and restart the program!';

exports.writeOutputFile = (fileName, data) => {
  fs.readFile(fileName, 'utf8', (err, readData) => {
    if (err) {
      console.error(errorText);
      readlineStreams.writeStringStdout(data);
    } else {
      fs.writeFile(fileName, `${data}`, 'utf8', (err, data) => {
        if (err) {
          console.error(errorText);
          readlineStreams.writeStringStdout(data);
        }
      });
    }
  });
};
