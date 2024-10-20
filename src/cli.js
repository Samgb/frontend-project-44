import readlineSync from 'readline-sync';

const askName = () =>  {
   const name = readlineSync.question('May I have your name? ');
   name !== '' ? console.log(`Hello, ${name}!`) : console.log('Hello!');
}

export default askName;