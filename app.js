const openbtn = document.querySelector('.open')
const navbottom = document.querySelector('.nav-bottom')



openbtn.addEventListener('click', function (){
    navbottom.classList.toggle('opennav')
})