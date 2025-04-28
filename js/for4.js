// for4.js

document.write(`<h3>TEST</h3>`);
document.write("<table class='table table-striped'>");
document.write('<tbody>');

document.write('<tr>');
for (let k =2; k <= 9; k++) {
  document.write('<td>');
  document.write(`${k}단`);
  document.write('</td>');
}
document.write('</tr>');

for (let i= 1; i <= 9; i++) {
  document.write('<tr>');
  for (let j =2; j <= 9; j++) {
    document.write('<td>');
    document.write(`${j} * ${i} = ${i * j}`);
    document.write('</td>');
  }
  document.write('</tr>');
}
document.write('</tbody>');
document.write('</table>');