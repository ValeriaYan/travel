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


const buttonLog = document.querySelector('.header__button');
const btnLog = document.querySelector('.navbar__item_account');
const popup = document.querySelector('.popup');
const login = document.querySelector('.popup__login');
const register = document.querySelector('.popup__register');
const registerButton = document.querySelector('.popup__link_login');
const loginButton = document.querySelector('.popup__link_register');

const signinButton = document.querySelector('.popup__signin');
const signupButton = document.querySelector('.popup__signup');
const inputs = document.querySelectorAll('.popup__input');


buttonLog.addEventListener('click', function(){
  popup.classList.add('_active');
  document.body.style.overflow = 'hidden'; 
})

btnLog.addEventListener('click', function(){
  popup.classList.add('_active');
  document.body.style.overflow = 'hidden'; 
})

popup.addEventListener('click', function(event){
  if(event.target.classList.contains('popup__body') || event.target.classList.contains('popup')) {
    popup.classList.remove('_active');
    document.body.style.overflow = 'auto';
    for(let input of inputs){
      input.value = "";
    }
  }
})

registerButton.addEventListener('click', function(event){
  login.style.display = 'none';
  register.style.display = 'block';
})

loginButton.addEventListener('click', function(event){
  register.style.display = 'none';
  login.style.display = 'block';
})



signinButton.addEventListener('click', function(){
  alert(`Email: ${inputs[0].value} \nPassword: ${inputs[1].value}`);
})

signupButton.addEventListener('click', function(){
  alert(`Email: ${inputs[2].value} \nPassword: ${inputs[3].value}`);
})
