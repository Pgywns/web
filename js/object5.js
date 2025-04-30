// object5.js

// Date 객체 : 날짜, 시간
let now = new Date();
// now.setDate(21);

// 월/일/연도,  연도-월-일
// now = new Date("2025-01-01");
console.log(now);
console.log(now.getDate() + "일(은)는 " + getKorDay(now.getDay()));
// 요일: getDay() 0(sun) ...

function getKorDay(day = 1) {
  switch (day) {
    case 0:
      return "일요일";
    case 1:
      return "월요일";
    case 2:
      return "화요일";
    case 3:
      return "수요일";
    case 4:
      return "목요일";
    case 5:
      return "금요일";
    case 6:
      return "토요일";
  }
}