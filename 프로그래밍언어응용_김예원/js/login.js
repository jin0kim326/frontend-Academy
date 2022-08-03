const userid = document.querySelector("#userid");
const passwd = document.querySelector("#passwd");
const loginBtn = document.querySelector("#login-btn");
const errorId = document.querySelector(".error-id");
const errorPasswd = document.querySelector(".error-passwd");
const USER_ID = "yeni12345";
const USER_PASSWD = "yeni123123123";

checkId = () => {
  if (userid.value === null || userid.value === "") {
    errorId.innerText = "아이디를 입력하세요.";
    return false;
  } else if (userid.value.length < 9) {
    errorId.innerText = "아이디를 9자리 이상 입력해주세요.";
    return false;
  } else {
    return true;
  }
};

checkPasswd = () => {
  if (passwd.value === null || passwd.value === "") {
    errorPasswd.innerText = "비밀번호를 입력하세요.";
    return false;
  } else if (passwd.value.length < 12) {
    errorPasswd.innerText = "비밀번호를 12자리 이상 입력해주세요.";
    return false;
  } else {
    return true;
  }
};

checkMember = () => {
  if (userid.value === USER_ID && passwd.value === USER_PASSWD) {
    location.href = "https://nid.naver.com/nidlogin.login";
  } else {
    document.querySelector(".login-error-message").innerText =
      "아이디 혹은 비밀번호를 잘못 입력했습니다. \n 입력하신 내용을 다시 확인해주세요.";
  }
};

checkLogin = (e) => {
  e.preventDefault();
  checkId();
  checkPasswd();
  checkMember();
};

// loginBtn.addEventListener("click", checkLogin);
