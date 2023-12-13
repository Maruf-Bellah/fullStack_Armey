// Function Template==================

function name_of_function(/*input something*/) {
  // function body
  // any valid js code
  // return a result
}

// Function Pseudocode ====================

/*
 * Name: Human_Lifecycle
 * Param: human_name
 * :human_name, awake from sleep
 * :human_name, go to washroom
 * :human_name, take breakfast
 * :human_name, go to school/college/office
 * :human_name, Return from office
 * :human_name, Take dinner
 * :human_name", Go to sleep
 */

// Call Human_Lifecycle for 'Abu Musa'
// Call Human_Lifecycle for 'Easin Islam'
// Call Human_Lifecycle for 'Saiful Islam'
// Call Human_Lifecycle for 'Akib Ahmed'
// Call Human_Lifecycle for 'Alamin Mir'

/*
 * Function: Sleep
 * Param: name
 * Definition: How to sleep
 */

/*
 * Function: Awake
 * Param: name
 * Definition: How to awake
 */

/*
 * Function: Eat
 * Param: name
 * Param: Time
 * Definition: How to eat
 */

/*
 * Function: Walk
 * Param: name
 * Param: Destination
 * Definition: How to walk
 */

/*
 * Function: Study
 * Param: name
 * Definition: How to study
 */

/*
 * Function: Work
 * Param: name
 * Definition: How to work
 */

