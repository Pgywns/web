//condition4.js

let result = 1 + Math.floor(Math.random() * 10);

if (result % 2 == 0) {
  alert(result + " 2의 배수입니다.");
} else if (result % 3 == 0) {
  alert(result + " 3의 배수입니다.");
} else {
  alert(result + " 2나 3의 배수가 아닙니다.");
}