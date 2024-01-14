const fs = require('fs');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;       // create random number
}

const randomNumbers = [];
for (let i = 0; i < 1000; i++) {
  randomNumbers.push(getRandomNumber(1, 2000));
}
const content = randomNumbers.join(`\n`);                         // put one in each line

fs.writeFile('random_numbers.txt', content, (err) => {            // write in file
  if (err) {
    console.error(err);
  } else {
    console.log('File written successfully');
  }
  timer();
});

function timer() {
  const startTime = new Date();
  console.log(startTime.toLocaleTimeString());

  const fileContent = fs.readFileSync('random_numbers.txt', 'utf-8');   // read numbers from file
  console.log(fileContent);

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