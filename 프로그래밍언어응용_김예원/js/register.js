const userid = document.querySelector('#userid');
const errorMsgID = document.querySelector('.errorMsg-id');
const passwd = document.querySelector('#passwd');
const errorMsgPasswd = document.querySelector('.errorMsg-passwd');
const confirmPasswd = document.querySelector('#confirm-passwd');
const errorMsgCheckPasswd = document.querySelector('.errorMsg-check-passwd');
const email = document.querySelector('#email');
const errorMsgEmil = document.querySelector('.errorMsg-email');
const tel = document.querySelector('#tel');
const errorMsgTel = document.querySelector('.errorMsg-tel');
const btn = document.querySelector('#signup-btn');

checkID = () => { 
  if(userid.value === null || userid.value === ''){
    errorMsgID.innerText = '아이디를 입력하세요.';
    return false;
  }else if(userid.value.length < 9 ){
    errorMsgID.innerText = '아이디는 9자리 이상 입력하세요.';    
    return false;
  }else {
    errorMsgID.innerText = '';
    return true;
  }
}

checkPasswd = () => {
  if(passwd.value === null || passwd.value === ''){
    errorMsgPasswd.innerText = '비밀번호를 입력하세요';
    return false;
  }
  else if(passwd.value.length < 12 ){
    errorMsgPasswd.innerText = '비밀번호는 12자리 이상 입력하세요';
    return false;
  }else{
    errorMsgPasswd.innerText = '';
    return true;
  }
}

checkConfirmPasswd = () => {
  if(passwd.value === null || passwd.value === ''){
    errorMsgCheckPasswd.innerText = '확인 비밀번호를 입력하세요'
    return false;
  }else if(confirmPasswd.value !== passwd.value){
    errorMsgCheckPasswd.innerText = '비밀번호가 일치하지 않습니다';
    return false;
  }else{
    errorMsgCheckPasswd.innerText = '';
    return true;
  }
}

checkEmail = () => {
  if (email.value === null || email.value === '') {
    errorMsgEmil.innerText = '이메일을 입력하세요.';
    return false;
  } else if (!isEmailCheck(email.value)) {
    errorMsgEmil.innerText = '유효하지 않은 형식의 이메일 입니다.';
    return false;
  } else {
    errorMsgEmil.innerText = '';
    return true;
  }
} 

isEmailCheck = (email) => {
  let emailRequire = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  return emailRequire.test(email);
}

checkTel = () => {
  if(tel.value === null || tel.value === ''){
    errorMsgTel.innerText = '전화번호를 입력해주세요.';
    return false;
  }else if (!isTelCheck(tel.value)){
    errorMsgTel.innerText = '유효하지 않은 형식의 전화번호 입니다.';
    return false;
  }else{
    errorMsgTel.innerText = '';
    return true;
  }
}

isTelCheck = (tel) => {
  let telRequire = /^[0-9+-\_.]+$/;
  return telRequire.test(tel);
}



checkForm = (event) => {
  event.preventDefault();
  // checkID();  // T or F
  // checkPasswd();  // T or F
  // checkConfirmPasswd(); // T or F
  // checkEmail();     // T or F
  // checkTel();       // T or F

  if(checkID() && checkPasswd() && checkConfirmPasswd() && checkEmail() && checkTel()){
    location.href = 'login.html';
  };  
}
btn.addEventListener('click', checkForm);