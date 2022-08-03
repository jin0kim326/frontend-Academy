const userid = document.querySelector("#userid");
const errorMsgID = document.querySelector(".errorMsg-id");
const passwd = document.querySelector("#passwd");
const errorMsgPasswd = document.querySelector(".errorMsg-passwd");
const confirmPasswd = document.querySelector("#confirm-passwd");
const errorMsgCheckPasswd = document.querySelector(".errorMsg-check-passwd");
const email = document.querySelector("#email");
const errorMsgEmil = document.querySelector(".errorMsg-email");
const tel = document.querySelector("#tel");
const errorMsgTel = document.querySelector(".errorMsg-tel");
const btn = document.querySelector("#signup-btn");
const regionsel = document.querySelector("#region-select");
const area = document.querySelector(".region-select");

setError = (messageArea, message, icon) => {
  messageArea.innerText = message;
  icon.classList.add("change-error");
  return false;
};

setCorrect = (messageArea, icon) => {
  messageArea.innerText = "";
  icon.classList.add("change-correct");
  return true;
};

checkID = () => {
  const icon = userid.nextElementSibling;
  if (userid.value === null || userid.value === "") {
    return setError(errorMsgID, "아이디를 입력하세요.", icon);
  } else if (userid.value.length < 9) {
    return setError(errorMsgID, "아이디는 9자리 이상 입력하세요.", icon);
  } else {
    return setCorrect(errorMsgID, icon);
  }
};
// 초록빨강
checkPasswd = () => {
  const icon = passwd.nextElementSibling;
  if (passwd.value === null || passwd.value === "") {
    errorMsgPasswd.innerText = "비밀번호를 입력하세요";
    icon.classList.add("change-error");
    return false;
  } else if (passwd.value.length < 12) {
    errorMsgPasswd.innerText = "비밀번호는 12자리 이상 입력하세요";
    icon.classList.add("change-error");
    return false;
  } else {
    errorMsgPasswd.innerText = "";
    icon.classList.add("change-correct");
    return true;
  }
};

checkConfirmPasswd = () => {
  const icon = confirmPasswd.nextElementSibling;
  if (confirmPasswd.value === null || confirmPasswd.value === "") {
    errorMsgCheckPasswd.innerText = "확인 비밀번호를 입력하세요";
    icon.classList.add("change-error");
    return false;
  } else if (confirmPasswd.value !== passwd.value) {
    errorMsgCheckPasswd.innerText = "비밀번호가 일치하지 않습니다";
    icon.classList.add("change-error");
    return false;
  } else {
    errorMsgCheckPasswd.innerText = "";
    icon.classList.add("change-correct");
    return true;
  }
};

checkEmail = () => {
  const icon = email.nextElementSibling;
  if (email.value === null || email.value === "") {
    errorMsgEmil.innerText = "이메일을 입력하세요.";
    icon.classList.add("change-error");
    return false;
  } else if (!isEmailCheck(email.value)) {
    errorMsgEmil.innerText = "유효하지 않은 형식의 이메일 입니다.";
    icon.classList.add("change-error");
    return false;
  } else {
    errorMsgEmil.innerText = "";
    icon.classList.add("change-correct");
    return true;
  }
};

isEmailCheck = (email) => {
  let emailRequire = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  return emailRequire.test(email);
};

checkTel = () => {
  const icon = tel.nextElementSibling;
  if (tel.value === null || tel.value === "") {
    errorMsgTel.innerText = "전화번호를 입력해주세요.";
    icon.classList.add("change-error");
    return false;
  } else if (!isTelCheck(tel.value)) {
    errorMsgTel.innerText = "유효하지 않은 형식의 전화번호 입니다.";
    icon.classList.add("change-error");
    return false;
  } else {
    errorMsgTel.innerText = "";
    icon.classList.add("change-correct");
    return true;
  }
};

isTelCheck = (tel) => {
  let telRequire = /^[0-9+-\_.]+$/;
  return telRequire.test(tel);
};

checkGender = () => {
  const radioBtns = document.querySelectorAll('input[name="gender"]');
  const checkIcon = document.querySelector(".check-icon.gender");

  // 체크되었는지 여부 : 초기값은 false (체크되지 않았음)
  let isChecked = false;

  // 라디오버튼들(남자, 여자 2개) 모두 확인
  for (const radioBtn of radioBtns) {
    console.log(radioBtn.value);
    if (radioBtn.checked) isChecked = true; // 체크된게 있으면 isChecked를 true로 바꿔줌
  }

  /**
   * 남자,여자 둘다 선택이 안된경우 : isChecked 변수에 false가 들어가있음 => change-error 클래스를 붙혀서 빨갛게!
   * 둘중 하나가 선택된 경우 : isChecked 변수에 true가 들어가있음 => change-true 클래스를 붙혀서 초록색!
   */
  if (isChecked) {
    checkIcon.classList.add("change-correct");
    return true;
  } else {
    checkIcon.classList.add("change-error");
    return false;
  }
};

