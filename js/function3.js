// function3.js


// 1. 함수 이름은 max(10, 7) => "두 개의 숫자중에서 큰 값은 10입니다."
function max(max1, max2) {
  if (max1 > max2) {
    document.write(`<p>두 개의 숫자중에서 큰 값은 ${max1} 입니다.</p>`);
  } else if (max2 > max1) {
    document.write(`<p>두 개의 숫자중에서 큰 값은 ${max2} 입니다.</p>`);
  } else {
    document.write(`<p>두 숫자가 같습니다.</p>`);
  }
}

// 2. 함수 이름은 sumUpTo(7) => "1부터 7까지의 합은 28입니다."
function sumUpTo(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  document.write(`<p>1부터 ${num}까지의 합은 ${sum} 입니다.</p>`);
}

// 3. 함수 이름은 diff(34, 17) => 두 수의 차는 17입니다. (순서 상관없이 큰 수에서 작은 수)
function diff(num1, num2) {
  let result = 0;
  if (num1 >= num2) {
    result = num1 - num2;
  } else {
    result = num2 - num1;
  }
  document.write(`<p>두 수의 차는 ${result} 입니다.</p>`);
}

max(20, 30);

sumUpTo(8);

diff(25, 50);