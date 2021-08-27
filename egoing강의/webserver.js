const http = require("http"); // 노드 묘둘을 가지고 온다.

const hostname = "127.0.0.1"; //사용할 서버 호스트 네임
const port = 3000; // 사용할 서버 포트

// 서버 만들기
const server = http.createServer((req, res) => {
  // 요청이 오면 실행되는 콜백함수
  res.statusCode = 200; // 응답 상태값 설정
  res.setHeader("Content-Type", "text/plain"); //응답 헤더 중 Content-Type 설정
  res.end("Hello World"); // 응답 데이터 전송
});

//서버를 요청 대기 상태로 만든다
server.listen(port, hostname, () => {
  // 요청 대기가 완료되면 실행되는 콜백함수
  // 터미널에 로그를 기록한다
  console.log(`Server running at http://${hostname}:${port}/`);
});
