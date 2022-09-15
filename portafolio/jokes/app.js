// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("response", res);
//   })
//   .catch((e) => {
//     console.log("error", e);
//   });
// _____________________
// const getSWPerson = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//   } catch (e) {
//     console.log("something went wrong");
//   }
// };

// getSWPerson(10);
//_________________________________________________

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  console.log(jokeText);
  const newLi = document.createElement("li");
  newLi.append(jokeText);
  jokes.append(newLi);
};
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "no jokes svsilsble, sorry!";
  }
};
button.addEventListener("click", addNewJoke);
