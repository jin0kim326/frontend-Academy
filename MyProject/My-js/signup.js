const userid = document.querySelector(".userid");
const passwd = document.querySelector(".passwd");
const confirmPasswd = document.querySelector(".confirm-passwd");
const email = document.querySelector(".email");
const tel = document.querySelector(".tel");

function checkInputs() {
  let useridValue = userid.value.trim();
  let emailValue = email.value.trim();
  let passwdValue = passwd.value.trim();
  let confirmPasswdValue = confirmPasswd.value.trim();
  let telValue = tel.value.trim();

  /*아이디 체크*/
  if (useridValue === null || useridValue === "") {
    errorCheck(userid, "아이디를 입력해주세요.");
  } else if (useridValue.length < 8 || useridValue.length > 16) {
    errorCheck(userid, "아이디는 8~16자리 이내로 입력해주세요.");
    // 영어 대,소문자 숫자 포함
  } else if (!isIdCheck(useridValue)) {
    errorCheck(userid, "유효하지 않은 아이디 입니다.");
  } else {
    successCheck(userid);
  }
  /*비밀번호 체크*/
  if (passwdValue === null || passwdValue === "") {
    errorCheck(passwd, "비밀번호를 입력해주세요.");
  } else if (passwdValue.length < 10 || passwdValue.length > 20) {
    errorCheck(passwd, "비밀번호는 10~20자리 이내로 입력해주세요.");
    // 영어 대,소문자 숫자 특수기호 포함
  } else {
    successCheck(passwd);
  }
  /*확인 비밀번호 체크*/
  if (confirmPasswdValue === null || confirmPasswdValue === "") {
    errorCheck(confirmPasswd, "확인비밀번호를 입력해주세요.");
  } else if (passwdValue !== confirmPasswdValue) {
    errorCheck(confirmPasswd, "비밀번호가 일치하지 않습니다.");
  } else {
    successCheck(confirmPasswd);
  }
  /*이메일 체크*/
  if (emailValue === null || emailValue === "") {
    errorCheck(email, "이메일을 입력해주세요.");
  } else if (!isEmailCheck(emailValue)) {
    errorCheck(email, "유효하지 않은 이메일입니다.");
  } else {
    successCheck(email);
  }
  /*전화번호 체크*/
  if (telValue === null || telValue === "") {
    errorCheck(tel, "전화번호를 입력해주세요.");
  } else if (!isTelCheck(telValue)) {
    errorCheck(tel, "유효하지 않은 전화번호입니다.");
  } else {
    successCheck(tel);
  }
}
function isIdCheck(userid) {
  //$의 의미는 아직x
  let idRequire = /^[a-zA-Z0-9+-\_.]+$/;
  return idRequire.test(userid);
}
function isEmailCheck(email) {
  let emailRequire = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  return emailRequire.test(email);
}
function isTelCheck(tel) {
  let telRequire = /^[]0-9+-\_./;
  return telRequire.test(tel);
}
function errorCheck(input, msg) {
  const inputWrap = input.parentElement;
  const errorMessage = inputWrap.querySelector("small");
  inputWrap.className = "input-wrap error";
  errorMessage.innerHTML = msg;
}
function successCheck(input) {
  const inputWrap = input.parentElement;
  inputWrap.className = "input-wrap success";
}
document.getElementById("frm").addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
