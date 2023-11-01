const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const book = require("./routes/book");
const MongoServer = require("./config/db");
const serverless = require("serverless-http");

MongoServer();

const app = express();
let corsOption = { origin: "*" };
app.use(cors(corsOption));

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("API is working");
});

app.use("/books", book);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
app.use(`/.netlify/functions/api`, router);
module.exports.handler = serverless(app);
