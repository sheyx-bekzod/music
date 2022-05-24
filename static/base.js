const login = document.querySelector(".login")
const registerWind = document.querySelector('.register')

const loginLink = document.querySelector('.login-link')
const registerlink = document.querySelector('.register-link')
console.log(registerlink);

const block2 = document.querySelector('.block_2')
const block1 = document.querySelector('.block_1')

if (login) {
  login.addEventListener("click", openModal)
}

function openModal() {
  setTimeout(() => {
    registerWind.classList.remove('register-none')
  }, 1000);
}

if (window) {
  window.addEventListener("click", closeMenu)
}

function closeMenu(event) {
  if (event.target === registerWind) {
    registerWind.classList.add('register-none')
    registerWind.style.transition = 'easy-in 2.5s'
  }
}

if (loginLink && registerlink) {
  loginLink.addEventListener("click", openLogin)
  registerlink.addEventListener("click", openRegister)
}


function openLogin() {
  block1.classList.add("block_hide")
  block2.classList.remove('block_hide')
}

function openRegister() {
  block1.classList.remove("block_hide")
  block2.classList.add('block_hide')
}


// singer_info.html // corousel 
const wrapper = document.querySelector('.wrapper'),
  leftBtn = document.querySelector('.leftBtn'),
  rightBtn = document.querySelector('.rightBtn'),
  wrapper_album = document.querySelectorAll('.wrapper_img');

let index = 0;

function changeImage() {
  if (index > wrapper_album.length - 1) {
    index = 0
  }
  else if (index < 0) {
    index = wrapper_album.length - 1;
  }
  wrapper.style.transform = `translateX(${-index * 100}px)`
}

rightBtn.addEventListener('click', function change() {
  index++;
  changeImage()
});

leftBtn.addEventListener('click', function change() {
  index--;
  changeImage()
});



