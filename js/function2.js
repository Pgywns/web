// function2.js

function sum(num1 = 0, num2 = 0) {
  let result = 0;
  result = num1 + num2;
  return result;
}

function printStar(times = 1, shape = '⭐') {
  let str = '';
  for (let i = 1; i <= times; i++) {
    str += shape;
  }
  console.log(str);
}

printStar(10, '⚡');
console.log(sum(10, 20));

function printGugudan(dan = 2) {
  let result = 0;
  for (let i = 1; i <= 9; i++) {
    result = dan * i;
    document.write(`<p>${dan} * ${i} = ${result}</p>`);
  }
}

printGugudan(5);