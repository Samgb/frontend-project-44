import {inputHistory} from "./cli.js";
import readlineSync from "readline-sync";

export const generateRandomNum = () => {
   return Math.floor(Math.random() * 100);
}

export const numberIsEven = (num) => {
   return num % 2 === 0 ? 'yes' : 'no';
}

export const randomOperator = () => {
   const operators = ['+', '-', '*'];
   return operators[Math.floor(Math.random() * operators.length)];
}

export const randomNumber = (...args) => {
   const symbol = [...args];
   return symbol[Math.floor(Math.random() * symbol.length)];
}

export const calculations = (num1, num2, operator) => {
   switch (operator) {
      case '+':
         return num1 + num2;
      case '-':
         return num1 - num2;
      case '*':
         return num1 * num2;
   }
}

export const askMessage = (...args) =>  {

   const ask = readlineSync.question(...args);
   return ask;
}

export const isPrime =(num) => {
   if (num <= 1) return false; // 0 и 1 не являются простыми числами
   if (num <= 3) return true; // 2 и 3 — простые числа

   // Если число делится на 2 или на 3, оно не простое
   if (num % 2 === 0 || num % 3 === 0) return false;

   // Проверка возможных делителей от 5 до √num
   for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
   }

   return true; // Если число не делится ни на один из проверенных делителей, оно простое
}

// OLD
export const  isCorrect = (ask, callback) => {
   return Number(ask) === Number(callback) ? true : false;
}

export const askRightAnswer = (numberQuestion = 0, callback) => {
   if (numberQuestion >= 3) {
      return console.log('Congratulations, ' + inputHistory.name + '!')
   }

   const randomNumber = generateRandomNum();
   console.log('Question: ' + randomNumber);

   const ask = readlineSync.question('Your answer: ');

   if (callback(randomNumber) === ask) {
      console.log('Correct!');
      askRightAnswer(numberQuestion + 1, callback);
   } else {
      console.log(`Let's try again, ${inputHistory.name}!`);
   }
}