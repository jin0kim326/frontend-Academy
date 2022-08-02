const userid = document.querySelector('#userid');
const passwd = document.querySelector('#passwd');
const loginBtn = document.querySelector('#login-btn');
const USER_ID = 'yeni12345';
const USER_PASSWD = 'yeni123123123'

checkId = () => {
  if(userid.value === null || userid.value === ''){
    alert('a');
    return false;
  }else if(userid.value.length < 9){
    alert('b')
    return false;
  }else{
    return true;
  }
}

checkPasswd = () => {
  if(passwd.value === null || passwd.value === ''){
    alert('c');
    return false;
  }else if(passwd.value.length < 12){
    alert('d');
    return false;
  }else{
    return true;
  }
}

checkAuthUser = () => { 
  if(userid.value === USER_ID && passwd.value === USER_PASSWD){
    location.href = 'https://nid.naver.com/nidlogin.login';
  } else {
    alert('없는 회원입니둥.');
  }
}

checkLogin = (e) => {
  e.preventDefault();
  checkId();
  checkPasswd();
  checkAuthUser();
} 


// loginBtn.addEventListener("click", checkLogin);

