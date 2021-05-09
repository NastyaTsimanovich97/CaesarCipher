const fs = require('fs');

const errorText = 'Some error happens with input file. Please check your input file and restart the program!';

exports.readInputFile = async (fileName) => {
  const fileStream = fs.createReadStream(fileName, 'utf8');
  const chunks = [];
  return new Promise((resolve, reject) => {
    fileStream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    fileStream.on('error', (err) => {
      console.error(errorText);
      reject(err);
    });
    fileStream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  });
};
