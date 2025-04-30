// object2.js
// 배열내장객체: newArray() 또는 []
// 관련메소드: push, pop, unshift, shift => forEach

let arr1 = [10, 20, 30];
arr1[3] = 40;
arr1.push(50); // 추가 메소드
arr1.unshift(60); // 맨 앞 추가
arr1.pop(); // 마지막 삭제
arr1.shift(); // 맨 앞 삭제
arr1.splice(1, 0, 15); // 추가, 삭제, 수정 (삭제할 시작 위치, 삭제할 개수, 추가할 요소);

// every : 모두 만족하면 true,  some : 하나라도 만족하면 true
let result = arr1.some(item => item % 2 == 1);
console.log(result);

arr1.forEach(function(item, idx, ary) { // 익명함수
  console.log(item, idx);
});

// console.log(arr1);