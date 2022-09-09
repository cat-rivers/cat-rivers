const tweetForm = document.querySelector("#tweetForm");
const tweetList = document.querySelector("#tweetList");

// const lis = document.querySelectorAll("li");
// for (let li of lis) {
//   li.addEventListener("click", function () {
//     li.remove();
//   });
// }

tweetForm.addEventListener("submit", function (e) {
  //   const usernameInput = document.querySelectorAll("input")[0];
  //   const tweetInput = document.querySelectorAll("input")[1];
  e.preventDefault();

  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  tweetList.append(newTweet);
};

tweetList.addEventListener("click", function (e) {
  e.target.nodeName === "LI" && e.target.remove();
});
