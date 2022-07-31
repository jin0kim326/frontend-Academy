//동작() -> 메소드
//이벤트 처리 -> 메소드와 버튼을 연결
//1 - button 뒤에 onClike="showBox1"
//
// function showBox1() {
//   document.getElementById("box1").classList.remove("onOff");
//   document.querySelector("#box1").classList.remove("onOff");
// }
// function closeBox1() {
//   document.getElementById("box1").classList.add("onOff");
// }

//2
//
const closeBox1 = () => {
  document.getElementById("box1").classList.add("onOff");
};

document.getElementById("box1Open").addEventListener("click", closeBox1);
// 이걸 밑에처럼 바꿀수 있음.

// 3
//
// document.getElementById("box1Open").addEventListener("click", () => {
//   document.getElementById("box1").classList.add("onOff");
// });
//이렇게도 쓸수있다고 하는데 작동안됐음.

// 2-1
// 변수 사용
let boxTwo = document.getElementById("box2");
let boxTwoBtn = document.getElementById("box2Toggle");

const toggleFn = () => {
  document.getElementById("box2").classList.toggle("onOff");
};
boxTwoBtn.addEventListener("click", toggleFn);
//
//
//
//
//
//

let UID = document.getElementById("userid");
let IDBtn = document.getElementById("idBtn");
let DomText = document.getElementById("text");

// const chkID = () => {
//   alert(UID.value);
// };

const chkID = () => {
  if (UID.value == "busanit12345") {
    alert("로그인 되었습니다.");
    location.href = "https://www.naver.com";
  } else if (UID.value == "") {
    DomText.innerHTML = "<b>아이디를 입력하세요.</b>";
    UID.value = "";
    UID.focus();
  } else {
    // alert("아이디를 확인하세요.");
    DomText.innerHTML = "<b>아이디를 확인하세요.</b>";
    UID.value = ""; // 입력 값이 비워지도록
    UID.focus(); // 아이디 칸에 커서 깜빡이도록
  }
};

IDBtn.addEventListener("click", chkID);
