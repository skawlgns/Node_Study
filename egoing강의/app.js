const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.locals.pretty = true; //temp 보기 좋게
app.set("view engine", "jade"); // 템플릿엔진 jade
app.set("views", "./views"); // 템플릿엔진 jade 세팅
app.get("/template", (req, res) => {
  //템플릿 사용
  res.render("temp", { time: Date(), _title: "Jade" });
});

app.use(express.static("public")); // 정적 파일
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/form", (req, res) => {
  res.render("form");
});

app.get("/form_receiver", (req, res) => {
  let title = req.query.title;
  let description = req.query.description;
  res.send(title + "," + description);
});

app.post("/form_receiver", (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  res.send(title + "," + description);
});

app.get("/topic/:id", (req, res) => {
  let topics = ["JavaScript is ...", "Nodejs is ...", "Express is ..."];
  let output = `
    <a href="/topic?id=0"> JavaScript </a><br>
    <a href="/topic?id=1"> NodeJs </a><br>
    <a href="/topic?id=2"> Express </a><br><br>
    ${topics[req.params.id]}
  `;
  res.send(output);
});

app.get("/topic/:id/:mode", (req, res) => {
  res.send(req.params.id + "," + req.params.mode);
});

//홈페이지에 접속했따라는 화면
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/route", (req, res) => {
  res.send('Hello, <img src="/img.jpg">');
});

app.get("/login", (req, res) => {
  res.send("Login Please");
});

app.listen(port, () => {
  console.log(`Conneted ${port} port!`);
});
