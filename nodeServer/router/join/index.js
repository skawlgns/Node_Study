const express = require("express");
const app = express();
const router = express.Router();
const mysql = require("mysql");
const passport = require("passport");
const path = require("path");
const LocalStrategy = require("passport-local").Strategy;

//DB setting
let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "wasd7410",
  database: "jsman",
});

connection.connect();

router.get("/", (req, res) => {
  let msg;
  let errMsg = req.flash("error");
  if (errMsg) msg = errMsg;
  res.render("join.ejs", { message: msg });
});

// passport.serialize;
passport.serializeUser((user, done) => {
  console.log("passport session save : ", user.id);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log("passport session get id : ", id);
  done(null, id);
});

passport.use(
  "local-join",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, email, password, done) => {
      let query = connection.query(
        "select * from user where email=?",
        [email],
        (err, rows) => {
          if (err) return done(err);

          if (rows.length) {
            //이메일 중복 확인
            console.log("exisetd user");
            return done(null, false, { message: "your email is already used" });
          } else {
            let sql = { email: email, pw: password };
            let query = connection.query(
              "insert into user set ?",
              +sql,
              (err, rows) => {
                if (err) throw err;
                return done(null, { email: email, id: rows.insertId });
              }
            );
          }
        }
      );
    }
  )
);

router.post(
  "/",
  passport.authenticate("local-join", {
    successRedirect: "/main",
    failureRedirect: "/join", //사용자가 이미 있으면
    failureFlash: true,
  })
);

// router.post("/", (req, res) => {
//   let body = req.body;
//   let email = body.email;
//   let name = body.name;
//   let password = body.password;
//   let sql = { email: email, name: name, pw: password };
//   let query = connection.query("insert into user set ?", sql, (err, rows) => {
//     if (err) {
//       throw err;
//     }
//     console.log(rows);
//     res.render("welcome.ejs", { name: name, id: rows.insertId });
//   });
// });

module.exports = router;
