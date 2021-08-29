const express = require("express");
const app = express();
const router = express.Router();
const mysql = require("mysql");
const path = require("path");

//DB setting
let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "wasd7410",
  database: "jsman",
});

connection.connect();

//Router 처리
router.post("/form", (req, res) => {
  console.log(req.body.email);
  //res.send("<h1>Welcome!</h1> " + req.body.email);
  res.render("email.ejs", { email: req.body.email });
}); // 템플릿 엔진 사용

router.post("/ajax", (req, res) => {
  let email = req.body.email;
  let responseData = {};

  //DB연동
  let query = connection.query(
    'select name from user where email="' + email + '"',
    (err, rows) => {
      if (err) throw err;
      if (rows[0]) {
        responseData.result = "ok";
        responseData.name = rows[0].name;
      } else {
        responseData.result = "none";
        responseData.name = "";
      }
      res.json(responseData);
    }
  );
});

module.exports = router;
