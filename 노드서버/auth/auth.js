const passport = require("passport");
const BasicStrategy = require("passport-http").BasicStrategy;

passport.use(
  "basic",
  new BasicStrategy((id, password, callback) => {
    //db접근해서 id 비번을 가져와 확인..
    if (id === "study" && password === "1234") {
      callback(null, id);
    } else {
      callback(null, false);
    }
  })
);

exports.isBasicAuthenticated = passport.authenticate("basic", {
  session: false,
});
