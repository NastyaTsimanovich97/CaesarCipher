#!/usr/bin/env node

const commander = require('commander');

const { readInputFile } = require('./utils/readFile.js');
const { code } = require('./utils/code.js');
const { writeOutputFile } = require('./utils/writeFile');
const readlineStreams = require('./utils/readlineStreams');

commander
  .version('1.0.0')
  .description('Caesar cipher CLI tool.')

commander
  .option('-s, --shift <value>', 'a shift of caesar code', 0)
  .option('-i, --input [file]', 'path to input file')
  .option('-o, --output [file]', 'path to output file')
  .option('-a, --action [action_type]', 'action type encode/decode')
  .action(async(value) => {
    console.log(value)
    if (!value?.action || !value?.shift) {
      process.exit(9);
    }
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

    // console.log('inputData', inputData);

    const encodeData = code(inputData, value.action, value.shift);

    if (!value?.output) {
      readlineStreams.writeStringStdout(encodeData);
    } else {
      writeOutputFile(value?.output, encodeData);
    }
    
  })


commander.parse(process.argv)
