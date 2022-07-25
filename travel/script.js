const burger = document.querySelector('.header__burger');
const burgerSpan = document.querySelectorAll('.header__burger');
const menu = document.querySelector('.header__navbar');
const navbarClose = document.querySelector('.navbar__x');
const shadow = document.querySelector('.wrapper__shadow');

burger.addEventListener('click', function() {
    menu.classList.add('_active');
    shadow.classList.add('_active');
});

navbarClose.addEventListener('click', function() {
    menu.classList.remove('_active');
    shadow.classList.remove('_active');
})

document.addEventListener('click', function(event) {
    if(event.target != menu && event.target.parentElement != menu && event.target != burger && event.target.parentElement != burger && menu.classList.contains('_active')) {
        menu.classList.remove('_active');
        shadow.classList.remove('_active');
        console.log(event.target);
    }
})



const widthContent = document.querySelector('.destinations__slider-container').clientWidth;
const slider = document.querySelector('.destinations__slider');
const sliderItems = document.querySelectorAll('.destinations__photo');
const radioItems = document.querySelectorAll('.radio__input');
const buttons = document.querySelector('.destinations__buttons')
const quantitySliderItems = sliderItems.length;
const widthSlider = widthContent * quantitySliderItems;
const prev = document.querySelector('.destinations__prev');
const next = document.querySelector('.destinations__next');
let startPosition = -widthContent
let position = startPosition;
let positionRadio = 0;

slider.style.transform = `translate(${position}px)`;

for(let item of sliderItems) {
  item.style.minWidth = widthContent + 'px';
}

checkButton();
prev.addEventListener('click', function() {
  position += widthContent;
  slider.style.transform = `translate(${position}px)`;
  checkButton();
  radioItems[--positionRadio].checked = true;
});

next.addEventListener('click', function() {
  position -= widthContent;
  slider.style.transform = `translate(${position}px)`;
  checkButton();
  radioItems[++positionRadio].checked = true;
});

function checkButton() {
  if(position === startPosition) {
    prev.style.pointerEvents = 'none';
    prev.style.opacity = '0.5';
}else if(position === -(widthContent * (quantitySliderItems - 2))) {
    next.style.pointerEvents = 'none'
    next.style.opacity = '0.5';
}else {
    prev.style.pointerEvents = 'auto';
    prev.style.opacity = '1';
    next.style.pointerEvents = 'auto';
    next.style.opacity = '1';
  }
}

buttons.addEventListener('click', function(event) {
  if(event.target.gatName === 'DIV') { return;}
  positionRadio = event.target.value - 1;
  position = -((event.target.value) * widthContent);
  slider.style.transform = `translate(${position}px)`;
  checkButton();
})