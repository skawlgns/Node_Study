const http = require("http");

const server = http.createServer(); //웹 서버 객체 리턴
const host = "192.168.0.4";
const port = 3000;

server.listen(port, host, 50000, () => {
  console.log("웹서버 실행 -> " + host + ":" + port);
});

server.on("connection", (socket) => {
  console.log("클라이언트가 접속");
});

server.on("request", (req, res) => {
  console.log("클라이언트가 요청");
  // console.dir(req);

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<h1>웹서버로부터 받은 응답</h1>");
  res.end(); //이때 전송
});
