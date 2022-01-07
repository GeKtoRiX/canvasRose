const htmlCanvas01 = document.getElementById("canvas01");
const canvas01 = htmlCanvas01.getContext("2d");
// Изменение размеров холста равных размерам страницы при загрузке страницы.
htmlCanvas01.width = window.innerWidth;
htmlCanvas01.height = window.innerHeight;
canvas01.globalCompositeOperation = "destionation-over";

// Центр холста Canvas1.
const centerCanvas1 = {
  x: htmlCanvas01.width / 2,
  y: htmlCanvas01.height / 2,
};
// Изменение размеров холста равных размерам страницы при изменении размеров страницы.
window.addEventListener("resize", function () {
  // Растягивание холста на всю страницу. x(width) y(height).
  htmlCanvas01.width = window.innerWidth;
  htmlCanvas01.height = window.innerHeight;
});
let hue = Math.random() * 360;
// Скалируемое число изменения координат x, y.
let number = 0;
// Минимальное значение для начала скалирования.
let scale = 10;
function drawCircle() {
  // Угол колебания sin и cos.
  let angle = number * 100;
  // Значение увеличения радиуса колебания sin и cos.
  let radius = scale * Math.sqrt(number);
  // Отрисовка окружности через рекурсию с использованием sin и cos.
  let positionX = radius * Math.sin(angle) + htmlCanvas01.width / 2;
  let positionY = radius * Math.cos(angle) + htmlCanvas01.height / 2;
  canvas01.beginPath();
  canvas01.fillStyle = "hsl(" + hue + ", 50%, 50%)";
  canvas01.strokeStyle = "black";
  canvas01.lineWidth = 1;
  canvas01.arc(positionX, positionY, 20, 0, Math.PI * 2);
  canvas01.closePath();
  canvas01.fill();
  canvas01.stroke();
  number++;
}
function animate() {
  hue++;
  if (number >= 1000) {
    number = 0;
  }
  drawCircle();
  requestAnimationFrame(animate);
}
// animate();
smallCircleNum = 0;
smallCircleScail = 10;
function drawSmallCircle() {
  let angle = smallCircleNum * 1;
  let radius = smallCircleScail * Math.sqrt(smallCircleNum);
  let x = radius * Math.sin(angle) + htmlCanvas01.width / 2;
  let y = radius * Math.cos(angle) + htmlCanvas01.height / 2;

  canvas01.beginPath();
  canvas01.fillStyle = "hsl(" + hue + ", 50%, 50%)";
  canvas01.strokeStyle = "black";
  canvas01.lineWidth = 1;
  canvas01.arc(x, y, 15, 0, Math.PI * 2);
  canvas01.fill();
  canvas01.stroke();
  canvas01.closePath();
  smallCircleNum = smallCircleNum += 0.3;
  hue++;
}
function animateDrawCircle() {
  if (smallCircleNum >= 500) smallCircleNum = 0;
  drawSmallCircle();
  requestAnimationFrame(animateDrawCircle);
}
animateDrawCircle();
