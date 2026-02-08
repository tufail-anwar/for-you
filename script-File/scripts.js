
const noBtn = document.querySelector('.spc-no');

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = window.innerWidth - btnRect.width;
  const maxY = window.innerHeight - btnRect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}


