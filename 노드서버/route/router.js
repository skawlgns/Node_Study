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

module.exports = route;

//Create : Post
//Read : Get
//Update : Put
//Delete : Delete
