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
