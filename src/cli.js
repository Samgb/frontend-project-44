import readlineSync from 'readline-sync';

// Массив для хранения введённых значений
const inputHistory = {};

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log('Hello!');
  }
  inputHistory.name = name;
};

export default askName;

export { inputHistory };
