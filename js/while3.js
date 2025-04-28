// while3.js

// 친구 이름을 입력. => quit 종료.

function removeElement(parameter1) {
  console.dir(parameter1.target.parentElement.parentElement);
  parameter1.target.parentElement.parentElement.remove();
}

let result = 0;
document.write("<table class='table table-striped'>");
document.write('<tbody>');
while(true) {
  result = prompt("이름을 입력하세요.");
  if (result == "quit") {
    break;

    continue;
  }
  document.write('<tr>');

  document.write('<td>');
  document.write(`${result}`);
  document.write('</td>');

  document.write('<td>');
  document.write(`<button onclick='removeElement(event)' class='btn btn-danger'>삭제</button>`);
  document.write('</td>');
  
  document.write('</tr>');
}
document.write('</tbody>');
document.write('</table>');
