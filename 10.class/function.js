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
    console.log("load last");
  }, 2000);
  setTimeout(() => {
    console.log("load first");
  }, 1000);
  test();
}

function test() {
  console.log("test");
}
// main()

// promise ========================

const isResolved = false;

// const promise = new Promise((resolve, reject) => {
//   if (isResolved) {
//     resolve("completed the true");
//   } else {
//     reject("something is went wrong");
//   }
// });

// console.log(promise);

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// function wait(ms) {
//     const promise = new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     });
//     return promise;
// };

// const wait = (ms) => new Promise((resolve)=> setTimeout(resolve, ms))
// wait(1000).then(() => {
//     console.log('Done in 1000ms');
// })

// wait(2000).then(() => {
//   console.log("Done in 2000ms");
// });

// const get = (url) => Promise.resolve();
// get(`/users?username=Maruf`)
//     .then((user) => {
//         return get(`/posts?user_id=${user.id}`);
//     })
//     .then((posts) => {
//         const latestPost = posts[0];
//         return get(`/comments?post_id=${latestPost.id}`);
//     })
//     .then((comments) => {
//         const latestComment = comments[0];
//         return get(`/users?username=${latestComment.username}`);

//     })
//     .then((user) => {
//         console.log(user);
//     })
//     .catch(() => {
//         console.log('Error');
//     });

// eta kicu buji nai =======================================

// const get = (url) => Promise.resolve();

// async function getUserName(username) {
//   try {
//     const mainUser = await get(`/users?username=${username}`);
//     const posts = await get(`/posts?user_id=${mainUser.id}`);
//     const comments = await get(`comments?post_id${posts[0].id}`);
//     const user = await get(`/users?username=${comments[0].username}`);
//     console.log(user);
//   } catch (e) {
//     console.log(e);
//   }
// }

// getUserName(url);

const axios = require("axios").default;
const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

async function getComments(username) {
  try {
    const { data: user } = await axios.get(`${USERS_URL}?username=${username}`);
    const { data: posts } = await axios.get(
      `${POSTS_URL}?userId=${user[0].id}`
    );
    const { data: comments } = await axios.get(
      `${COMMENTS_URL}?postId=${posts[0].id}`
    );

    const { data: userWithComment } = await axios.get(
      `${USERS_URL}?email=${comments[1].email}`
    );
    console.log(userWithComment);
  } catch (error) {
    console.log("Error Occurred", error.toJSON());
  }
}

getComments("Bret");