// timer
// https://stackoverflow.com/questions/14249506/how-can-i-wait-in-node-js-javascript-l-need-to-pause-for-a-period-of-time

const fs = require('fs');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumbers = [];
for (let i = 0; i < 1000; i++) {
  randomNumbers.push(getRandomNumber(1, 2000));
}
const content = randomNumbers.join(', ');

fs.writeFile('random_numbers.txt', content, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File written successfully');
  }
});

// console.log(content);

timer();

function timer() {
  const startTime = new Date();
  console.log(startTime.toLocaleTimeString());

  for (let i = 0; i < 100000; i++) {
    fs.readFileSync('random_numbers.txt');
  }

  const endTime = new Date();
  console.log(endTime.toLocaleTimeString());

  const waitTime = (endTime - startTime) / 1000;
  const pluralSuffix = waitTime === 1 ? '' : 's';
  console.log(`Reading time was ${waitTime} second${pluralSuffix}`);
}

// run in terminal with "node timer.js"