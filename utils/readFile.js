const fs = require('fs');

const errorText = 'Some error happens with input file. Please check your input file and restart the program!';

exports.readInputFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', async (err, data) => {
        if (err) {
          console.error(errorText);
          // process.exit(9);
          reject(err);
        } else {
          resolve(data);
        }
    });
  });
};
