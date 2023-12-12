// const microphone = {
//   brand: "Fifine",
//   indictor: true,
//   price: 8000,
//   color: "Black",
//   startRecording() {
//     // console.log("recording started");
//   },
//   stopRecording() {
//     // console.log("recording stopped");
//   },
// };

// console.log(microphone);
// console.log(microphone.startRecording(), microphone.stopRecording());
// console.log(microphone.stopRecording());

// const testObj = new Object();
// testObj.name = "est Object";
// testObj.time = new Date().toLocaleDateString();
// console.log(testObj);

// const microphone = {
//   brand: "Fifine",
//   indictor: true,
//   price: 8000,
//   color: "Black",
//   startRecording() {
//     // console.log("recording started");
//   },
//   stopRecording() {
//     // console.log("recording stopped");
//   },
// };

// Object.freeze(microphone);
// microphone.newProperty = "new Property here start";
// console.log(Object.keys(microphone));
// console.log(Object.values(microphone));

// Object.keys() অবজেক্টের সব keys অ্যারে আকারে রিটার্ন করবে এবং Object.values() অবজেক্টের সব values অ্যারে আকারে রিটার্ন করবে। এখন এগুলো আমাদের কি দরকার? আমরা তো এগুলো ছাড়াও লুপ চালিয়ে কী এবং ভ্যালু বের করে আনতে পারি এভাবে-

// for (let k in microphone) {
//   console.log(k, microphone[k]);
// }

// const empty = {};
// console.log(empty);
// console.log(Boolean(empty));

// আমরা যদি জানতে চাই আমাদের অবজেক্টটা সত্যিই ফাঁকা কিনা তাহলে এভাবে পারবো না। কারণ ফাঁকা অবজেক্ট, ফাঁকা অ্যারে সবসময় true রিটার্ন করবে। সেক্ষেত্রে আমরা Object.keys() এর সাহায্য নিবো।

// const empty = {};
// console.log(Object.keys(empty));

// এখন ফাঁকা অ্যারেও তো true রিটার্ন করবে কারণ ফাঁকা অ্যারেও একটা truthy value. আমাদের অবজেক্ট প্রোপারলি ফাঁকা কিনা তা জানার জন্য আমাদেরকে নিচের কাজটা করতে হবে।

// const empty = {};
// console.log(Object.keys(empty).length === 0);

// console.log(Object.entries(microphone));

// এখন ধরেন আমাদের কাছে একটা অ্যারে আছে। আমরা চাইছি সেটা থেকে অবজেক্ট বানাতে। তা জন্য আমাদের ব্যবহার করতে হবে fromEntries মেথডটি।

// const arr = [
//   ["brand", "Fifine"],
//   ["indictor", true],
//   ["price", 8000],
//   ["color", "Black"],
// ];

// console.log(Object.fromEntries(arr));

// Function vs Method ===============================

// const microphone = {
//   brand: "Fifine",
//   indictor: true,
//   price: 8000,
//   color: "Black",
//   startRecording() {
//     console.log("recording started");
//   },
//   stopRecording() {
//     console.log("recording stopped");
//   },
// };

// function startRecording() {
//   console.log("recording started");
// }

// startRecording(); // function

// microphone.startRecording(); // method

// Object as a Data Structure  ==================================

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Array==========================================

// আমাদের সমস্ত ছাত্রের ইনফরমেশন আমরা অ্যারেতে স্টোর করে রাখি এখন।

// const students = [
//   {
//     id: uuidv4(),
//     name: "Md Al-Amin",
//     email: "alamin@test.com",
//   },
//   {
//     id: uuidv4(),
//     name: "Akib Ahmed",
//     email: "akib@test.com",
//   },
//   {
//     id: uuidv4(),
//     name: "Elias Emon",
//     email: "elias@test.com",
//   },
// ];

// console.log(students);

// const students = [
//   {
//     id: "67de71e5-0eac-474f-ab51-850ba9b31ed5",
//     name: "Md Al-Amin",
//     email: "alamin@test.com",
//   },
//   {
//     id: "ebdf6b78-c32b-4b1d-8574-e8c655b05c1e",
//     name: "Akib Ahmed",
//     email: "akib@test.com",
//   },
//   {
//     id: "ee729e84-a84e-4adf-b32c-4647a7114d5b",
//     name: "Elias Emon",
//     email: "elias@test.com",
//   },
// ];

