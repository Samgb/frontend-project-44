#!/usr/bin/env node
import askName from "../src/cli.js";
import {askMessage, generateRandomNum} from "../src/index.js";
askName();

const brainGames = (num1, num2) => {
   askMessage('Your answer:', `${num1}`, '+', `${num2}`);
}

brainGames(generateRandomNum(), generateRandomNum());