//미들웨어

const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const main = require("./main");
const email = require("./email");

//url routing
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/main.html"));
});

router.use("/main", main); // /main으로 오면 main을 실행
router.use("/email", email);

module.exports = router;
