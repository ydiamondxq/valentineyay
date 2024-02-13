const wrapper = document.querySelector('.wrapper');
const question =document.querySelector('.question');
const gif = document.querySelector('.gif');
const yes8tn = document.querySelector('.yes-btn');
const no8tn = document.querySelector('.no-btn');

yes8tn.addEventListener("click", () => {
    question.innerHTML = "Ура^^ 🎉";
    gif.src =
      "https://media2.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif" 

});

no8tn.addEventListener('mouseover', () => {
    const noBtnRect = no8tn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    no8tn.style.left = randomX + 'px';
    no8tn.style.top = randomY + 'px' ;
})
