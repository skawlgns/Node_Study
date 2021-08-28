exports.createUser = (req, res) => {
  res.send("유저가 생성되었습니다.");
};
exports.readUser = (req, res) => {
  res.send("유저가 확인되었습니다.");
};

exports.updateUser = (req, res) => {
  res.send("유저가 수정되었습니다.");
};

exports.deleteUser = (req, res) => {
  res.send("유저가 삭제되었습니다.");
};
