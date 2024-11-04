#!/usr/bin/env node
import {
  generateRandomNum,
  askMessage,
  isCorrect,
} from '../src/index.js';
import askName, { inputHistory } from '../src/cli.js';

askName();

console.log('Find the greatest common divisor of given numbers.');

const brainGcd = (num1, num2, count = 0) => {
  if (count >= 3) {
    return console.log(`Congratulations, ${inputHistory.name}!`);
  }

  console.log(`Question: ${num1} ${num2}`);

  const answer = askMessage('Your answer: ');
  const decision = (a, b) => {
    if (b === 0) {
      return a;
    }
    return decision(b, a % b);
  };

  if (isCorrect(answer, decision(num1, num2))) {
    console.log('Correct!');
    return brainGcd(generateRandomNum(), generateRandomNum(), count + 1);
  } else {
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${decision(num1, num2)}'. \n Let's try again, ${inputHistory.name}!`);
  }
};

brainGcd(generateRandomNum(), generateRandomNum(), 0);
