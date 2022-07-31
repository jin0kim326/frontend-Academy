let userid = document.getElementById("userid");
let email = document.getElementById("email");
let passwd = document.getElementById("passwd");
let passwd2 = document.getElementById("passwd2");

function checkInputs() {
  let useridValue = userid.value.trim();
  let emailValue = email.value.trim();
  let passwdValue = passwd.value.trim();
  let passwd2Value = passwd2.value.trim();

  if (useridValue === null || useridValue === "") {
    errorCheck(userid, "아이디를 입력해 주세요");
  } else if (useridValue.length < 8) {
    errorCheck(userid, "아이디는 8자리 이상 입력하셔야 합니다.");
  } else {
    successCheck(userid);
  }

  if (emailValue === null || emailValue === "") {
    errorCheck(email, "이메일을 입력해 주세요");
  } else if (!isEmailCheck(emailValue)) {
    errorCheck(email, "이메일이 유효하지 않습니다.");
  } else {
    successCheck(email);
  }

  if (passwdValue === null || passwdValue === "") {
    errorCheck(passwd, "비밀번호를 입력해 주세요.");
  } else {
    successCheck(passwd);
  }

  if (passwd2Value === null || passwd2Value === "") {
    errorCheck(passwd2, "비밀번호 확인을 입력해 주세요.");
  } else if (passwdValue !== passwd2Value) {
    errorCheck(passwd2, "비밀번호가 일치하지 않습니다.");
  } else {
    successCheck(passwd2);
  }
}

function isEmailCheck(email) {
  let exp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  return exp.test(email);
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

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
