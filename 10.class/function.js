// Synchronous ============
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);

// Asynchronous ============
// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);
// setTimeout(() => {
//   console.log(3);
// }, 0);
// setTimeout(() => {
//   console.log(4);
// }, 0);
// setTimeout(() => {
//   console.log(5);
// }, 0);
// setTimeout(() => {
//   console.log(6);
// }, 0);
// setTimeout(() => {
//   console.log(7);
// }, 0);

// console.log(8);

// callback function ===============

function main() {
  setTimeout(() => {
    console.log("load last");
  }, 2000);
  setTimeout(() => {
    console.log("load first");
  }, 1000);
  test();
}

function test() {
  console.log("test");
}
// main()

// promise ========================

const isResolved = false;

const promise = new Promise((resolve, reject) => {
  if (isResolved) {
    resolve("completed the true");
  } else {
    reject("something is went wrong");
  }
});

// console.log(promise);

promise
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });


// function wait(ms) {
//     const promise = new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     });
//     return promise;
// };

const wait = (ms) => new Promise((resolve)=> setTimeout(resolve, ms))
wait(1000).then(() => {
    console.log('Done in 1000ms');
})

wait(2000).then(() => {
  console.log("Done in 2000ms");
});