// create data =========================

// students.push({
//   id: "0a2c956c-a9f4-48b9-83fa-551b432dfb2b",
//   name: "Maruf Bellah",
//   email: "maruf@gmail.com",
// });

// console.log(students);

// update data =========================

// const idToUpdate = "ee729e84-a84e-4adf-b32c-4647a7114d5b";
// const updatedData = {
//   name: "Habiba Akhtar",
//   email: "habiba@test.com",
// };

// let updateObj = students.find((item) => item.id === idToUpdate);

// কিছুই আপডেট হলো না। কারণ আমরা অবজেক্ট অ্যাসাইন করছি। আর যেহেতু অ্যাসাইন করছি সেহেতু এর রেফারেন্সও আলাদা হয়ে গেছে। আলাদা রেফারেন্সের কারণে আমার আপডেট কাজ করছে না। এবার আসি ইনডেক্স বের করে কিভাবে আপডেট করতে পারি সেটা নিয়ে।

// let updateIndex = students.findIndex((item) => item.id === idToUpdate);
// students[updateIndex] = {
//   ...students[updateIndex],
//   ...updatedData,
// };
// console.log(students);

// তিনটা ডট দেয়াকে জাভাস্ক্রিপ্টে বলে স্প্রেড অপারেটর। এর মানে হলো অরিজিনাল অবজেক্টে যা যা আছে সবই থাকবে। আর নতুন ডাটা অনুযায়ী সেটা আপডেট হবে। যখন কোনো কিছু রিঅ্যাসাইনের কাজ আসবে তখন আমরা find ব্যবহার না করে findIndex ব্যবহার করবো। এই আপডেট করা মোটামুটি রকমের কমপ্লেক্স। তাই এর কমপ্লেক্সিটি আমরা O(n) হিসেবে ধরতে পারি।

// delete =============================

// আমরা যদি আমাদের upodatedIndex ডিলিট করতে চাই তাহলে এভাবে লিখতে হবে

// splice ---------

// students.splice(updateIndex);
// console.log(students);

// filter ------------

// console.log(students);

// const filterStudents = students.filter((item) => item.id === idToUpdate);
// console.log("-------------------------------------------------------------");

// console.log(filterStudents);
// console.log("-------------------------------------------------------------");

// console.log(students);

// Easily Traverse===========================

// অ্যারের ক্ষেত্রে ট্রাভার্স করা অনেক সহজ। ধরি আমরা ছাত্রদের নাম জানতে চাইছি। তিনভাবে আমরা অ্যারে ট্রাভার্সের মাধ্যমে নাম বের করে আনতে পারি। এগুলো হলো। for loop, for in loop, for of loop। নিচে তিনটারই উদাহরণ দেয়া হলো।

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].name);
// }

// for (let i in students) {
//   console.log(students[i].name);
// }

// for (let i of students) {
//   console.log(i.name);
// }


// Object Over Array=============================

const students = {
  "67de71e5-0eac-474f-ab51-850ba9b31ed5": {
    id: "67de71e5-0eac-474f-ab51-850ba9b31ed5",
    name: "Md Al-Amin",
    email: "alamin@test.com",
  },
 "ebdf6b78-c32b-4b1d-8574-e8c655b05c1e": {
    id: "ebdf6b78-c32b-4b1d-8574-e8c655b05c1e",
    name: "Akib Ahmed",
    email: "akib@test.com",
  },
  "ee729e84-a84e-4adf-b32c-4647a7114d5b": {
    id: "ee729e84-a84e-4adf-b32c-4647a7114d5b",
    name: "Elias Emon",
    email: "elias@test.com",
  },
}

// const std = {
//   id: uuidv4(),
//   name: "Feroz Khan",
//   email: "feroz@test.com",
// };
// students[std.id] = std;


// console.log(students);



// update ================

console.log(students);

const idToBeUpdated = "ee729e84-a84e-4adf-b32c-4647a7114d5b";
const updatedData = {
  name: "HM Azizul",
  email: "azizul@test.com",
};

students[idToBeUpdated] = {
  ...students[idToBeUpdated],
  ...updatedData,
};


// delete =================
// delete students[idToBeUpdated]

// console.log(students);