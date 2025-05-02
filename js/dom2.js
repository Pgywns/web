// dom2.js


let userList = [{
  uid: 'user01',
  uname: '홍길동',
  phone: '010-1234-5678'
}, {
  uid: 'user02',
  uname: '박효준',
  phone: '010-8765-4321'
}, {
  uid: 'user03',
  uname: '짱구',
  phone: '010-4321-5678'
}, {
  uid: 'user04',
  uname: '맹구',
  phone: '010-5678-4321'
}];

userList.forEach(function(item) {
  let tr = makeRow(item)
  document.querySelector('#list').appendChild(tr);
});


// 이벤트
document.querySelector('form[name="addForm"]').addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(e);
  let uid = document.querySelector('input[name="userId"]').value;
  let uname = document.querySelector('input[name="userName"]').value;
  let phone = document.querySelector('input[name="phone"]').value;

  // validation check
  if (!uid || uid.length < 3) {
    alert('아이디를 확인하세요.');
    return;
  }

  if (!uname || uname.length < 5) {
    alert('이름을 확인하세요.');
    return;
  }

  // object {}
  let userInfo = {
    uid, // uid(속성): uid(값)
    uname,
    phone
  }

  let tr = makeRow(userInfo);

  // tbody의 하위요소 등록
  document.querySelector('#list').appendChild(tr);
});


// 함수
function makeRow(user = {uid, uname, phone}) {
  // tr 생성
  let tr = document.createElement('tr');
  tr.addEventListener('click', function(e) {
    e.stopPropagation();
    console.log(tr.children[1].innerText);

    document.querySelector('input[name="userId"]').value = tr.children[1].innerText;
    document.querySelector('input[name="userName"]').value = tr.children[2].innerText;
    document.querySelector('input[name="phone"]').value = tr.children[3].innerText;
  
  }, false); // true => capturing 방식

  let td1 = document.createElement('td');
  let box = document.createElement('input');
  box.type = "checkbox";
  td1.appendChild(box);
  tr.appendChild(td1);

  // td 생성
  for (let prop in user) {
    let td = document.createElement('td');
    td.innerHTML = user[prop];
    tr.appendChild(td);
  }

  let td = document.createElement('td');
  let btn = document.createElement('button');
  btn.innerText = '삭제';
  btn.className = "btn btn-danger";
  btn.addEventListener('click', removeUserFnc);
  td.appendChild(btn);
  tr.appendChild(td);
  
  // 체크만 삭제
  document.querySelector('button[name="del"]').addEventListener('click', function() {
    if (box.checked) {
      btn.parentElement.parentElement.remove();
    }
    document.querySelector('input[name="all"]').checked = false;
  });

  // 전체 체크
  document.querySelector('input[name="all"]').addEventListener('change', function() {
    if (this.checked) {
      box.checked = true;
    } else {
      box.checked = false;
    }
  });

  return tr;
}

function removeUserFnc(e) {
  
  console.log(e.target, this);
  e.target.parentElement.parentElement.remove();
}
