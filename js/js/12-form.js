let email = document.getElementById("email");
let passwd = document.getElementById("passwd");
let passwd2 = document.getElementById("passwd2");

function checkInputs() {
  let emailValue = email.value.trim();
  let passwdValue = passwd.value.trim();
  let passwd2Value = passwd2.value.trim();
  //alert("ok");
  if (emailValue === null || emailValue === "") {
    //trim은 좌/우 공백제거
    errorCheck(email, "이메일을 입력해주세요.");
    /*
    const formControl = email.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerHTML = "이메일을 입력해주세요.";
    이부분이 email,passwd,passwd2에 모두 똑같이 적용되서
    함수를 만들어서 중복을 없애줌*/

    // 이메일 정규식 체크
    // Boolean : name(true) -> name, name(false) -> !name
    // !는 false 가 나온다면 을 의미
  } else if (!isEmailCheck(emailValue)) {
    errorCheck(email, "이메일이 유효하지 않습니다.");
  } else {
    successCheck(email);
  }
  if (passwdValue === null || passwdValue === "") {
    errorCheck(passwd, "비밀번호를 입력해주세요.");
  } else {
    successCheck(passwd);
  }
  if (passwd2Value === null || passwd2Value === "") {
    errorCheck(passwd2, "확인비밀번호를 입력해주세요.");
  } else if (passwdValue !== passwd2Value) {
    errorCheck(passwd2, "비밀번호가 일치하지 않습니다.");
  } else {
    successCheck(passwd2);
  }
}

// RegExp : 정규식
// 시작과 끝은 /를 씀 ==>  /정규식/
// return : true, false
// isEmailCheck() -> boolean 타입 //// is소문자로 꼭
function isEmailCheck(email) {
  let exp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  return exp.test(email);
  // ^는 시작할게요..같은 의미.. +-\_. ??
  // a-zA-Z0-9 -> 소문자a~z까지 대문자A-Z까지 숫자0~9까지
  // 이메일 주소 = 계정 @ 도메인
  // 골뱅이 앞부분 (계정 시작) 시작하는 부분을 규정..
}

function errorCheck(input, msg) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerHTML = msg;
}
function successCheck(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
// 중복을 줄이기 위한

document.getElementById("from").addEventListener("submit", (e) => {
  //alert("ok");
  e.preventDefault();
  checkInputs();
  // 창이 넘어가지 않도록 꼭해줘야함
  // e는 event 라고 써도 됨
});
// click처럼 submit 이벤트도 있음.

//document.querySelector("small").innerHTML = "이메일을 입력해주세요.";
//.classList.add("display");
