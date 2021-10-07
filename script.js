const show = document.querySelector('.show');
const mask = document.querySelector('.mask');

show.addEventListener("click", function(){
  mask.classList.add('active');
});

function closeModal(){
  mask.classList.remove('active');
}

const close = document.querySelector('.close');

close.addEventListener("click", function(){
  closeModal();
});
mask.addEventListener("click", function(){
  closeModal();
});