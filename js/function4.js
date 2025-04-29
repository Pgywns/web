// function4.js

// 함수 + 반복문 + 배열;
let num = 10;
num = "10, 홍길동";
let numAry = [10, 20];
numAry[2] = 30;
numAry[3] = 50;
numAry[4] = "Hong";
numAry[4] = 70;
numAry[5] = 90;
numAry[6] = 110;

console.log(numAry[2]);
console.log(numAry.length); // 배열의 길이

// 배열 + for반복문
for (let i = 0; i < numAry.length; i++) {
  console.log(`i의 값 : ${i}, 배열의 값 : ${numAry[i]}`);
}

// 연산가능
console.log(numAry[6] - numAry[2]);

// 배열의 요소의 합
let sum = 0;
for (let i = 0; i < numAry.length; i++) {
  sum += numAry[i];
}
console.log(sum);

let sum1 = 0;
for (let i = 0; i < numAry.length; i++) {
  if (i % 2 == 0) {
    sum1 += numAry[i];
  }
}
console.log(sum1);

// 배열변수: ages 27, 28, 25, 30, 31, 37
// 최대값
let ages = [27, 28, 25, 30, 31, 37];
function getMax(param1) {
  let max = 0;
  for (let i = 0; i < param1.length; i++) {
    if (max < param1[i]) {
      max = param1[i];
    }
  }
  return max;
}
console.log(getMax(ages));

// 최소값
function getMinValue(param1) {
  let min = param1[0];
  for (let i = 0; i < param1.length; i++) {
    if (min > param1[i]) {
      min = param1[i];
    }
  }
  return min;
}
console.log(getMinValue(ages));



// 챗GPT 연습 문제
// 1
function reverseAry(str) {
  let vStr = [];
  for (let i = str.length -1; i >= 0; i--) {
    vStr.push(str[i]);
  }
  console.log(vStr);
}
// reverseAry(strRe = prompt("문자를 입력하세요."));

// 2
function newAry(ary1) {
  let ary2 = [];
  
  for (let i = 0; i < ary1.length; i++) {
    if (ary1[i] % 2 == 0) {
      ary2.push(ary1[i]);
    }
  }
  
  return ary2;
}
// console.log(newAry([5, 8, 1, 2, 6, 4]));