const login = document.querySelector(".login")
const registerWind = document.querySelector('.register')

const loginLink = document.querySelector('.login-link')
const registerlink = document.querySelector('.register-link')
console.log(registerlink);

const block2 = document.querySelector('.block_2')
const block1 = document.querySelector('.block_1')


login.addEventListener("click",openModal)

function openModal() {
  setTimeout(() => {
    registerWind.classList.remove('register-none')
    registerWind.style.transition = 'easy-in 2.5s'
  }, 1000);
}

window.addEventListener("click",closeMenu)

function closeMenu(event) {
    if (event.target === registerWind) {
      registerWind.classList.add('register-none')
      registerWind.style.transition = 'easy-in 2.5s'
    }
}

loginLink.addEventListener("click",openLogin)
registerlink.addEventListener("click",openRegister)

function openLogin(){
  block1.classList.add("block_hide")
  block2.classList.remove('block_hide')
}

function openRegister(){
  block1.classList.remove("block_hide")
  block2.classList.add('block_hide')
}
