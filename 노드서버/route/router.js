const express = require("express");
const route = express.Router();
const user = require("../controller/user");
const auth = require("../auth/auth");


route
  .route("/user")
  .post(user.createUser)
  .get(auth.isBasicAuthenticated, user.readUser)
  .put(auth.isBasicAuthenticated, user.updateUser)
  .delete(auth.isBasicAuthenticated, user.deleteUser);

route
  .route("/test")
  .get((req, res) => {
    res.send("확인1");
  })
  .post((req, res) => {
    console.log(req.body);
    res.send("POST방식");
  });

route.route("/test/:id").get((req, res) => {
  console.log(req.query);

  res.send("확인2");
});

module.exports = route;

//Create : Post
//Read : Get
//Update : Put
//Delete : Delete
