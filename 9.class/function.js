// function statement
function func() {}

// function expression
const myFunc = function () {};

// fat arrow function
const myFatArrowFn = () => {};

// pure function

function sum(a, b) {
  return a + b;
}

// console.log(sum(5,50));

// side effect
let limit = 100;
function changeLimit() {
  limit = 500;
}
// console.log(changeLimit(limit));
// console.log(limit);

// Pure
const arr = [1, 2, 3];
function add(arr, data) {
arr = [...arr, data]
return arr;
}
const now = add();
console.log(now());