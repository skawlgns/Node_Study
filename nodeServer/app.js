const express = require("express");
const app = express();
const port = 3000;
const router = require("./router/index");

app.listen(port, () => {
  console.log("start! port " + port);
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(router);
