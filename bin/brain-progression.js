#!/usr/bin/env node
import {
   numberIsEven,
   askRightAnswer,
   randomOperator,
   randomNumber,
   calculations,
   generateRandomNum,
   askMessage, isCorrect
} from "../src/index.js";
import askName, {inputHistory} from "../src/cli.js";

askName();

console.log('Find the greatest common divisor of given numbers.');

const brainProgression = (count = 0) => {

   if (count >= 3) {
      return console.log('Congratulations, ' + inputHistory.name + '!');
   }

   const arrNumbers = []
   arrNumbers.push(generateRandomNum());
   const progressive = randomNumber(2, 3, 4, 5, 6);

   for (let i = 0; i < 10; i++) {
      arrNumbers.push(arrNumbers[i] + progressive)
   }

   const randomArr = randomNumber(0,1,2,3,4,5,6,7,8,9);
   const decision = arrNumbers[randomArr];
   arrNumbers[randomArr] = '..';

   const stringArr = arrNumbers.join(' ');
   console.log('Question:', stringArr);
   const answer = askMessage(`Your answer: `);

   if (isCorrect(answer, decision)) {
      console.log('Correct!');
      brainProgression(count + 1);
   } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${decision}'. \n Let's try again, ${inputHistory.name}!`);
   }
}

brainProgression(0);

