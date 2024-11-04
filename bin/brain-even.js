#!/usr/bin/env node
import {generateRandomNum, numberIsEven, askRightAnswer} from "../src/index.js";
import askName, {inputHistory} from "../src/cli.js";

askName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

askRightAnswer(0, numberIsEven);

