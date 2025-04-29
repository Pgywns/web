// function5.js

let names = ["짱구", "맹구", "철수", "훈이", "유리"];
let search = prompt("검색할 이름 입력: ");
let exists = 0;

for (let i = 0; i < names.length; i++) {
  if (names[i] == search) {
    exists = true;
    break;
  }
}

// let i = 0;
// while (true) {

//   if (i < names.length) {
//     i++;
//   } else {
//     break;
//   }

//   if (names[i] == search) {
//     exists = true;
//     break;
//   }
// }

if (exists) {
  console.log(`${search} 있음`);
} else {
  console.log(`${search} 없음`);
}