/*
 * Function: Job_Holder_Lifecycle
 * Param: name
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Walk -> name, 'office'
 * - Work -> name
 * - Eat -> name, 'lunch'
 * - Walk -> name, 'home'
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

/*
 * Function: Student Lifecycle
 * Param: name
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Study -> name
 * - Eat -> name, 'lunch'
 * - Study -> name
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

// Students_Lifecycle -> 'Faruk'
// Students_Lifecycle -> 'Elias'
// Students_Lifecycle -> 'Faisal'

// Job_Holder_Lifecycle -> 'Musa'
// Job_Holder_Lifecycle -> 'Akib'
// Job_Holder_Lifecycle -> 'Bipon'

// Function code of above psuedocode ==================

function sleep(name) {
  console.log(`${name} is sleeping`);
}

function awake(name) {
  console.log(`${name} is awake`);
}

function eat(name, time) {
  console.log(`${name} is is taking ${time}`);
}

function walk(name, destination) {
  console.log(`${name} is walkingg to ${destination}`);
}

function study(name) {
  console.log(`${name} is stadying`);
}

function work(name) {
  console.log(`${name} is working`);
}

function jobHolerLifecycle(name) {
  awake(name);
  eat(name, "breakfast");
  walk(name, "coffee");
  work(name);
  eat(name, "lunch");
  walk(name, "home");
  eat(name, "dinner");
  sleep(name);
}

// jobHolerLifecycle("Maruf bellah");

// console.log("=============================================");

function studentLifecycle(name) {
  awake(name);
  eat(name, "breakfast");
  study(name);
  eat(name, "lunch");
  study(name);
  eat(name, "dinner");
  sleep(name);
}
// studentLifecycle('ayesha bellah')

// Steps of a function=======================================
// There are two steps of a function (1) Define , (2)invoke================

// Define a function

function testFunction() {
  const a = 10;
  const b = 20;
  const result = a + b + Math.max(a, b);
  console.log(result);
}
// Invoke a function=====
// testFunction();

// There are some problems in above defined function. We can't use the function for any value. For this reason we need to use the parameters.

function testFunction2(a = 10, b = 20) {
  const result = a + b + Math.max(a, b);
  console.log(result);
}
// testFunction2(100, 200) // Here 100 and 200 are arguments

// a and b are parameters. 10 and 20 are default values. If we don't pass any arguments in the function, it will take the default values as arguments. Now, what is arguments? Please see the below to learn that:

// Function Composition ========================

function sum(a, b) {
  console.log(a + b);
}

function sub(a, b) {
  console.log(a - b);
}
function time(a, b) {
  console.log(a * b);
}

// const a = 10;
// const b = 20;

// const r1 = sum(a, b); // 30
// console.log("R1", r1); // 'R1' undefined
// const r2 = sub(a, b); // -10
// console.log("R2", r2); // 'R2' undefined
// const r = time(r1, r2); // NaN
// console.log(r); // undefined

// এখানে এমন রেজাল্ট আসলো কেন? যখন আমরা কোনো ফাংশনের রেজাল্ট কোনো ভ্যারিয়েবলে স্টোর করে রাখতে চাইবো, তখন অবশ্যই ঐ ফাংশনকে কিছু না কিছু রিটার্ন করতে হবে। এখানে আমাদের ফাংশন কিছুই রিটার্ন করছে না। console.log() কিছুই রিটার্ন করে না। তাহলে যদি কিছু রিটার্ন না করে তাহলে এখানে undefined আসলো কোথা থেকে? আমাদের মনে রাখতে হবে জাভাস্ক্রিপ্ট ফাংশনে আমরা যদি বলে না দিই কি রিটার্ন করতে হবে তাহলে তা বাই ডিফল্ট undefined রিটার্ন করবে। সুতরাং আমাদের r1 ভ্যারিয়েবলে স্টোর হলো undefined, r2 তে স্টোর হলো undefined। এখন যদি undefined এর সাথে undefined গুণ করি তাহলে রেজাল্ট আসবে NaN, কারণ দুইটার কোনোটাই নাম্বার না। আর যেহেতু times() ও কিছু রিটার্ন করেনি তাই r এ স্টোর হলো undefined. এই সমস্যা থেকে মুক্তি পেতে হলে আমাদের console.log() এর পরিবর্তে ব্যবহার করতে হবে return। মনে রাখতে হবে যখনই আমাদের কোনো ফাংশনের রেজাল্ট কোথাও স্টোর করার প্রয়োজন হবে বা কোথাও ব্যবহার করার প্রয়োজন হবে তখন অবশ্যই অবশ্যই return ব্যবহার করতে হবে। আমরা একটু return দিয়ে দেখি।

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
function time(a, b) {
  return a * b;
}

const a = 10;
const b = 20;

// const funR = sum(a, b); // 30
// console.log("R1", funR); // 'funR' undefined
// const funR2 = sub(a, b); // -10
// console.log("funR2", funR2); // 'funR2' undefined
// const R = time(funR, funR2); // NaN
// console.log(R); // undefined

// const r = Math.abs(time(sum(a, b), sub(a, b)));
// console.log(r);

// Function is a first class citizen. Because we can treat function as a value.
// Benefits of a function treat as a value:
// we can store functions in a variable

function testFunction() {
  console.log("I am atest function");
}

// we can store function inside a variable ==============

const fn = testFunction;
// console.log(fn.toString());
// fn()

// we can store function inside an object / array=============

const arr = [fn, testFunction];
// console.log(arr[0]());
// console.log(arr[1]());

// const obj = {
//     fn:testFunction,
// }
// obj.fn()

// we can pass function as an argument

function fnArgument(argu) {
  return argu();
}
// fnArgument(fn)

function fnArgument1(maruf) {
  return maruf;
}
// fnArgument1(fn());

// we can also return a function from another function================

function returnFn() {
  return testFunction();
}
// returnFn()

// ফাংশন কনস্ট্রাকশন বুঝার আগে আমরা একটু আগে নিচের ফাংশনটা দেখি।

// function strToObj(str) {
//   let obj = {};
//   for (let s of str) {
//     if (s !== " ") {
//       obj[s] = s;
//     }
//   }
//   return obj;
// }

// console.log(strToObj("Maruf Bellah"));

// এবার এই ফাংশনকে আমরা কন্সট্রাক্টরের মাধ্যমে বানাবো।

const fn2 = new Function(
  "str",
  `let obj = {};
  for (let s of str) {
    if (s !== " ") {
      obj[s] = s;
    }
  }
  return obj;`
);

console.log(fn2('Maruf Bellah'));