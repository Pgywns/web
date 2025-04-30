// dom1.js

// createElement(), appendChild(), setAttribute(), querySelector()

// 이벤트
document.querySelector('#addBtn').addEventListener('click', addCallback);

// 삭제 버튼들
document.querySelectorAll('ul button').forEach(function(item) { // ul button => ul 안에있는 button 모두
  // console.log(item);
  item.addEventListener('click', function() {
    item.parentElement.remove();
  });
});

// li에 스타일
document.querySelectorAll('li').forEach(item => {
  // console.log(item);
  item.addEventListener('mouseover', function() {
    item.style.backgroundColor = "red";
  });
  item.addEventListener('mouseout', function() {
    item.style.backgroundColor = "";
  });
});

// 콜백
function addCallback() {
  let fruit = document.getElementById('fruit').value;
  let price = document.querySelector('#price').value;

  // 입력값이 있는지 체크
  if (!fruit || !price) {
    alert("값을 입력하세요");
    return; // 함수 실행 종료
  }

  let newList = createLi(fruit, price);
  document.querySelector('ul').appendChild(newList);

  // 입력값 초기화
  document.getElementById('fruit').value = "";
  document.querySelector('#price').value = 0;
}

function createLi(fruitName, fruitPrice) {
  let li = document.createElement("li");
  // li.innerHTML = "test";
  let sp1 = document.createElement("span");
  sp1.innerText = fruitName;
  
  let sp2 = document.createElement("span");
  sp2.innerText = fruitPrice + "원";
  let txt = document.createTextNode(" ");
  
  // 삭제버튼
  let btn = document.createElement("button");
  btn.innerText = "삭제";

  // btn.setAttribute('class', 'btn btn-danger');
  btn.className = "btn btn-danger";

  btn.addEventListener('click', function() {
    btn.parentElement.remove();
  }); // 클릭 이벤트등록

  li.addEventListener('mouseover', function() {
    li.style.backgroundColor = "red";
  });

  li.addEventListener('mouseout', function() {
    li.style.backgroundColor = "";
  });

  li.appendChild(sp1);
  li.appendChild(txt);
  li.appendChild(sp2);
  li.appendChild(btn);

  return li;
}