
const noBtn = document.querySelector('.spc-no');

if (noBtn) {
  noBtn.addEventListener("mouseenter", moveButton);
  noBtn.addEventListener("touchstart", moveButton);
}

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

// memo
const memories = document.querySelector('.js-memo');
const memoContainer = document.querySelector('.js-memo--container');
const pageContent = document.querySelector('.page-content');

memories.addEventListener("click", () => {

  memoContainer.innerHTML = `<div>Hello ❤️ Our Memory 💕</div>`;
  memoContainer.classList.add("show");
  pageContent.classList.add("blur");

});
memoContainer.addEventListener("click", (e) => {
  if (e.target === memoContainer) {
    memoContainer.classList.remove("show");
    pageContent.classList.remove("blur");
  }
});
// letter
const letter=document.querySelector('.js-letter')
const letterContainer=document.querySelector('.js-letter--container')
letter.addEventListener("click", () => {
  letterContainer.innerHTML=`<div>Hello ❤️ Our letter 💕</div>`;
  letterContainer.classList.add("show");
  pageContent.classList.add("blur");

});

letterContainer.addEventListener("click", (e) => {
  if (e.target === letterContainer) {
    letterContainer.classList.remove("show");
    pageContent.classList.remove("blur");
  }
});
