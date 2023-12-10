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

const microphone = {
  brand: "Fifine",
  indictor: true,
  price: 8000,
  color: "Black",
  startRecording() {
    // console.log("recording started");
  },
  stopRecording() {
    // console.log("recording stopped");
  },
};

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

const arr = [
  ["brand", "Fifine"],
  ["indictor", true],
  ["price", 8000],
  ["color", "Black"],
];

console.log(Object.fromEntries(arr));
