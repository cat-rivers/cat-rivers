const express = require("express");
const PORT = 3001;
const path = require("path");
const app = express(); // create express app
const fs = require("fs");

// read db.json
const getCampsites = () => {
  const data = fs.readFileSync("./db/campsites.json");
  return JSON.parse(data.toString());
};

// add middlewares

app.use(express.static(path.resolve(__dirname, "../react-app/build")));

// app.use(express.static("public"));

// app.get("/api", (req, res) => {
//   res.send("This is from express.js");
// });

app.get("/campsites", (req, res) => {
  res.json(getCampsites());
});

app.post("/campsites", (req, res) => {});
const createCampsite = newPost => {
  return axios.post(baseUrl, newPost).then(response => response.data);
};

//or return it as json
app.get("/api", (req, res) => {
  res.json({ message: "hello from your api!" });
});

/* when the request comes to the server for any route and route you’re trying to 
access does not exist on the server-side, we will be sending the index.html 
file from the build folder so your client-side route (React App) will handle that 
and will display the client-side route page.*/

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../react-app/build", "index.html"));
});

// start express server on port 5000
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
