const express = require("express");
const app = express();
const port = 3000;

app.locals.pretty = true; //temp 보기 좋게
app.set("view engine", "jade"); // 템플릿엔진 jade
app.set("views", "./views"); // 템플릿엔진 jade 세팅
app.get("/template", (req, res) => {
  //템플릿 사용
  res.render("temp", { time: Date(), _title: "Jade" });
});

app.use(express.static("public")); // 정적 파일

//홈페이지에 접속했따라는 화면
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/dynamic", (req, res) => {
  let lis = "";
  for (let i = 0; i < 5; i++) {
    lis = lis + "<li>coding</li>";
  }
  let time = Date();
  let output = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      Hello, Static!!
    </body>
  </html>
  `;
  res.send(lis);
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
