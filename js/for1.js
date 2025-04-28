// for1.js

let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log('sum의 값은 ' + sum);

sum = 0;
// 1 ~ 20 반복하면서 짝수인 경우에 합을 구하기
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
  }
}

console.log('sum의 값은 ' + sum);
