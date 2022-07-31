function radioValidate() {
  // alert("ok");
  //alert(document.getElementsByName("gender").length); gender name이 2개라고뜸
  let isChecked = ""; // checked(true), 아니면 false
  for (let i = 0; i < document.getElementsByName("gender").length; i++) {
    if (document.frm.gender[i].checked) {
      isChecked = document.frm.gender[i].value;
    }
  }
  if (isChecked === "") {
    alert("성별을 선택하세요");
    return false;
  } else {
    //alert(isChecked); //체크용
    alert("성별이 선택 되었습니다");
    return true;
  }
}
