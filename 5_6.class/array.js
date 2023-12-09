// // array traversing=====================================

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {
//   //   console.log(numbers[i]);
// }

// // array er protect element k 2 dara gun kore dekhaw==========

// for (let i = 0; i < numbers.length; i++) {
//   let number = numbers[i];
//   //   console.log(number * 2);
// }

// // array er sob Element er jog fol ber kore dekhaw==============

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   // sum = sum + numbers[i]
//   sum += numbers[i];
//   //   console.log(sum);
// }

// // console.log(sum);

// // forEach er kaj holo e ekta ntun array , index o elem return kore==

// numbers.forEach((elem, index, arr) => {
//   //   console.log(elem * 10);
// });

// // forEach er moddhe je 3 ta object ace
// numbers.forEach(function () {
//   //   console.log(arguments);
// });

// // ekane arguments er moto paben , to object er moto kore na ==============
// numbers.forEach(function (value, index, arr) {
//   //   console.log(value, index, arr);
//   //array nite gele apnak peramiter hisabe = value , index dite hobe
// });

// // console.log(sum2);

// let sum2 = 0;
// numbers.forEach(function (value, index, arr) {
//   sum2 += value;
//   //   console.log(sum2);
// });

// // console.log(sum2);

// numbers.forEach(function (value, index, arr) {
//   if (value % 2 == 0) {
//     // console.log(value);
//   }
// });

// // shudu prothom 4 tar element er jog fol ber korbo

// let sum3 = 0;
// numbers.forEach(function (value, index, arr) {
//   if (index <= 4) {
//     sum3 += value;
//     // console.log(sum3);
//   }
// });

// // console.log(sum3);

// // এখন আমরা চাইছি এখান থেকে নাম্বার ছাড়া বাকি যা আছে সেগুলো বাদ দিয়ে শুধু নাম্বারগুলো ফিল্টার করে নিতে। সেটা আমরা ডিক্লারেটিভ ওয়েতে করতে চাইছি না। আমরা চাইছি ইম্পেরেটিভ ওয়েতে করতে। কিভাবে করতে পারি?

// // আমরা এভাবে শুরু করতে পারি।

// // const arr = [1, 2, 3, null, false, 4, 5, "", "test", 6, 7];

// // for (let i = 0; i <= arr.length; i++) {
// //   if (typeof arr[i] === "number") {
// //     console.log(arr[i]);
// //   }
// // }

// // for (let i = 0; i < arr.length; i++) {
// //   if (typeof arr[i] !== "number") {
// //     arr[i] = undefined;
// //   }
// // }

// // console.log(arr); // [1, 2, 3, undefined, undefined, 4, 5, undefined, undefined, 6, 7];

// // eta holo sei result ==================================

// // let count = 0;
// // for (let i = 0; i < arr.length; i++) {
// //   for (let j = i; j < arr.length - 1; j++) {
// //     if (!arr[j] || typeof arr[j] !== "number") {
// //       arr[j] = arr[j + 1];
// //       arr[j + 1] = undefined;
// //     }
// //   }
// //   if (arr[i] == undefined) {
// //     count++;
// //   }
// // }
// // arr.length -= count;

// // console.log(arr);

// // এখন যদি এই কাজটা ইম্পেরেটিভ ওয়েতে না করে ডিক্লারেটিভ ওয়েতে করতাম তাহলে অনেক সহজে করতে পারতাম।

// const filterArray = arr.filter((val) => typeof val === "number");
// // console.log(filterArray);

// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "number") {
//     newArr.push(arr[i]);
//   }
//   // console.log(arr[i]);
// }
// // console.log(newArr);

// // upadate
// const update = [1, 2, 3, 4, 5, 6];
// update[3] = 1645564;
// // console.log(update);

// // এখন যদি ইনডেক্স জানা না থাকে তাহলে প্রথমে আগে ইনডেক্স বের করে নিতে হবে। এরপর আপডেট করা যাবে। যেমন

// // const arr2 = [
// //   { id: 1, value: 10 },
// //   { id: 2, value: 20 },
// //   { id: 3, value: 30 },
// //   { id: 4, value: 40 },
// //   { id: 5, value: 50 },
// // ];

// // const indexes = arr2.find((index) => index.id == 3);
// // const arr3 = arr2.splice(indexes, 1);
// // console.log(indexes);

// const obj = arr2.find((val) => val.id == 4);
// // console.log(obj);
// obj.value = 4000;
// // console.log(obj);
// // console.log(arr2[3] === obj);

// const a = { a: 10 };
// const b = { b: 10 };
// const c = a;
// console.log(a === c);
// console.log(a === b);

// Delete =====================================

// এবার আমরা অ্যারে থেকে কিভাবে কোনো ডাটা ডিলিট করতে হয় তা দেখবো। ইম্পেরেটিভ ওয়েতে কিভাবে ডাটা ডিলিট করতে হয় তা আমরা গেই দেখেছি অ্যারে ট্রাভার্সের উদাহরণে। এখানে আমরা দুইটা মেথড ইউজ করে ডিলিট করবো। splice and filter. এদের মধ্যে পার্থক্য হলো splice মেথড মিউটেবল এবং filter ইমমিউটেবল। কিভাবে আমরা একটু দেখি।

// const arr = [
//   { id: 1, value: 10 },
//   { id: 2, value: 20 },
//   { id: 3, value: 30 },
//   { id: 4, value: 40 },
//   { id: 5, value: 50 },
// ];

// const index = arr.findIndex((item) => item.id === 4);
// const arr1 = arr.splice(index, 1);
// console.log(arr1);

// console.log(arr);

// const methodFilter = arr.filter((item) => item.id !== 4);
// console.log(methodFilter);

// console.log(arr);

// map ============================

// const numbers = [1, 2, 3, 4, 5, 6];
// const strs = numbers.map((v) => 'maruf');
// console.log( strs);
// // console.log(Array.isArray(strs));

// filter ===========================

// const numbers = [1, 2, 3, 4, false, "", NaN, 5, 6];
// const filterArray = numbers.filter((v) => v);
// const strs = filterArray.map((v) => v.toString());
// console.log(strs);

// এক্ষেত্রে সকল truthy value রিটার্ন করে দিবে। কিন্তু এমন কিছু সিচুয়েশন আসবে যখন আমি truthy value চাইছি কিন্তু রিটার্ন করতে পারবো না সেক্ষেত্রে v এর আগে দুইটা !! বসিয়ে দিলেই truthy value পেয়ে যাবো।

// Reduce ================================

// const numbers = [1, 2, 3, 4, false, "", NaN, 5, 6];
// const filterArray = numbers.filter((v) => v).map((v) => v.toString())
// console.log(filterArray);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sum = numbers.reduce((a, b) => a + b);
// console.log(sum);

// numbers.reduce((acc, cur) => {
//   return acc;
// }, "");
// console.log(numbers);

//  এখন আমরা চাইছি const numbers = [1, 2, 3, 4, false, '', NaN, 5, 6]; এটা থেকে আমরা 1234falseNaN56 রিটার্ন করতে। সেটা করতে আমরা reduce মেথডের সাহায্য নিবো।

// const numbers = [1, 2, 3, 4, false, "", NaN, 5, 6];
// const result = numbers.reduce((acc, cur) => {
//   acc += cur.toString();
//   return acc;
// });

// console.log(result);

// এখন আমরা চাইছি এই অ্যারে থেকে শুধু truthy values নিবো। কোনো falsy ভ্যালু নিবো না। সেক্ষেত্রে আমরা একটা কন্ডিশন বসিয়ে দিতে পারি।

// আমরা যদি চাই প্রতিটার শেষে কমা (,) যোগ করবো সেটাও করতে পারি।==================
// const numbers = [1, 2, 3, 4, false, "", NaN, 5, 6];

// const result = numbers.reduce((acc, cur, index) => {
//   if (cur) {
//     acc += cur.toString() + (index < numbers.length - 1 ? "," : "");
//   }
//   return acc;
// }, "");

// console.log(result);

// আমরা চাইলে অ্যারের একটা শেইপও দিতে পারি। যেমন=========================

// const numbers = [1, 2, 3, 4, false, "", NaN, 5, 6];
// const result = numbers.reduce((acc, cur, i) => {
//   if (i === 0) {
//     acc += "[";
//   }

//   if (cur) {
//     acc += cur.toString() + (i < numbers.length - 1 ? "," : "");
//   }

//   if (i === numbers.length - 1) {
//     acc += "]";
//   }

//   return acc;
// }, "");
// console.log(result);

// আমরা চাইছি সকল truthy ভ্যালুর একটা অ্যারে। সেটাও reduce দিয়ে করা যায়।

// const numbers = [1, 2, 3, 4, false, "", NaN, 5, 6];
// const result = numbers.reduce((acc, cur) => {
//   if (cur) {
//     acc.push(cur.toString());
//   }
//   return acc;
// }, []);
// console.log(result);

// আমরা একটু map/filter অপারেশনের সাথে reduce অপারেশনের টাইম কমপ্লেক্সিটি তুলনা করে দেখি।

// const arr = [];

// for (let i = 1; i < 5000000; i++) {
//   arr.push(i);
// }

// console.time("not-optimized");
// arr.filter((item) => item % 2 === 0).map((item) => item * 2);
// console.timeEnd("not-optimized");

// console.time("optimized");
// arr.reduce((acc, cur) => {
//   if (cur % 2 === 0) {
//     acc.push(cur * 2);
//   }
//   return acc;
// }, []);
// console.timeEnd("optimized");

// আমরা একটু reduce মেথডের ইমপ্লিমেন্টেশনটা দেখি।

function myReduce(arr, cd, init) {
  let acc = init;
  for (let i = 0; i < arr.length; i++) {
    acc = cd(acc, arr[i], i, arr);
  }
  return acc;
}

// const sum = myReduce([1, 2, 3, 4], (a, b) => a + b, 0);
// console.log(sum);

// এবার একটু আমাদের ফাংশনটা টেস্ট করে দেখি।

const arr = [1, 2, "", false, 3, NaN, false, 4, 5, NaN, 6];

const result = myReduce(
  arr,
  (acc, cur) => {
    if (cur) {
      acc.push(cur ** 2);
    }
    return acc;
  },
  []
);
console.log(result);
