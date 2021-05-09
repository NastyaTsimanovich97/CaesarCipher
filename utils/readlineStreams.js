const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

const getUserInput = () => {
  return new Promise((resolve) => {
    rl.question('Please, enter encode string: ', (encodeSting) => {
      console.log(`String: ${encodeSting}`);

      resolve(encodeSting);
    
      rl.close();
    });
  });
};

const writeStringStdout = (data) => {
  rl.write(`${data}`);
  process.exit(0);
};

module.exports = {
  getUserInput,
  writeStringStdout,
};
