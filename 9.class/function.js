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
// whit same arguments we get same results =============

const arrP = [1, 2, 3];
function add(arrP, data) {
  arrP = [...arrP, data];
  return arrP;
}
// const now = add(arrP, 100);
// console.log(now);

let arr = [1, 2, 3, 4, 5];
function sumArr() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(sumArr(arr));

// impure function ===================

let arr0 = [1, 2, 3, 4, 5];
function sumArr0() {
  let sum = 0;
  for (let i = 0; i < arr0.length; i++) {
    sum += arr0[i];
    console.log(sum); //affecting outside environment (side effect)
  }
  return sum;
}
// sumArr0(arr0);

// side Effect
const arr1 = [1, 2, 3];
function add(data) {
  return data;
}

// console.log(add(arr1)); // etar output onno vabe ashce keno ami jani na

// higher order function

function generateTwoRandomNumber(max, cd) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  const result = cd(random1, random2);
  return result;
}

function cd(ran1, ran2) {
  console.log(ran1, ran2);
  // let one = ran1;
  // let two = ran2;
  // // return [one, two].toLocaleString()
  // return {
  //   one: one, two: two
  // }
}

// generateTwoRandomNumber(100, cd)

// console.log(generateTwoRandomNumber(1000, (ran1, ran2) => ran1 + ran2));
// console.log(generateTwoRandomNumber(10, (ran1, ran2) => ran1 * ran2));
// console.log(generateTwoRandomNumber(10, (ran1, ran2) => ran1 *ran1 + ran2 * ran2));

// eta evabe na kore uporer moto korte paro ekta function lekeh sob kora jay ===============

function randomSum(max) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  return random1 + random2;
}

function randomSub(max) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  return random1 - random2;
}

function randomMulti(max) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  return random1 * random2;
}

function randomDiv(max) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  return random1 / random2;
}

console.log(randomSum(50));
console.log(randomSub(50));
console.log(randomMulti(50));
console.log(randomDiv(50));
