const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require("./route/router");
const bodyParser = require("body-parser");

app.use(bodyParse.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(router);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("서버 개통!");
  }
});
