const fs = require('fs');

exports.writeOutputFile = (fileName, data) => {
  fs.writeFile(fileName, data, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
  });
};
