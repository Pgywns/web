// condition3.js

let result = 30 + Math.floor(Math.random() * 71);
console.log(result);

if (result >= 95) {
  console.log(result + " A+");
} else if (result >= 90 ) {
  console.log(result + " A");
} else if (result >= 85) {
  console.log(result + " B+");
} else if (result >= 80) {
  console.log(result + " B");
} else if (result >= 75) {
  console.log(result + " C+");
} else if (result >= 70) {
  console.log(result + " C");
} else if (result >= 65) {
  console.log(result + " D+");
} else if (result >= 60) {
  console.log(result + " D");
} else {
  console.log(result + " F");
}

// if (result >= 60) {
//   alert(result + " Pass");
// } else {
//   alert(result + " Fail");
// }