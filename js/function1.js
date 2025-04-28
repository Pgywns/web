// function1.js

// 2개의 수를 더하고 큰 값에 10을 더하고 작은 값에 5를 더한 후 합을 구하기
function sum(x ,y) {
  let sum = 0;

  x = parseInt(prompt("숫자를 입력하세요."));
  y = parseInt(prompt("숫자를 입력하세요."));

  document.querySelector('#num1').value = x;
  document.querySelector('#num2').value = y;

  if (x > y) {
    sum = (x+10) + (y+5);
  } else {
    sum = (y+10) + (x+5);
  }

  return sum;
}

document.querySelector('#result').value = sum();