/*
console.log("Hello World");
// let 변수; --> for 쓸 때
// const PI = 3.14;

let year = "2022";
let month = "07";
let day = "15";

let today = year + "/" + month + "/" + day;

let date = `${year}/${month}/${day}`;
// 백틱, ${} 로 연결,, ${} 중간중간 기호넣는거 가능.
console.log(date);

// console.log(date.length);
// for (let i = 0; i < date.length; i++) {
//   console.log(date[i]);
// }
// 문자열도 배열가능

let str = "busan it academy";
console.log(str.toUpperCase()); //메소드니까 괄호꼭필요. 주석보는습관

let myEmail = "rla357987@naver.com";
let result = myEmail.indexOf("@");
//있으면 위치(번호)가 나오고 없으면 -1이 나옴.
if (result < 0) {
  console.log("사용할 수 없는 이메일 입니다.");
} else {
  console.log("사용 가능한 이메일 입니다.");
}

let yourEmail = "rla357987?naver.com";
let result1 = yourEmail.replace("?", "@");
// ?는 쓸수없고, @로 바뀜.
console.log(result1);

const pi = 3.14;
let radius = 10;
//원의반지름
console.log(pi * radius * radius);
//거듭제곱
console.log(pi * radius ** 2);

//  / -> 몫을 구함 % -> 나머지를 구함
console.log(10 / 3); //몫
console.log(10 % 3); //나머지
*/

/*
//증감연산자
let likes = 10;
likes = likes + 1;
console.log(likes);

likes += 1;
console.log(likes);

likes -= 1;
console.log(likes);
// -/+랑 = 순서 헷갈리지말기

console.log(++likes); //증감하고 출력
console.log(likes++); //뒤에 ++ 이면 출력부터 하고 뒤에 증감
console.log(likes); // likes++ 한게 여기서 보임
//NaN : 글자로 나눌 때 나는 에러코드
//defined : 값이 없다 는 에러코드

console.log(10 / "한글");

//html 화면에 출력 -> 변수를 사용할 때는 백틱(``)
let title = "Busan it";
let content = "Busan Metropolitan...";
let html = `
    <h2>${title}</h2>
    <p>${content}</p>
`;
console.log(html);
// js는 타입을 크게 신경쓰지 않는,,유연한,,
// 그냥 let이나 const 써서하면됨.
let array = ["one", "two", "three", 100, false];
// for (let i = 0; i < array.length; ++i) {
//   console.log(array[i]);
// }
//
//
//배열이름.forEach(별명 => 출력)
//array.forEach((arr) => console.log(arr)); // 원래는 arr 이자리에 함수.
//
//다른방법 - 이렇게 많이 사용
//배열이름.forEach((별명) => {출력})


array.forEach((arr) => {
  //arr 뒤에 ,idx 이런식으로도 사용가능
  console.log(arr);
});

// console.log(array.join(",")); // join은 엄청많이쓰임
// let arrResult = array.concat(["four", "five"]); //배열에 추가..
// console.log(arrResult); // 이방법보다는 다른 방법도 있음..

let pushResult = array.push("4444", 5555); // 배열에 추가
console.log(array);

let popResult = array.pop(); //배열에서 하나빼옴
console.log(array);
*/
/*
let board = "1번 게시물입니다.";
let res = board.includes("1"); //이렇게 잘 안쓰긴함..
console.log(res); // 1번 게시물~ <에 1 있어서 true뜸

let arrays = ["java", "python", "react", "vue", "angular"];
console.log(arrays.includes("react"));
console.log(arrays.includes("REACT"));
// foreach, $, board, ` 는 알아두기
*/

/*
//비교연산자 ==
let num1, num2;
num1 = 10;
num2 = "10";
console.log(typeof num1);
console.log(typeof num2);
//js, react, node 할때 === 세개를 보통 씀..
if (num1 === num2) {
  console.log("같음");
}
if (num1 !== num2) {
  console.log("다름");
}

console.log(Boolean(0)); // 0 아니면 true
console.log(Boolean(1));
console.log(Boolean(-1));
*/

let names = ["kim", "lee", "park", "choi", "jung"];
console.log(`가입된 총 회원은 ${names.length}명 입니다.`);
names.forEach((name) => {
  console.log(name);
});

let passwd = "abcd@12";
if (passwd.length > 12 && passwd.includes("@")) {
  console.log("Very Strong...");
} else if (passwd.length >= 8) {
  console.log("Normal...");
} else {
  console.log("It is too short. Again...");
}
