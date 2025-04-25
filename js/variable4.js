// variable4.js

// 할당연산자 (524p)
let num1 = "10";
num1 = num1 + "20";
num1 = num1 + "30";
console.log(num1);

num1 += "40";

let num2 = 10;
num2 += 20;
num2 += 30;

num2 = num2 - 5;
num2 -= 5;

num2 = num2 *  2;
num2 *= 2;
num2 = 10203040;

// 비교연산자 (525p)
console.log(num2 == 200);
console.log(num2 === num1);

console.log(num2 != num1);
console.log(num2 !== num2);

console.log(num2 == num1);

// 논리연산자 (526p)
console.clear();
console.log(num1 >= num2 || num1 < 100);
console.log(num1 >= num2 && !(num1 < 100));