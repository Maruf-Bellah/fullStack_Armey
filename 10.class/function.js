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
        console.log('load last');
    }, 2000)
    setTimeout(() => {
        console.log('load first');
    }, 1000);
    test()
};

function test() {
    console.log('test');
}
main()