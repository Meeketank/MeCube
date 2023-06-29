const box = document.getElementById('box');
let rotateX = 0;
let rotateY = 0;
let startX = null;
let startY = null;

function rotateCube() {
  box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function handleKeyDown(event) {
  const { key } = event;

  if (key === 'ArrowUp' || key === 'w' || key === 'W') {
    rotateX -= 30;
  } else if (key === 'ArrowDown' || key === 's' || key === 'S') {
    rotateX += 30;
  } else if (key === 'ArrowLeft' || key === 'a' || key === 'A') {
    rotateY -= 30;
  } else if (key === 'ArrowRight' || key === 'd' || key === 'D') {
    rotateY += 30;
  }

  rotateCube();
}

function handleTouchStart(event) {
  const touch = event.touches[0];
  startX = touch.clientX;
  startY = touch.clientY;
}

function handleTouchMove(event) {
  if (!startX || !startY) return;

  const touch = event.touches[0];
  const deltaX = startX - touch.clientX; // Adjusted the sign of the calculation
  const deltaY = touch.clientY - startY;

  rotateY += deltaX * 0.5;

  rotateCube();

  startX = touch.clientX;
  startY = touch.clientY;
}

function handleTouchEnd() {
  startX = null;
  startY = null;
}

window.addEventListener('keydown', handleKeyDown, false);
window.addEventListener('touchstart', handleTouchStart, false);
window.addEventListener('touchmove', handleTouchMove, false);
window.addEventListener('touchend', handleTouchEnd, false);
