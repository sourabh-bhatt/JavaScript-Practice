// console.log('1'); // sync

// // Async
// setTimeout(() => {
//     console.log('2')
// }, 3000)

// // Async
// Promise.resolve().then(() => {
//     console.log('4')
// })

// // Async
// setTimeout(() => {
//     console.log('3')
// }, 0)

// // Sync
// console.log('5');

// // Sync -- Constructor is always Synchronous
// const myPromise = new Promise((resolve, reject) => {
//     console.log('6')
//     // Async
//     resolve();

//     // Whenever async comes in to picture, our sync statement continues its execution.
//     console.log('7');
// })

// // Async
// myPromise.then(() => {
//     console.log('8');
// })

// function x(){
//     for (var i = 1; i <= 10; i++){
//       setTimeout(function (){
//       console.log(i);
//       }, i * 1000);
//     }
//     console.log("Learn")
//   }
//   x();

// function x() {

//   for (let i = 1; i <= 10; i++) {
//     console.log(i, ' from loop')

//     function close(i) {

//       setTimeout(function () {
//         console.log(i, ' from setTimeout');
//       }, i * 1000);

//     }

//     close(i);
//   }

//   console.log("Learn");
// }
// x();

// function x() {
//   for (var i = 1; i <= 10; i++) {
//     console.log(i, " from loop");

//     setTimeout(function () {
//       console.log(i, " from setTimeout");
//     }, i * 1000);
//   }

//   console.log("Learn");
// }
// x();

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0);
}

