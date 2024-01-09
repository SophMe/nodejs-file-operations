// timer
// https://stackoverflow.com/questions/14249506/how-can-i-wait-in-node-js-javascript-l-need-to-pause-for-a-period-of-time
async function timer() {
  const startTime = new Date();
  console.log(startTime.toLocaleTimeString());

  const randomTime = Math.floor(Math.random() * 15000) + 1000;
  const seconds = Math.floor(randomTime /1000);
  const pluralSuffix = seconds === 1 ? '' : 's';

  console.log(`Waiting for ${seconds} second${pluralSuffix}...`);

  await sleep(seconds * 1000);
  // console.log(seconds); 
  const endTime = new Date();
  const waitTime = (endTime - startTime) / 1000;
  console.log(`Waiting time was ${waitTime} second${pluralSuffix}`);
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

timer();

// run in terminal with "node timer.js"

// create file with random numbers
// https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs

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
  console.log(content);
});

// fs.readFile('random_numbers.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     const numbersArray = data.split(',');
//     const numberOfNumbers = numbersArray.length;
//     console.log(`There are ${numberOfNumbers} numbers in the file: `);
//   };
// });