"use strict"
let preloader = document.querySelector('.preloader');
window.addEventListener('load', function(){
    preloader.classList.add('fade');
    setTimeout(function(){
        preloader.style.display = 'none';
    }, 3000);
});

let card = document.querySelectorAll('.card');

let active =card[0].lastElementChild;
active.classList.add('active');
console.log(active);
for (let i = 0; i<card.length; i++) {
	card[i].addEventListener('click', function(){
console.log(12)
		active.classList.remove('active')
		card[i].lastElementChild.classList.add('active');
		active = card[i].lastElementChild;
       
	});
}