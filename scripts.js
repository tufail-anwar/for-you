
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
const memoBtn = document.querySelector('.js-memo');
const memoContainer = document.querySelector('.js-memo--container');

memoBtn.addEventListener("click", () => {
  memoContainer.innerHTML = `
  <div class="memory-box">

    <div class="memory-card">
      <img src="/image/memory-image1.jpg">
      <p>Every day feels magical with you ❤️</p>
    </div>

    <div class="memory-card">
      <img src="/image/memory-image2.jpg">
      <p>Your smile is my favorite view 😊</p>
    </div>

    <div class="memory-card">
      <img src="/image/memory-image3.jpg">
      <p>Together forever, no matter what 💕</p>
    </div>

     <div class="memory-card">
      <img src="/image/memory-image3.jpg">
      <p>Together forever, no matter what 💕</p>
    </div>

  </div>
`;


  memoContainer.classList.add("show");
  pageContent.classList.add("blur");
});

memoContainer.addEventListener("click", (e) => {
  if (e.target === memoContainer) {
    memoContainer.classList.remove("show");
    pageContent.classList.remove("blur");
  }else{
     memoContainer.classList.remove("show");
    pageContent.classList.remove("blur");
  }
});
// letter
const letter=document.querySelector('.js-letter')
const letterContainer=document.querySelector('.js-letter--container')
letter.addEventListener("click", () => {
  letterContainer.innerHTML=`<div class="letter-box js-box">Hello! Madam jii <p>❤️Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem animi eum accusantium in voluptas totam eos ipsum dolorem perspiciatis est, inventore laborum, obcaecati vitae nesciunt ullam nemo facere suscipit dolore.
        Numquam sequi, aut quibusdam illo mollitia beatae eveniet ab eligendi deserunt repellat voluptates dicta animi recusandae a aliquid dolore atque autem assumenda rem consequatur! Voluptate possimus fugiat autem adipisci iste!
        Dolor minima a enim repellat? In doloribus perspiciatis eum ad magnam repellendus necessitatibus cupiditate. Dolore delectus necessitatibus eius laudantium at deserunt provident sapiente tempore a, blanditiis, adipisci maxime obcaecati repudiandae?
        Repellat corporis molestiae aliquid atque quibusdam architecto nam rem consectetur, impedit accusantium vel debitis. Unde quis et obcaecati consectetur? Impedit omnis quis harum eum maxime animi rerum, iure nemo iusto!    💕</p>From Your Love ❤️</div>`;
  letterContainer.classList.add("show");
  pageContent.classList.add("blur");

});

letterContainer.addEventListener("click", (e) => {
  if (e.target === letterContainer) {
    letterContainer.classList.remove("show");
    pageContent.classList.remove("blur");
  }else{
    letterContainer.classList.remove("show");
    pageContent.classList.remove("blur");
  }
});
