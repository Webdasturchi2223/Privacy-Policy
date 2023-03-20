let btn = document.querySelector('.header__btn')
let onOFFbtn = document.querySelector('.header__btn i')

btn.addEventListener('click', function(){
    document.querySelector('html').classList.toggle('night')
    onOFFbtn.classList.toggle('fa-sun')
    onOFFbtn.classList.toggle('fa-moon')
})