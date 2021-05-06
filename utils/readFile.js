const fs = require('fs');

exports.readInputFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err)
            reject(err);
        else
            resolve(data);
    });
  });
};
