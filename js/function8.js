// function8.js

console.log(json); // 문자열
let data = JSON.parse(json);  //json문자열 -> (배열)객체 변환.
console.log(data); // (배열)객체

// console.clear();
for (let emp of data) { 
  console.log(emp);
}

// 사원목록 (table 형식)을 출력
let fields = ['id', 'first_name', 'last_name', 'email', 'gender', 'salary'];
let elist = "<table class='table'><thead><tr>";

for (let field of fields) {
  elist += `<th>${field}</th>`
}
elist += "</thead><tbody>";

for (let emp of data) { // 배열 data에 value들(각 객체)을 emp(object)에 저장하여 makeTr함수를 호출
  elist += makeTr(emp);
}

elist += "</tbody></table>";
document.write(elist);

// button 이벤트
document.querySelector('button#searchBtn').addEventListener('click', function() {
  // 입력값
  let searchValue = document.querySelector('#userValue').value;
  let list = "";
  for (let emp of data) {
    if (searchValue == emp.gender) {
      list += makeTr(emp);
    }
    if (searchValue == "All") {
      list += makeTr(emp);
    }
  }
  document.querySelector('table.table>tbody').innerHTML = list;
});

// select 이벤트
document.querySelector('select#selectGender').addEventListener('change', function() {
  let searchValue = document.querySelector('#selectGender').value;
  let list = "";
  for (let emp of data) {
    if (searchValue == emp.gender) {
      list += makeTr(emp);
    }
    if (searchValue == "All") {
      list += makeTr(emp);
    }
  }
  document.querySelector('table.table>tbody').innerHTML = list;
});


// tr 생성 함수
function makeTr(emp = {}) { // emp(object), fields의 value들을 field로 = emp[value]
  let str = "<tr>";
  for (let field of fields) {
    str += `<td>${emp[field]}</td>`;
  }
  str += "</tr>";

  return str;
}