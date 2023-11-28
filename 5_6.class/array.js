// array traversing=====================================

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]);
}

// array er protect element k 2 dara gun kore dekhaw==========

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  //   console.log(number * 2);
}

// array er sob Element er jog fol ber kore dekhaw==============

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  // sum = sum + numbers[i]
  sum += numbers[i];
  //   console.log(sum);
}

// console.log(sum);

// forEach er kaj holo e ekta ntun array , index o elem return kore==

numbers.forEach((elem, index, arr) => {
  //   console.log(elem * 10);
});

// forEach er moddhe je 3 ta object ace
numbers.forEach(function () {
  //   console.log(arguments);
});

// ekane arguments er moto paben , to object er moto kore na ==============
numbers.forEach(function (value, index, arr) {
  //   console.log(value, index, arr);
  //array nite gele apnak peramiter hisabe = value , index dite hobe
});

// console.log(sum2);

let sum2 = 0;
numbers.forEach(function (value, index, arr) {
  sum2 += value;
  //   console.log(sum2);
});

// console.log(sum2);

numbers.forEach(function (value, index, arr) {
  if (value % 2 == 0) {
    // console.log(value);
  }
});

// shudu prothom 4 tar element er jog fol ber korbo

let sum3 = 0;
numbers.forEach(function (value, index, arr) {
  if (index <= 4) {
    sum3 += value;
    // console.log(sum3);
  }
});

// console.log(sum3);

// এখন আমরা চাইছি এখান থেকে নাম্বার ছাড়া বাকি যা আছে সেগুলো বাদ দিয়ে শুধু নাম্বারগুলো ফিল্টার করে নিতে। সেটা আমরা ডিক্লারেটিভ ওয়েতে করতে চাইছি না। আমরা চাইছি ইম্পেরেটিভ ওয়েতে করতে। কিভাবে করতে পারি?

// আমরা এভাবে শুরু করতে পারি।

const arr = [1, 2, 3, null, false, 4, 5, "", "test", 6, 7];

// for (let i = 0; i <= arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     console.log(arr[i]);
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] !== "number") {
//     arr[i] = undefined;
//   }
// }

// console.log(arr); // [1, 2, 3, undefined, undefined, 4, 5, undefined, undefined, 6, 7];

// eta holo sei result ==================================

// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length - 1; j++) {
//     if (!arr[j] || typeof arr[j] !== "number") {
//       arr[j] = arr[j + 1];
//       arr[j + 1] = undefined;
//     }
//   }
//   if (arr[i] == undefined) {
//     count++;
//   }
// }
// arr.length -= count;

// console.log(arr);

// এখন যদি এই কাজটা ইম্পেরেটিভ ওয়েতে না করে ডিক্লারেটিভ ওয়েতে করতাম তাহলে অনেক সহজে করতে পারতাম।

const filterArray = arr.filter((val) => typeof val === "number");
// console.log(filterArray);

const newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == "number") {
    newArr.push(arr[i]);
  }
  // console.log(arr[i]);
}
console.log(newArr);
