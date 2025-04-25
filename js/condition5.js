// condition5.js

// switch .. case 문
let num1 = prompt("숫자를 입력하세요. ex: 1, 2, 3");

switch(num1) {
  case "1" : alert("1을 선택"); break;
  case "2" : alert("2을 선택"); break;
  case "3" : alert("3을 선택"); break;
  default: alert("1, 2, 3 중에 선택하세요.");
}

//30 ~ 100
let result = 30 + Math.floor(Math.random() * 71);
result = Math.floor(result/10);
switch(result) {
  case 10:
  case 9: alert("A"); break;
  case 8: alert("B"); break;
  case 7: alert("C"); break;
  case 6: alert("D"); break;
  default: alert("F");
}
