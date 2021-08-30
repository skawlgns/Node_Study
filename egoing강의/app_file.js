const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;

app.set("views", "./views_file");
app.set("view engine", "jade");

app.get("/topic/new", (req, res) => {
  fs.readdir("data", (err, files) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
    res.render("new", { topics: files });
  });
});

app.get("/topic", (req, res) => {
  //글 목록 표시
  fs.readdir("data", (err, files) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
    res.render("view", { topics: files });
  });
});
app.get("/topic/:id", (req, res) => {
  let id = req.params.id;
  fs.readdir("data", (err, files) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
    fs.readFile("data/" + id, "utf8", (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      }
      res.render("view", {
        topics: files,
        title: id,
        description: data,
      });
    });
  });
});
app.post("/topic", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  fs.writeFile("data/" + title, description, (err) => {
    if (err) {
      res.status(500).send("Internal Server Error");
    }
    res.redirect("/topic/" + title);
  });
});

app.listen(port, () => {
  console.log("Connected!!");
});
