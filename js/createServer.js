const http = require("http"); //npm -> node package manager // server ready 한 것임.

const PORT = 5000;

//req(해주세요), res(해줄게요)
const server = http.createServer((req, res) => {
  // localhost : 5000/login 가 되는 것임
  if (req.url === "/login") {
    //주소 이렇게 만들어주세요..
    res.writeHead(200, { "Content-type": "text/html" }); //html파일을 화면에 출력할거에요 //json넣으면 json파일 출력할거에요~
    res.write("<h1>Busan It Academy</h1>");
    res.end(); //이거 안해주면 계속 대기하고있음. 여기까지가 끝입니다.
  } else {
    res.write("페이지를 찾을 수 없습니다.");
    res.end();
  }
}); //로컬호스트

server.listen(PORT, () => console.log(`서버를 실행합니다. 포트번호는 ${PORT}`)); //PORT 대신 5000 입력해도 되지만 변수를 설정해놨으니까

//ctrl+백틱

// cmd에서 D드라이브(cd /d d:) 들어가서 이 파일이 있는 폴더로 들어가서
// node createServer.js 치면 => 서버를 실행합니다. 포트번호는 5000 이 돌아가면
// 주소입력 - 5000/login
