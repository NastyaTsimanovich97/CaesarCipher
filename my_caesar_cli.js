#!/usr/bin/env node

const commander = require('commander');
const { trim } = require('lodash');

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
    if (!value?.action || !value?.shift) {
      process.exit(9);
    }

    const inputFileName = trim(value?.input);

    const outputFileName = trim(value?.output);

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

    const encodeData = code(inputData, value.action, value.shift);

    if (!outputFileName) {
      readlineStreams.writeStringStdout(encodeData);
    } else {
      writeOutputFile(outputFileName, encodeData);
    }
    
  })


commander.parse(process.argv)
