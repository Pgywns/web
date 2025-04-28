// while1.js

// 1 ~ 10 까지의 값 중에서 홀수 값만 콘솔에 출력

for (let i = 0; i <= 10; i++) {
  if (i % 2) {
    console.log(i);
  }
}

let j = 1;
while (j <= 10) {
  if (j % 2) {
    console.log(j);
  }
  j++;
}

// 반복횟수 상관없이 조건을 만족할 동안 반복.
let no = 1;
while (true) {
  if (no % 2) {
    console.log(no);
  }
  no++;
  if (no > 10) {
    break;
  }
}

// 임의의 값(0 ~ 100) 값을 생성하다가 50보다 작은 값이 나오면 반복 종료
let running = true;
while (running) {
  let num = Math.floor(Math.random() * 101);
  
  if (num < 30) {
    // break;
    running = false;
  } else {
    console.log(num);
  }
}