// condition1.js

let isTrue = true;
let num1 = 5;
let num2 = 10;

isTrue = 3 < 5;
isTrue = num1 < 5;
isTrue = --num1 < 5;
isTrue = --num1 <= 4 || num2++ == 10; // OR 연산자로 인해 앞의 식이 참이여서 조건을 만족했기 때문에 뒤의 식을 계산하지 않아 num2의 값은 변경되지 않음
isTrue = 0; // falsy (0, "", null, undifined, NaN) 제외하면 모두 truthy

console.log(isTrue);
console.log(num1, num2);

if (isTrue) {
  console.log('참');
} else {
  console.log('거짓');
}
