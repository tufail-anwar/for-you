
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
  const imgPath = location.pathname.includes("HTML-File")
    ? "../image/"
    : "image/";
  memoContainer.innerHTML = `
  <div class="memory-box">

    <div class="memory-card ">
      <img src="${imgPath}image1.jpeg">
      <p class="p-1" >Jb hm mile the roadster mai tb ki pic hai .pic to acchi nhi hai but hmari phli kiss isi din hui thi❤️</p>
    </div>

    <div class="memory-card">
      <img src="${imgPath}image2.jpeg">
      <p class="p-2">Is bar jb hm aye the to app dusre resturant mai gyi saste k wjh se chle gye the. kitna chota tha nhh but bhi fir bhi appni harkatoo se baz nhi a rhe the 😂 or appne isi din mujhe phle chappar mara tha 😊</p>
    </div>

    <div class="memory-card">
      <img src="${imgPath}image3.jpeg">
      <p class="p-3">Ye tb ki pic hai .jb hm appse last bar mile the appko chorne ka mnn nhi kr rha tha .mnn kr rha pkr rkhe kahi nhi jane de 🥺</p>
    </div>

     <div class="memory-card">
      <img src="${imgPath}image4.jpeg">
      <p class="p-4">Inhi ankho de drten hai hmm but pyaar bhi inhi se krte hai  😘💕</p>
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
  letterContainer.innerHTML=`<div class="letter-box js-box">Hello! Madam jii <p>❤️ 5 sal ho gye or pta bhi chala .ajj kl key relationships mahine bhr main tut jate hai . hm itte sal se sth hai hmari biuch ldai bhi hui ,mahino bhr baat bnd rha but appke dil mere liye pyaar kmm nhi hua .Mujhe toh phle viswas hi nhi tha k koi mere jaise ldke ko itta pyaar kr skta hai. hmm ittna pyaar deserve nhi krte the but app meri aukat se jyda pyaar kiya . mai itta bura ldka hun , itti pyaari ldki hurt kr deta hun ,rula deta hun but mai bhi apse boht pyaar krta hun lnk appna pyaar dikha nhi pata .mere liye app boht important (sbse jyda important).Appke liye mai hmm kch bhi kr skata hun . I lOVE U Sooooo Much baccha . main appke bina  kch nhi 🥺.Please app kbhi chor k mt jana . jaan maine appko Valentine week main bhi rula diya , meri wjh se apki tabyat bhi bigad gyi .I am so sorry baccha .app jo kahogi wo karunga but aise gussa mt raho mere se.    💕</p></div>`;
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
