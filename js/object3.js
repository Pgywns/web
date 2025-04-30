// object3.js

let numArr = [10, 21, 33, 54, 16, 73];
let result = numArr.indexOf(33); // 없으면 -1
console.log(result);

let strAry = ["홍길동", "김길동", "홍길순"];
strAry.forEach(function (item) {
  if (item.indexOf("길동") != -1) {
    console.log(item);
  }
});

// numAry(변수) => 10 ~ 50 사이의 값을 10개 저장. => 콘솔에 출력 (forEach)

// let numAry= [];
let numAry = new Array();

for (let i = 0; i < 10; i ++) {
  numAry.push(Math.floor(10 + Math.random() * 41));
}

// 10 ~ 50 사이의 값이 정상적으로 생성되었는지 체크
console.log(numAry.every(item => item >= 10 && item <= 50));

// 출력
numAry.forEach(function (item) {
  console.log(item);
});