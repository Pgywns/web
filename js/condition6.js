// condition6.js

// 1.두 개의 수를 입력, 큰 값을 콘솔에 출력 "두 수 중에서 큰 값은 n입니다"

// 임의의 두 개의 수 (40 ~ 70) 생성 "두 개의 수중에서 큰 값은 ??"

// condition3.js에 A, B, C, D, F => 95이상이면 A+로 세분화

// 반복문 (537p 예습)

let num1 = prompt("숫자를 입력하세요");
let num2 = prompt("숫자를 입력하세요");

if (num1 > num2) {
  console.log("두 숫자 중에서 큰 값은 " + num1 + " 입니다.");
} else if (num2 > num1) {
  console.log("두 숫자 중에서 큰 값은 " + num2 + " 입니다.");
} else {
  console.log("두 숫자가 같습니다.");
}

let result1 = 40 + Math.floor(Math.random() * 31);
let result2 = 40 + Math.floor(Math.random() * 31);

if (result1 > result2) {
  console.log("두 숫자 중에서 큰 값은 " + result1 + " 입니다.");
} else if (result2 > result1) {
  console.log("두 숫자 중에서 큰 값은 " + result2 + " 입니다.");
} else {
  console.log("두 숫자가 같습니다.");
}