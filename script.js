const curtain = document.querySelector('.curtain');

curtain.addEventListener('click', () => { //убрать занавес
   curtain.classList.add('remove');
});

const lamp = document.querySelector('.lamp-image');
const tail = document.querySelector('.tail');
const light = document.querySelector('.light');
const requisite = document.querySelector('.objects-requisite');


lamp.addEventListener('click', () => {
    tail.style.transform = "translateY(+5%)";
    setTimeout(() => { tail.style.transform = "translateY(0%)"; }, 900);
    light.classList.toggle('on');
    requisite.classList.toggle('display');
    
});

const rabbit = document.querySelector('.objects-rabbit');
const bird = document.querySelector('.objects-bird');
const rabbitClickable = document.querySelector('.rabbit-clickable');
const birdClickable = document.querySelector('.bird-clickable');

rabbitClickable.addEventListener('click', () => {
    rabbitClickable.classList.add("hide");
    birdClickable.classList.remove("hide");

    rabbit.classList.add('hide');
    bird.classList.remove('hide');
});

birdClickable.addEventListener('click', () => {
    rabbitClickable.classList.remove("hide");
    birdClickable.classList.add("hide");

    bird.classList.add('hide');
    rabbit.classList.remove('hide');
});