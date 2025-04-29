// function6.js

// 배열 + object
let obj = {
  name: "홍길동",
  age: 20,
  phone: "010-1234-1234",
  pets: [{
    name: '솜',
    age: 5,
    검진일: ['2025-01-01', '2025-02-01']
  },
  {
    name: '멍멍이',
    age: 3,
    검진일: ['2025-03-01', '2025-04-01']
  }]
};

console.log(obj.pets[0].검진일[1]);

let friends = [
  {name: "짱구", age: 20, phone: "010-1234-1234"},
  {name: "맹구", age: 21, phone: "010-5678-5678"},
  {name: "훈이", age: 22, phone: "010-4321-8765"}
];

let max = 0;

for (let i = 0; i < friends.length; i++) {
  if (max < friends[i].age) {
    max = friends[i].age;
  }
}
console.log(max);