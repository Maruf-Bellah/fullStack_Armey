// const names = [
//   "HM Nayeem",
//   "Aditya Chakraborty",
//   "Abu Rayhan",
//   "Shaker Hossain",
//   "Akib Ahmad",
//   "Alvi Chowdhury",
// ];

// let index = 4;
// let person = names[index++];

// setInterval(() => {
//   //   person = names[index++];
//   console.log(person);

//   if (index === names.length) {
//     index = 4;
//   }
// }, 1000);

// const persons = ["Rayhan", "Alvi", "Anik", "Arjun", "Ayman", "Maruf", "Bellah"];

// console.log(persons[1]);
// console.log(persons[2]);
// console.log(persons[3]);
// console.log(persons[4]);
// console.log(persons[5]);
// console.log(persons[6]);

// for (let i = 0; i < 5; i++) {
//   //   console.log(persons[i], persons[i].toLocaleLowerCase());
// }

// const nums = [1, 2, 3, 4, 5, 6];
// const bools = [true, true, false, false];
// const nulls = [null, null, null];
// const undefineds = [undefined, undefined, undefined];
// const arrayOfArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const mixed = [true, null, "Str", 5, [12, 2, 4]];
// 1;

// console.log(mixed);

// const students = ["Abu", "Rayhan", "rayhan@example.com", 25, true];
// sendEmail(students[0]);

// function sendEmail(email) {
//   console.log("sending Email" + " " + email);
// }

// const student = {
//   firstName: "Maruf",
//   lastName: "Bellah",
//   email: "mdmaruf5511507@gamil.com",
//   age: 25,
//   attend: true,
// };

// sendEmails(student["firstName"], student["lastName"]);

// function sendEmails(email, name) {
//   console.log("sending Email" + " " + email, name);
// }

// const student1 = {
//   firstName: "Abu",
//   secondName: "Rayhan",
//   email: "rayhan@example.com",
//   age: 25,
//   attend: true,
// };

// const student2 = {
//   firstName: "Alvi",
//   secondName: "Chowdhury",
//   email: "alvi@example.com",
//   age: 25,
//   attend: true,
// };

// const student3 = {
//   firstName: "Akib",
//   secondName: "Ahmad",
//   email: "akib@example.com",
//   age: 25,
//   attend: true,
// };

// const allStudents = [student1, student2, student3];

// for (let i = 0; i < allStudents.length; i++) {
//   showStudent(allStudents[i].email);
// }

// function showStudent(email) {
//   console.log("sending email to all student " + " " + email);
// }

// allStudents.forEach((item) => console.log("email", " " + item.email));

// allStudents.forEach((item) => {
//   console.log("Eamil" + " " + item.email);
// });

// function nameOfFunction(name) {
//   if (!name) {
//     console.log("Please write your name");
//   } else {
//     console.log("Hello" + " " + name);
//   }
// }

// nameOfFunction("Maruf Bellah");
// nameOfFunction("Bellah");
// nameOfFunction();

// function generateRandomNumberMax(max) {
//   const randomNumber = Math.floor(Math.random() * max);
//   return randomNumber;
// }

// console.log(generateRandomNumberMax(1000));
// function generateRandomNumber(min, max) {
//   const randomNumber = Math.floor(Math.random() * min + (max - min));
//   return randomNumber;
// }

// console.log(generateRandomNumber(5, 10));
// console.log(generateRandomNumber(15, 100));

// // every code uncommented for pushing github================

const makeObjectLikeArray = {
  firstName: "Maruf",
  lastName: "Bellah",
  age: 28,
  rollNo: 5,
  position: "Web Developer",
  class: "Inter 1fs",
};

makeObjectLikeArray.firstName = "Ayesha bellah";

delete makeObjectLikeArray.age;
for (let show in makeObjectLikeArray) {
  console.log(makeObjectLikeArray[show]);
}

makeObjectLikeArray.city = "Dhaka";
makeObjectLikeArray["Name"] = "Maruf Bellah";

console.log(makeObjectLikeArray);
