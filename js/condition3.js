// condition3.js

let result = 30 + Math.floor(Math.random() * 71);
console.log(result);

if (result >= 95) {
  alert(result + " A+");
} else if (result >= 90 ) {
  alert(result + " A");
} else if (result >= 85) {
  alert(result + " B+");
} else if (result >= 80) {
  alert(result + " B");
} else if (result >= 75) {
  alert(result + " C+");
} else if (result >= 70) {
  alert(result + " C");
} else if (result >= 65) {
  alert(result + " D+");
} else if (result >= 60) {
  alert(result + " D");
} else {
  alert(result + " F");
}

// if (result >= 60) {
//   alert(result + " Pass");
// } else {
//   alert(result + " Fail");
// }