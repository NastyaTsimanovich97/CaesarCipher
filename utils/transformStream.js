const { readInputFile } = require('./readFile.js');
const { code } = require('./code.js');
const { writeOutputFile } = require('./writeFile');
const readlineStreams = require('./readlineStreams');


exports.transformStream = async () => {
  const inputFileName = value?.input;

  let inputData = '';

  if (!inputFileName) {
    inputData =  await readlineStreams.getUserInput();
  } else {
    try {
      inputData = await readInputFile(inputFileName);
    } catch {
      inputData = await readlineStreams.getUserInput();
    }
  }

  console.log('inputData', inputData);

  const encodeData = code(inputData, value.action, value.shift);
  return encodeData;
};
