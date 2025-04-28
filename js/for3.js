// for3.js

let sum = 0;
let avg = 0;
let count = 0;

for (let i =1; i <= 5; i++) {
  let inputValue = parseInt(prompt("1 ~ 10 까지의 숫자를 입력하세요."));
  if (1 <= inputValue && inputValue <= 10) {
    sum += inputValue;
    count++;
  }
}

avg = sum / count;
console.log(`누적합계: ${sum}입니다. 평균은 ${avg}입니다.`);