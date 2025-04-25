// variable2.js

// int
let num1 = 100;
num1 = "hundred";
console.log(typeof num1);

// let 1num = 200; // 변수 이름은 첫 문자를 영어 소문자로 해야 함
let nameOfFriend = "홍길동";

let birthOfDate = new Date();
console.log(typeof birthOfDate);

// boolean
let isOk = true;
isOk = 10 < 5;
isOk = 10 > 5;

if (isOk) {
  // isOk 값이 true일 경우 {} 블럭을 실행
  console.log('isOk는 참입니다.');
}

// array
let numAry = [11, 22, 32, 44, 35];
console.log(numAry[0]);
// 가능하지만 안 쓰도록 하기
let strAry = ["Hello", "Nice", "Good", 300];
// object
let person = {
  name: "박효준",
  age: 20,
  height: 150,
  weight: 50,
  personInfo: function() { // 함수
    console.log('이름은 ' + person.name + '이고 나이는 ' + person.age);
  }
}
person.personInfo();

// 객체
let obj = {
  name: "홍길동",
  age: 20
};
console.log(person.name);

// undefined, null
let whatIsThis;
whatIsThis = document.querySelector('#userValue');
console.log(typeof whatIsThis);