const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/main.html"));
  res.render("main.ejs", { id: id });
}); //파일 불러오기

module.exports = router;
