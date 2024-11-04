#!/usr/bin/env node
import {
  generateRandomNum,
  askMessage,
  isPrime,
} from '../src/index.js';
import askName, { inputHistory } from '../src/cli.js';

askName();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const brainPrime = (num1, count = 0) => {
  if (count >= 3) {
    return console.log(`Congratulations, ${inputHistory.name}!`);
  }

  console.log(`Question: ${num1}`);
  const decision = isPrime(num1);

  const answer = askMessage('Your answer: ');

  if ((decision === true && answer === 'yes') || (decision === false && answer === 'no')) {
    console.log('Correct!');
    return brainPrime(generateRandomNum(), count + 1);
  }
  return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${decision}'. \n Let's try again, ${inputHistory.name}!`);
};

brainPrime(generateRandomNum(), 0);
