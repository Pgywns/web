// while2.js

// 사용자에게 1 ~ 10까지 임의의 수를 입력
// 범위 밖의 값을 입력하면 반복 종료

let sum = 0;
let result = 0;
while(true) {
 result = parseInt(prompt("1 ~ 10 까지의 수를 입력하세요."));

 if (result < 1 || result > 10 ) {
    console.log(sum);
    break;
  } else {
    sum += result;
  }
}