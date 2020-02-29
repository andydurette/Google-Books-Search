const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require('axios');
require('dotenv/config');

//const dbConfig = process.env.MONGODB_URI;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Recieve credentials

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

 /* app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  }); */
}

// Define API routes here
/*  GET REQUEST */
app.post('/api/books', async (req, res) => {
    let searchQuery = req.body.searching;
    const googleConfig = process.env.GOOGLE_BOOKS;
    let response = await axios(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${googleConfig}`);
    let data = await response;
    res.send(data.data);
});


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
