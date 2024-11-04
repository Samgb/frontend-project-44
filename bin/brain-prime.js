#!/usr/bin/env node
import {
  generateRandomNum,
  askMessage, isCorrect, isPrime
} from "../src/index.js";
import askName, {inputHistory} from "../src/cli.js";

askName();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const brainPrime = (count = 0, num1) => {

  if (count >= 3) {
    return console.log('Congratulations, ' + inputHistory.name + '!');
  }

  console.log('Question: ' + num1);
  const decision = isPrime(num1);

  const answer = askMessage(`Your answer: `);

  if (decision === true && answer === 'yes' || decision === false && answer === 'no') {
    console.log('Correct!');
    brainPrime(count + 1, generateRandomNum());
  } else {
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${decision}'. \n Let's try again, ${inputHistory.name}!`);
  }
}

brainPrime(0, generateRandomNum());

