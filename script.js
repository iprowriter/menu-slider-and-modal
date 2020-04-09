
const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');


//To show Toggle Nav 
toggle.addEventListener('click', () => 
document.body.classList.toggle('show-nav')
)

//To show modal i.e the popup

open.addEventListener('click', () =>
modal.classList.add('show-modal'));

//To hide modal
close.addEventListener('click', () => 
modal.classList.remove('show-modal'));

//option2 Hide modal on outside click
window.addEventListener('click', e => 
e.target == modal? modal.classList.remove('show-modal'): false);