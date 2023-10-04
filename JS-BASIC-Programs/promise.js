// async function run() {
//   const myPromise = new Promise((onFulfilled, onReject) => {
//     // simulating a api call
//     setTimeout(() => {
//       globalThis.splitInNaway = () => {
//         console.log("splitInNways");
//       };
//       onFulfilled();
//     }, 3000);
//   });

//   await myPromise;

//   splitInNaway();
// }

// run();


// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

// function delay(ms) {
//   // your code
// }

// delay(3000).then(() => alert('runs after 3 seconds'))

const delay = (ms) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, ms);
});

// Creating promises using .then()
delay(3000).then(() => {
  console.log('Runs after 3 seconds');
  return delay(6000);
}).then(() => {
  console.log('Runs after 6 seconds');
  return delay(9000)
}).then(() => {
  console.log('Runs after 9 seconds');
  return delay(12000)
}).then(() => {
  console.log('Runs after 12 seconds');
})