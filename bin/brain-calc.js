#!/usr/bin/env node
import {
  randomOperator,
  calculations,
  generateRandomNum,
  askMessage, isCorrect
} from '../src/index.js';
import askName, {inputHistory} from '../src/cli.js';

askName();

console.log('What is the result of the expression?');

const brainCalc = (num1, num2, count = 0) => {
  if (count >= 3) {
    return console.log(`Congratulations, ${inputHistory.name}!`);
  }

  const operator = randomOperator();
  console.log(`Question: ${num1} ${operator} ${num2}`);

  const answer = askMessage('Your answer: ');
  const decision = calculations(num1, num2, operator);

  if (isCorrect(answer, decision)) {
    console.log('Correct!');
    brainCalc(generateRandomNum(), generateRandomNum(), count + 1);
  } else {
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${decision}'. \n Let's try again, ${inputHistory.name}!`);
  }
};

brainCalc(generateRandomNum(), generateRandomNum(), 0);