selectValidate = () => {
  //alert("ok");
  if (regionsel.value === "") {
    alert("검색타입을 선택하세요");
    return false;
  } else {
    regionsel.addEventListener("change", (e) => {
      const option = e.qurrentTarget.options;
      const idx = e.currentTarget.options.selectedIndex;
      const message = document.querySelector("#region-message");
      message.textContent = `${options[idx].textContent}`;
    });
  }
};

checkArea = () => {
  const area = document.querySelector(".region-select");
  const checkIcon = document.querySelector(".check-icon.area");
  const areaValue = area.value;

  // 아래 변수를 직접 테스트해보세요!
  // console.log(area);  // select 태그를 javascript 변수로 가져오기
  // console.log(area.value);  // 사용자가 선택한 지역의 value ex) seoul
  // console.log(area.options[area.selectedIndex].text); //사용자가 선택한 지역의 text값 ex)서울특별시

  //1. 선택된 값이 없다면 ~
  if (areaValue === "" || areaValue === null) {
    checkIcon.classList.add("change-error");
    return false;
  } else {
    checkIcon.classList.add("change-correct");
    return true;
  }
};

// change된 글자가 아래로 내려감. 옆으로 옮기기

checkHobby = () => {
  const checkBoxes = document.querySelectorAll(".hobby-check");
  const checkIcon = document.querySelector(".check-icon.hobby");
  let count = 0;
  const AT_LEAST_COUNT = 1; //선택해야하는 숫자(설정값)

  for (const checkbox of checkBoxes) {
    if (checkbox.checked) count++;
  }

  if (count < AT_LEAST_COUNT) {
    checkIcon.classList.add("change-error");
    return false;
  } else {
    checkIcon.classList.add("change-correct");
    return true;
  }
};

checkForm = (event) => {
  event.preventDefault();

  // checkID();  // T or F
  // checkPasswd();  // T or F
  // checkConfirmPasswd(); // T or F
  // checkEmail();     // T or F
  // checkTel();       // T or F
  // checkGender();
  // checkArea();
  // checkHobby();

  if (
    checkID() &&
    checkPasswd() &&
    checkConfirmPasswd() &&
    checkEmail() &&
    checkTel() &&
    checkGender() &&
    checkArea() &&
    checkHobby()
  ) {
    location.href = "login.html";
  }
};
btn.addEventListener("click", checkForm);

/**
 * 셀렉트 박스를 바꿨을때 옆에 텍스트도 같이 변경하는 코드
 */
onChange = () => {
  const area = document.querySelector(".region-select");
  const checkIcon = document.querySelector(".check-icon.area");

  const regionMsg = document.querySelector(".region-message");
  const areaName = area.options[area.selectedIndex].text;
  const areaValue = area.value;

  regionMsg.innerText = areaName;

  if (areaValue === null || areaValue === "") {
    checkIcon.classList.remove("change-correct");
    checkIcon.classList.add("change-error");
  } else {
    checkIcon.classList.remove("change-error");
    checkIcon.classList.add("change-correct");
  }
};
area.addEventListener("change", onChange);

// document.getElementById("frm").addEventListener("submit", (e) => {
//   e.preventDefault(); // 페이지 전환 X
//   selectValidate();
//   // 함수만 checkForm 쪽으로 올려주면 될듯?
// });

const textarea = document.querySelector("#introduction");
const p = document.querySelector(".input-cnt");
textarea.addEventListener("keyup", (e) => {
  //console.log(e);
  p.textContent = `${e.target.value.length} 글자 입니다.`;
});

const inputs = document.querySelectorAll(".input-wrap input");

onChangeValue = (event) => {
  console.log(`${event.target.id} :::::`);
  switch (event.target.id) {
    case "userid":
      checkID();
      break;
    case "passwd":
      checkPasswd();
      break;
    case "email":
      checkEmail();
      break;
    case "tel":
      checkTel();
      break;
  }
};

inputs.forEach((input) => input.addEventListener("focusout", onChangeValue));
