// itarator ek dhoroner ekta object,  jeta bortomaner kotha jane and  vovisshote e kichu ache kina seta o jane

// We use iterator because we cannot pause a loop. When a loop starts it will not stop until the execution of last element. Let's look the below example:

const arr = [1, 2, 3, 4];

let index = 0;

function next() {
  return arr[index++];
}

// console.log(next());
// console.log(next());
// console.log(next());
// console.log(next());
// console.log(next());

// In iterator if there is no value it returns simply undefined.

const channel = "Maruf";
const chanelIterator = channel[Symbol.iterator]();

// console.log(chanelIterator.next());
// console.log(chanelIterator.next());
// console.log(chanelIterator.next());
// console.log(chanelIterator.next());
// console.log(chanelIterator.next());
// console.log(chanelIterator.next());


