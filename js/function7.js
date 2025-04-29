// function7.js

let friend = {
  name: "김민규",
  age: 20,
  phone: "010-1111-2222"
};

// for ..in : 객체 반복
function makeRow(friend = {name, age, phone}) {
  let str = "";
  str += "<tr>";
  for (let prop in friend) {
    str += `<td>${friend[prop]}</td>`;
  }
  str += "</tr>";

  return str;
}

// 출력
let titles = ["이름", "나이", "연락처"];

let tlist = "";
tlist += "<table class='table'>";
tlist += "<thead><tr>";

for (let friend of titles) {
  tlist += `<th>${friend}</th>`;
}
tlist += "</tr></thead><tbody>";

for (let i = 0; i < friends.length; i++) {
  tlist += makeRow(friends[i]);
}

// for .. of : 배열 반복
for (let friend of friends) {
  tlist += makeRow(friend);
}

tlist += "</tbody></table>";
document.write(tlist);

