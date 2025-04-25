// variable1.js

// JS 주석문
/* 
  주석문: 486p ~ 489p
*/
// DBMS - 오라클
// 정보 - frontend - backend - oracle
// 변수 (variable) - 데이터타입 (문자, 숫자, boolean, object, array)

let name; // 변수 선언
name = "박효준"; // 값을 대입
let name1 = "홍길동"; // 변수 초기화
name = "김민수";
console.log(name);

const age = 20; // (상수) 변수선언 & 초기화
//age = 30; // 30 할당

// 선택자 (selector)
let item = document.querySelector('#userValue');
console.dir(item);
name = item.value; // 변수 할당
console.log(name);